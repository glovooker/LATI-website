import { Canvas } from '@react-three/fiber'
import ThreeObject from './ThreeComponent'
import { createRoundedCube, createClosedHalfSphere, createClosedHalfCylinder } from './Geometries'
import * as THREE from 'three'

const CENFOTEC_BLUE = "#2b7ee4"
const icosahedron = new THREE.IcosahedronGeometry(1)
const cone = new THREE.ConeGeometry(4.5, 10, 25)
const torus = new THREE.TorusGeometry(9.25, 2.30, 15, 30)
const cube = createRoundedCube();

export default function Hero() {
  return (
    <section className="min-h-screen relative isolate overflow-hidden bg-white">
      {/* Gradiente celeste en esquina superior derecha */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-sky-300/60 via-sky-200/40 via-sky-100/20 to-white"></div>
      
      {/* Canvas envuelto en contenedor absoluto */}
      <div className="absolute inset-0 z-100">
        <Canvas
          style={{ width: '100%', height: '100%' }}
          camera={{ position: [0, 0, 10], fov: 50 }}
          gl={{ alpha: true, antialias: true }}
          onCreated={({ gl }) => {
            // Transparente de verdad: color negro con alpha 0
            gl.setClearColor(0x000000, 0)
          }}
        >
          <ambientLight intensity={1.5} />
          <directionalLight position={[5, 5, 5]} />

          <ThreeObject
            geometry={cube}
            position={[3, 0, 2]}
            rotation={[-0.4, 0, 0]}
            color={CENFOTEC_BLUE}
            animations={['bobbing', 'spin']}
            scale={[2, 2, 2]}
          />
          <ThreeObject
            geometry={icosahedron}
            position={[6, 3, -3]}
            rotation={[1, 0, 0]}
            color={CENFOTEC_BLUE}
            animations={['bobbing', 'rotate']}
            wireframe
          />
          <ThreeObject
            geometry={icosahedron}
            position={[5, -2, 2]}
            rotation={[0, 0, 0]}
            color={CENFOTEC_BLUE}
            animations={['bobbing', 'rotate']}
          />
          <ThreeObject
            geometry={cone}
            position={[1.2, -2, 0]}
            rotation={[0, 0, -7]}
            color={CENFOTEC_BLUE}
            animations={['bobbing', 'rotate']}
            wireframe
            scale={[0.2, 0.2, 0.2]}
          />

          <ThreeObject
            geometry={cone}
            position={[3, 3, -5]}
            rotation={[-0.5, 0, -5]}
            color={CENFOTEC_BLUE}
            animations={['bobbing', 'rotate']}
            scale={[0.2, 0.2, 0.2]}
          />

          <ThreeObject
            geometry={torus}
            position={[7, 3.5, -1]}
            rotation={[-0.5, 0, 0]}
            color={CENFOTEC_BLUE}
            animations={['bobbing', 'rotate']}
            scale={[0.1, 0.1, 0.1]}
          />
          {/*<ThreeObject
            geometry={createClosedHalfSphere()}
            position={[3, 0, 0]}
            rotation={[10, 0, 0]}
            color={CENFOTEC_BLUE}
            animations={['bobbing', 'rotate']}
            scale={0.5}
          />
          <ThreeObject
            geometry={createClosedHalfCylinder()}
            position={[-3, 0, 0]}
            rotation={[0, 0, 10]}
            color={CENFOTEC_BLUE}
            animations={['bobbing', 'rotate']}
            scale={0.5}
          />*/}
        </Canvas>
      </div>

      {/* Líneas del fondo: detrás del canvas */}
      <div className="absolute inset-0 opacity-30 pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-32 h-1 bg-blue-700 transform rotate-45"></div>
        <div className="absolute top-40 right-20 w-24 h-1 bg-blue-800 transform -rotate-30"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-1 bg-blue-700 transform rotate-12"></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-1 bg-blue-800 transform -rotate-45"></div>
        <div className="absolute bottom-20 right-1/4 w-36 h-1 bg-blue-700 transform rotate-60"></div>
        
        {/* Líneas adicionales azules */}
        <div className="absolute top-16 right-32 w-28 h-1 bg-blue-800 transform rotate-60"></div>
        <div className="absolute top-24 left-1/3 w-36 h-1 bg-blue-700 transform -rotate-15"></div>
        <div className="absolute top-60 right-16 w-20 h-1 bg-blue-800 transform rotate-75"></div>
        <div className="absolute top-80 left-16 w-44 h-1 bg-blue-700 transform -rotate-20"></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-1 bg-blue-800 transform rotate-30"></div>
        <div className="absolute bottom-40 right-32 w-24 h-1 bg-blue-700 transform -rotate-50"></div>
        <div className="absolute bottom-16 left-1/3 w-40 h-1 bg-blue-800 transform rotate-25"></div>
        <div className="absolute top-2/3 right-1/2 w-28 h-1 bg-blue-700 transform -rotate-35"></div>
      </div>

      {/* Contenido: por encima del canvas */}
      <div className="container mx-auto px-4 pt-16 pb-4 min-h-screen flex items-center relative z-20">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16 w-full">
          <div className="flex-1 text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-gray-900">Welcome to the </span>
                <span className="text-[#006AEA]">SpatialLab</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
                Where research and immersive experiences{" "}
                <span className="text-[#006AEA] font-semibold">collide!</span>
              </p>
            </div>
            <button className="bg-[#0A2E6E] hover:bg-[#0A2E6E]/90 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Dive in!
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
