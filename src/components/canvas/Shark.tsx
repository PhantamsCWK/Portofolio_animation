import { Suspense, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useAnimations, useGLTF } from '@react-three/drei'

const Shark = ({ isMobile } : { isMobile: boolean } ) => {
  const { scene, animations } = useGLTF('./shark/shark.glb')
  const { ref, actions, names } = useAnimations(animations)

  useEffect(() => {
    const name = names[0]
    actions[name]?.play()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight 
        position={[-10, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive 
        ref={ref}
        object={scene}
        scale={isMobile ? 2.5 : 6}
        position={isMobile ? [0,-2,0] : [1, -3,0]}
      />
    </mesh>
  )
}

const SharkCanvas = ({ isMobile } : { isMobile: boolean }) => {
  return (
    <Canvas
      frameloop='always'
      shadows
      camera={{ position: [0, 25, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={null}>
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Shark isMobile={isMobile}/>
        <Preload all/>
      </Suspense>
    </Canvas>
  )
}

export default SharkCanvas