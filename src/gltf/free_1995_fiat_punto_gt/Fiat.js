/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
author: Karol Miklas (https://sketchfab.com/karolmiklas)
license: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
source: https://sketchfab.com/3d-models/free-1995-fiat-punto-gt-48db6facb4b64e99b60f36b8c01185e1
title: (FREE) 1995 Fiat Punto GT
*/

import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";

export const Fiat = (props) => {
  const group = useRef();

  const { nodes, materials } = useGLTF("/scene.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group position={[-0.04, 0.03, -0.04]} scale={0.45}>
          <mesh
            geometry={nodes.Punto_GT_0.geometry}
            material={materials.gt_black}
          />
          <mesh
            geometry={nodes.Punto_GT_1.geometry}
            material={materials.gt_license}
          />
          <mesh
            geometry={nodes.Punto_GT_2.geometry}
            material={materials.gt_tire}
          />
          <mesh
            geometry={nodes.Punto_GT_3.geometry}
            material={materials.gt_rim}
          />
          <mesh
            geometry={nodes.Punto_GT_4.geometry}
            material={materials.gt_windows}
          />
          <mesh
            geometry={nodes.Punto_GT_5.geometry}
            material={materials["Hemi.001"]}
          />
          <mesh
            geometry={nodes.Punto_GT_6.geometry}
            material={materials.gt_body}
          />
          <mesh
            geometry={nodes.Punto_GT_7.geometry}
            material={materials.gt_details}
          />
          <mesh
            geometry={nodes.Punto_GT_8.geometry}
            material={materials.gt_shadow}
          />
          <group rotation={[0.53, -0.23, 0.2]} scale={[1, 1, 1]} />
          <group rotation={[-1.55, 1.1, 0.63]} scale={[1, 1, 1]} />
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/scene.gltf");
