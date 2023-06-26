import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Plane,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Bubble = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);

  return (
    <>
      <ambientLight />
      <directionalLight 
        position={[-5, 5, 5]}
        castShadow
      />
      <mesh castShadow receiveShadow scale={2.75}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial
          color='#13255A'
          opacity={0.7}
          polygonOffset
          polygonOffsetFactor={100}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 0]}
          scale={1}
          map={decal}
          flatShading
          transparent
        />
      </mesh>
    </>
  );
};

const BubbleCanvas = ({ icon }) => {
  return (
    <Canvas
      frameloop='always'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      shadows
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />

        <Float speed={4} rotationIntensity={1} floatIntensity={2}>
          <Bubble imgUrl={icon} />
        </Float>
        <Preload all/>
      </Suspense>
    </Canvas>
  );
};

export default BubbleCanvas;