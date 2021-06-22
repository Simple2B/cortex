import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage } from "@react-three/drei";
import { Fiat } from "./gltf/free_1995_fiat_punto_gt/Fiat";

function App() {
  const [rotate, setRotate] = useState(false);

  const toggleRotate = () => {
    setRotate(!rotate);
  };

  return (
    <>
      <button onClick={toggleRotate}>Rotate</button>
      <Canvas
        shadows
        dpr={[1, 2]}
        camera={{ position: [0, 0, 150], fov: 60, zoom: 1.2 }}
      >
        <Suspense fallback={null}>
          <Stage
            environment="city"
            intensity={0.5}
            contactShadowOpacity={0.6}
            contactShadowBlur={1}
          >
            <Fiat />
          </Stage>
        </Suspense>
        <OrbitControls
          autoRotate={rotate}
          enablePan={false}
          enableZoom={false}
        />
      </Canvas>
    </>
  );
}

export default App;
