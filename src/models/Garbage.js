import React, { useState } from "react";

import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/three";

export function Garbage({ materials, nodes }) {
  const [animation, setAnimation] = useState(false);

  const ani = useSpring({
    pos: animation ? [0, 0.03, 0] : [0, 0, 0],
    config: {
      mass: 0.1,
      tension: 50,
      friction: 10,
      precision: 0.0001,
    },
  });

  function animate() {
    setAnimation(true);
    setTimeout(() => {
      setAnimation(false);
    }, 100);
  }

  return (
    <group onPointerOver={animate}>
      <mesh
        material={materials.Default_Color}
        geometry={nodes.Bin_1.geometry}
      />
      <mesh
        material={materials.Default_White}
        geometry={nodes.Bin_2.geometry}
      />
      <a.mesh
        position={ani.pos}
        material={materials.Default_White}
        geometry={nodes.Garbage.geometry}
      />
    </group>
  );
}
