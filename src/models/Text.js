import React, { useEffect, useState } from "react";

import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/three";

export function TextHeaders({ materials, nodes }) {
  const [active, setActive] = useState(false);
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);

  const pX = [
    [-0.83, 1.18, 0.73],
    [-0.83, 0.95, 0.14],
    [-0.83, 0.87, 0.14],
    [0.21, 0.41, -0.9],
  ];

  const sProps = useSpring({
    pos0: active ? pX[0] : [pX[0][0] - 1, pX[0][1], pX[0][2]],
    pos1: active1 ? pX[1] : [pX[1][0] - 1, pX[1][1], pX[1][2]],
    pos2: active2 ? pX[2] : [pX[2][0] - 1, pX[2][1], pX[2][2]],
    pos3: active3 ? pX[3] : [pX[3][0], pX[3][1], pX[3][2] - 0.5],
    config: { mass: 20, tension: 400, friction: 200, precision: 0.0001 },
  });

  useEffect(() => {
    setTimeout(() => {
      setActive(true);
    }, 250);
    setTimeout(() => {
      setActive1(true);
    }, 750);
    setTimeout(() => {
      setActive2(true);
    }, 1000);
    setTimeout(() => {
      setActive3(true);
    }, 1500);
  }, []);

  return (
    <group>
      <a.mesh
        material={materials.Default_Color}
        geometry={nodes.Hello.geometry}
        position={sProps.pos0}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <a.mesh
        material={materials.Default_Color}
        geometry={nodes.Im_Trevor.geometry}
        position={sProps.pos1}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <a.mesh
        material={materials.Default_Color}
        geometry={nodes.I_Create.geometry}
        position={sProps.pos2}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <a.mesh
        geometry={nodes.Look_Around.geometry}
        material={materials.Default_Color}
        position={sProps.pos3}
        rotation={[1.56, 0, 0]}
      />
    </group>
  );
}
