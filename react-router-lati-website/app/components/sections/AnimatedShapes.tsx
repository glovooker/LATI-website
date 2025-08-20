import { Canvas } from '@react-three/fiber'
import ThreeObject from './ThreeComponent'
import { createRoundedCube } from './Geometries'
import * as THREE from 'three'
import { checkIfIsMobile } from './Hero'

const CENFOTEC_BLUE = "#2b7ee4"

interface AnimatedShapesProps {
  variant?: 'hero' | 'about' | 'research' | 'projects' | 'team' | 'contact'
  className?: string
}

export default function AnimatedShapes({ variant = 'hero', className = '' }: AnimatedShapesProps) {
  const isMobile = checkIfIsMobile()
  
  // Different shape configurations for each section
  const shapeConfigs = {
    hero: [
      {
        geometry: createRoundedCube(),
        position: isMobile ? [0, 1, 3] : [3, 0, 2],
        rotation: [-0.4, 0, 0],
        color: CENFOTEC_BLUE,
        animations: ['bobbing', 'spin'],
        scale: isMobile ? [1, 1, 1] : [2, 2, 2],
      },
      {
        geometry: new THREE.IcosahedronGeometry(1),
        position: isMobile ? [-1, 2, 4] : [6, 3, -3],
        rotation: [1, 0, 0],
        color: CENFOTEC_BLUE,
        scale: isMobile ? [0.5, 0.5, 0.5] : [1, 1, 1],
        animations: ['bobbing', 'spin'],
        wireframe: true,
      },
      {
        geometry: new THREE.IcosahedronGeometry(1),
        position: isMobile ? [1.6, -1.6, 2] : [5, -2, 2],
        rotation: [1, 0, 0],
        color: CENFOTEC_BLUE,
        scale: isMobile ? [0.7, 0.7, 0.7] : [1, 1, 1],
        animations: ['bobbing', 'rotate'],
      },
      {
        geometry: new THREE.ConeGeometry(4.5, 10, 10),
        position: isMobile ? [-1.5, -2, 2] : [1.2, -2, 0],
        rotation: isMobile ? [5, 0, 2] : [0, 0, -7],
        color: CENFOTEC_BLUE,
        animations: ['bobbing', 'rotate'],
        wireframe: true,
        scale: [0.2, 0.2, 0.2],
      },
      {
        geometry: new THREE.ConeGeometry(4.5, 10, 50),
        position: isMobile ? [2, 3, -3] : [3, 3, -5],
        rotation: [-0.5, 0, -5],
        color: CENFOTEC_BLUE,
        animations: ['bobbing', 'rotate'],
        scale: [0.2, 0.2, 0.2],
      },
      {
        geometry: new THREE.TorusGeometry(9.25, 2.30, 15, 30),
        position: isMobile ? [1.2, -4, -2] : [7, 3.5, -1],
        rotation: [-0.5, 0, 0],
        color: CENFOTEC_BLUE,
        animations: ['bobbing', 'spin'],
        scale: [0.1, 0.1, 0.1],
      },
    ],
    about: [
      {
        geometry: new THREE.IcosahedronGeometry(1),
        position: isMobile ? [2, 1, 2] : [4, 2, -2],
        rotation: [0.5, 0, 0],
        color: CENFOTEC_BLUE,
        animations: ['bobbing', 'rotate'],
        scale: isMobile ? [0.6, 0.6, 0.6] : [1.2, 1.2, 1.2],
      },
      {
        geometry: new THREE.BoxGeometry(1, 1, 1),
        position: isMobile ? [-1.5, -1, 3] : [-3, -1, 1],
        rotation: [0, 0.3, 0],
        color: CENFOTEC_BLUE,
        animations: ['bobbing', 'spin'],
        scale: isMobile ? [0.5, 0.5, 0.5] : [0.8, 0.8, 0.8],
        wireframe: true,
      },
    ],
    research: [
      {
        geometry: new THREE.OctahedronGeometry(1),
        position: isMobile ? [1.5, 1.5, 2] : [5, 1, -1],
        rotation: [0.3, 0.2, 0],
        color: CENFOTEC_BLUE,
        animations: ['bobbing', 'rotate'],
        scale: isMobile ? [0.7, 0.7, 0.7] : [1.1, 1.1, 1.1],
      },
      {
        geometry: new THREE.TetrahedronGeometry(1),
        position: isMobile ? [-2, 0, 3] : [-4, 0, 2],
        rotation: [0, 0, 0.4],
        color: CENFOTEC_BLUE,
        animations: ['bobbing', 'spin'],
        scale: isMobile ? [0.6, 0.6, 0.6] : [0.9, 0.9, 0.9],
        wireframe: true,
      },
    ],
    projects: [
      {
        geometry: new THREE.DodecahedronGeometry(1),
        position: isMobile ? [2, 1, 2] : [4, 1, -2],
        rotation: [0.2, 0.1, 0],
        color: CENFOTEC_BLUE,
        animations: ['bobbing', 'rotate'],
        scale: isMobile ? [0.5, 0.5, 0.5] : [0.8, 0.8, 0.8],
      },
      {
        geometry: new THREE.SphereGeometry(1, 8, 6),
        position: isMobile ? [-1.8, -0.5, 2.5] : [-3.5, -0.5, 1.5],
        rotation: [0, 0, 0],
        color: CENFOTEC_BLUE,
        animations: ['bobbing', 'spin'],
        scale: isMobile ? [0.4, 0.4, 0.4] : [0.6, 0.6, 0.6],
        wireframe: true,
      },
    ],
    team: [
      {
        geometry: new THREE.IcosahedronGeometry(1),
        position: isMobile ? [1.8, 1.2, 2] : [3.5, 1.2, -1.5],
        rotation: [0.4, 0.3, 0],
        color: CENFOTEC_BLUE,
        animations: ['bobbing', 'rotate'],
        scale: isMobile ? [0.6, 0.6, 0.6] : [1, 1, 1],
      },
      {
        geometry: new THREE.ConeGeometry(1, 2, 8),
        position: isMobile ? [-2.2, 0.8, 2.8] : [-4.2, 0.8, 2],
        rotation: [0, 0, 0.2],
        color: CENFOTEC_BLUE,
        animations: ['bobbing', 'spin'],
        scale: isMobile ? [0.5, 0.5, 0.5] : [0.8, 0.8, 0.8],
        wireframe: true,
      },
    ],
    contact: [
      {
        geometry: new THREE.BoxGeometry(1, 1, 1),
        position: isMobile ? [2.2, 1.5, 1.8] : [4.5, 1.5, -1.8],
        rotation: [0.2, 0.1, 0.1],
        color: CENFOTEC_BLUE,
        animations: ['bobbing', 'rotate'],
        scale: isMobile ? [0.6, 0.6, 0.6] : [1, 1, 1],
      },
      {
        geometry: new THREE.IcosahedronGeometry(1),
        position: isMobile ? [-1.5, -0.8, 2.2] : [-3.8, -0.8, 1.8],
        rotation: [0, 0, 0.3],
        color: CENFOTEC_BLUE,
        animations: ['bobbing', 'spin'],
        scale: isMobile ? [0.5, 0.5, 0.5] : [0.8, 0.8, 0.8],
        wireframe: true,
      },
    ],
  }

  const shapes = shapeConfigs[variant]

  return (
    <div className={`absolute inset-0 ${className}`}>
      <Canvas
        style={{ width: '100%', height: '100%' }}
        camera={{ position: [0, 0, 10], fov: 50 }}
        gl={{ alpha: true, antialias: true }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0)
        }}
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 5]} />

        {shapes.map((shape, index) => (
          <ThreeObject
            key={index}
            {...shape}
          />
        ))}
      </Canvas>
    </div>
  )
}
