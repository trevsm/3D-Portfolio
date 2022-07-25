import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export function Clock({ materials, nodes }) {
  const hourHand = useRef();
  const minHand = useRef();

  useFrame(() => {
    minHand.current.rotation.z -= 0.002;
    hourHand.current.rotation.z = minHand.current.rotation.z / 10;
  });

  return (
    <group>
      <group>
        <mesh
          material={materials.Default_Color}
          geometry={nodes.cbody.geometry}
        />
        <mesh
          material={materials.Default_White}
          geometry={nodes.cbody_1.geometry}
        />
        <mesh
          ref={minHand}
          material={materials.Default_Color}
          geometry={nodes.Large_Hand.geometry}
          position={[0.45, 1.12158, -0.9]}
        />
        <mesh
          ref={hourHand}
          material={materials.Default_Color}
          geometry={nodes.Small_Hand.geometry}
          position={[0.45, 1.12151, -0.9]}
        />
      </group>
    </group>
  );
}
