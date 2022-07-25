import React, { useRef } from "react";
import { TextHeaders } from "./models/Text";
import { Room, Rug, Desk } from "./models/Static";
import { Chair } from "./models/Chair";
import { Lamp } from "./models/Lamp";
import { Clock } from "./models/Clock";
import { Blinds } from "./models/Blinds";
import { Computer } from "./models/Computer";
import { Garbage } from "./models/Garbage";
import { WallArt } from "./models/WallArt";
import { Books } from "./models/Books";
import { Glasses } from "./models/Glasses";
import { useGLTF } from "@react-three/drei";

export default function Models({ setItems }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/models/iso-poly.gltf");

  return (
    <group
      ref={group}
      dispose={null}
      position={[0, -0.76, 0]}
      rotation={[0, -0.8, 0]}
    >
      <TextHeaders nodes={nodes} materials={materials} />
      <Room nodes={nodes} materials={materials} />
      <Rug nodes={nodes} materials={materials} />
      <Desk nodes={nodes} materials={materials} />
      <Chair nodes={nodes} materials={materials} setItems={setItems} />
      <Lamp nodes={nodes} materials={materials} setItems={setItems} />
      <Clock nodes={nodes} materials={materials} setItems={setItems} />
      <Blinds nodes={nodes} materials={materials} setItems={setItems} />
      <Computer nodes={nodes} materials={materials} setItems={setItems} />
      <Garbage nodes={nodes} materials={materials} setItems={setItems} />
      <WallArt nodes={nodes} materials={materials} setItems={setItems} />
      <Books nodes={nodes} materials={materials} setItems={setItems} />
      <Glasses nodes={nodes} materials={materials} setItems={setItems} />
    </group>
  );
}

useGLTF.preload("/models/iso-poly.gltf");
