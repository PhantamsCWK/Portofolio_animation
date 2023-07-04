/* eslint-disable */
import { useRef ,Suspense } from 
'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as random from 'maath/random';

const Particles = () => {
  const ref = useRef<any>(null);
  
  const sphere = Float32Array.from(random.inSphere(new Float32Array(1000), { radius: 1 }));

  useFrame((_state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  })

  console.log(sphere)


  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled >
        <PointMaterial 
          transparent
          color="#13255A"
          size={0.001}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

const ParticlesCanvas = () => {
  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Particles />
          <Preload all/>
        </Suspense>
      </Canvas>
    </div>
  )
}

export default ParticlesCanvas