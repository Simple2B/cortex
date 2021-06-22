import { Suspense } from "react";
import { Model } from "../gltf/free_zuk_3d_model/Scene";

export const Skull = (props: any) => {
  return (
    <Suspense fallback={null}>
      <Model />
    </Suspense>
  );
};
