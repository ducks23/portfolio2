import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const url = "/porsche.glb";

export default function Car(props) {
  const groupRef = useRef();
  const { nodes, materials } = useGLTF(url);
  return (
    <mesh castShadow receiveShadow geometry={nodes} material={materials} />
  );
}

useGLTF.preload(url);
