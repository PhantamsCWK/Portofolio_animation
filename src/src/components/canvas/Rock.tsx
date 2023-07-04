import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader'

const Rock = () => {
  const rock = useGLTF('./lava_rock/lava_rock.glb')

  return (
    <primitive 
      object={rock.scene}
      scale={2.5}
      position-y={0}
      rotation-7={0}
    />
  )
}

const RockCanvas = () => {
  return (
    <Canvas 
      shadows
      frameloop='demand'
      gl={{ preserveDrawingBuffer: true }}
      camera={{ 
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6]
       }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          autoRotate={true}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Rock />
        <Preload all/>
      </Suspense>
    </Canvas>
  )
}
export default RockCanvas