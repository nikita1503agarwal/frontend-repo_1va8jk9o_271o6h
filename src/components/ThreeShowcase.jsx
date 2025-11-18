import { Suspense, useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Float, OrbitControls } from '@react-three/drei'

function SpinningTorus({ color = '#60a5fa' }) {
  const ref = useRef()

  useFrame((state, delta) => {
    if (!ref.current) return
    ref.current.rotation.x += delta * 0.35
    ref.current.rotation.y += delta * 0.25
  })

  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={ref} castShadow receiveShadow>
        <torusKnotGeometry args={[1.1, 0.35, 220, 18]} />
        <meshPhysicalMaterial
          metalness={0.9}
          roughness={0.15}
          color={color}
          transmission={0.2}
          thickness={0.6}
          envMapIntensity={1.2}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>
    </Float>
  )
}

export default function ThreeShowcase() {
  const hue = useMemo(() => Math.floor(Math.random() * 360), [])
  const color = `hsl(${hue} 90% 65%)`

  return (
    <div className="relative h-64 w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900/50">
      <Canvas camera={{ position: [0, 0, 4.5], fov: 50 }} shadows>
        <color attach="background" args={[0x0b1220]} />
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <spotLight position={[5, 8, 6]} angle={0.5} penumbra={0.8} intensity={2} castShadow />
          <SpinningTorus color={color} />
          <Environment preset="city" />
        </Suspense>
        <OrbitControls enablePan={false} maxDistance={8} minDistance={3} />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="absolute inset-x-0 bottom-0 p-3 text-center text-xs text-blue-200/70">Interactive 3D preview</div>
    </div>
  )
}
