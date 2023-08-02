"use client";

import { Canvas } from "@react-three/fiber";
import React from "react";
import Box from "./Box";
import Car from "./Car";

export default function Three() {
  return (
    <div className="justify-center bg-white pt-24 h-[20rem] w-screen fit">
      <div className="flex">
        <Canvas shadows>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Box position={[-2.2, 0, 0]}></Box>
          <Car position={[2.2, 0, 0]}></Car>
        </Canvas>
      </div>
    </div>
  );
}
