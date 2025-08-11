import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh, BufferGeometry } from 'three'

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

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    const mesh = meshRef.current
    if (!mesh) return

    // 1) Animaciones base
    let dx = 0, dy = 0, dz = 0
    if (animations.includes('rotate')) dy += 0.01
    if (animations.includes('spin')) { dx += 0.01; dy += 0.01; dz += 0.005 }

    if (animations.includes('bobbing')) {
      const bob = Math.sin(t * 2) * 0.2
      mesh.position.y = position[1] + bob
    }

    // 2) Componente de hover (usa state.pointer normalizado [-1..1])
    const targetX = hovered.current ? -state.pointer.y * 0.06 : 0 // invertir Y para sensación natural
    const targetY = hovered.current ?  state.pointer.x * 0.06 : 0

    // LERP suave hacia el objetivo
    extraSpeed.current.x += (targetX - extraSpeed.current.x) * 0.15
    extraSpeed.current.y += (targetY - extraSpeed.current.y) * 0.15

    dx += extraSpeed.current.x
    dy += extraSpeed.current.y

    // 3) Aplicar rotación acumulada
    mesh.rotation.x += dx
    mesh.rotation.y += dy
    mesh.rotation.z += dz
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
