import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh, BufferGeometry, MathUtils } from 'three'

type AnimationType = 'bobbing' | 'rotate' | 'spin'

interface ThreeObjectProps {
  geometry: BufferGeometry
  position?: [number, number, number]
  rotation?: [number, number, number]
  scale?: [number, number, number]
  color?: string
  wireframe?: boolean
  visible?: boolean
  opacity?: number
  transparent?: boolean
  castShadow?: boolean
  receiveShadow?: boolean
  animations?: AnimationType[]
}

/** Constantes de animación — suaves y lentas */
const ROTATE_SPEED = 0.003
const SPIN_SPEED = { x: 0.007, y: 0.007, z: 0.007 }

const BOB_FREQ = 1.0      // antes 2 → más lento
const BOB_AMPL = 0.12     // antes 0.2 → más sutil

const HOVER_SENS = 0.03   // antes 0.06 → menos sensible
const HOVER_SMOOTH = 6.0  // factor de amortiguación para damp (más alto = más suave)

const ThreeObject: React.FC<ThreeObjectProps> = ({
  geometry,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = [1, 1, 1],
  color = '#007bff',
  wireframe = false,
  visible = true,
  opacity = 1,
  transparent = opacity < 1,
  castShadow = false,
  receiveShadow = false,
  animations = [],
}) => {
  const meshRef = useRef<Mesh>(null)
  const hovered = useRef(false)
  const extraSpeed = useRef({ x: 0, y: 0 }) // velocidad extra por hover

  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime()
    const mesh = meshRef.current
    if (!mesh) return

    // 1) Animaciones base (independientes del framerate)
    let dx = 0, dy = 0, dz = 0

    if (animations.includes('rotate')) dy += ROTATE_SPEED
    if (animations.includes('spin')) {
      dx += SPIN_SPEED.x
      dy += SPIN_SPEED.y
      dz += SPIN_SPEED.z
    }

    if (animations.includes('bobbing')) {
      const bob = Math.sin(t * BOB_FREQ) * BOB_AMPL
      mesh.position.y = position[1] + bob
    }

    // 2) Componente de hover (puntero normalizado [-1..1])
    const targetX = hovered.current ? -state.pointer.y * HOVER_SENS : 0 // invertir Y para sensación natural
    const targetY = hovered.current ?  state.pointer.x * HOVER_SENS : 0

    // Suavizado exponencial estable con delta (frame-rate independent)
    extraSpeed.current.x = MathUtils.damp(extraSpeed.current.x, targetX, HOVER_SMOOTH, delta)
    extraSpeed.current.y = MathUtils.damp(extraSpeed.current.y, targetY, HOVER_SMOOTH, delta)

    dx += extraSpeed.current.x
    dy += extraSpeed.current.y

    // 3) Aplicar rotación acumulada (escala por delta para suavizar en monitores rápidos)
    mesh.rotation.x += dx * delta * 60
    mesh.rotation.y += dy * delta * 60
    mesh.rotation.z += dz * delta * 60
  })

  return (
    <mesh
      ref={meshRef}
      geometry={geometry}
      position={position}
      rotation={rotation}
      scale={scale}
      visible={visible}
      castShadow={castShadow}
      receiveShadow={receiveShadow}
      onPointerOver={(e) => { e.stopPropagation(); hovered.current = true; document.body.style.cursor = 'grab' }}
      onPointerOut={() => { hovered.current = false; document.body.style.cursor = '' }}
      // onPointerMove no es necesario: usamos state.pointer en useFrame
    >
      <meshStandardMaterial
        color={color}
        wireframe={wireframe}
        opacity={opacity}
        transparent={transparent}
      />
    </mesh>
  )
}

export default ThreeObject
