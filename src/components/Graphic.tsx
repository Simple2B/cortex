import React, { useRef, useState, useEffect, Ref, Suspense } from "react";
import { OrbitControls, Stage, useGLTF } from "@react-three/drei";

import { Canvas } from "@react-three/fiber";
import { Model } from "../gltf/free_zuk_3d_model/Scene";

export const Graphic: React.FC = () => {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Stage
          environment="city"
          intensity={0.5}
          contactShadowOpacity={0.6}
          contactShadowBlur={1}
        >
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Model />
          <OrbitControls />
        </Stage>
      </Suspense>
    </Canvas>
  );
};
