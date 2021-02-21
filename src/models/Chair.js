import React, { useEffect, useState } from "react";

import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/three";

const defaultConfig = {
  mass: 5,
  tension: 400,
  friction: 150,
  precision: 0.0001,
};

export function Chair({ materials, nodes }) {
  const [label, setLabel] = useState(false);
  const [active, setActive] = useState(false);

  const sProps = useSpring({
    pos: active ? [0, 0, 0] : [1, 0, 0],
    config: defaultConfig,
  });

  const ani = useSpring({
    rot: label ? [0, 0.1, 0] : [0, 0, 0],
    config: {
      mass: 0.1,
      tension: 50,
      friction: 10,
      precision: 0.0001,
    },
  });

  // const Overlay = (
  //   <div>
  //     <h1 className="title">Chair</h1>
  //   </div>
  // );

  useEffect(() => {
    setActive(true);
  }, []);

  useEffect(() => {
    // document.body.style.cursor = label ? 'pointer' : 'auto'
  }, [label]);

  return (
    <a.group position={sProps.pos}>
      <a.group
        onPointerEnter={() => {
          setLabel(true);
        }}
        onPointerLeave={() => {
          setLabel(false);
        }}
        onClick={() => {
          // setItems(Overlay)
        }}
        rotation={ani.rot}
        position={[-0.19, 0.42, -0.14]}
      >
        <group>
          <mesh
            material={materials.Default_Color}
            geometry={nodes.Chair_1.geometry}
          />
          <mesh
            material={materials.Default_White}
            geometry={nodes.Chair_2.geometry}
          />
        </group>
      </a.group>
      <group visible={false}>
        <mesh
          material={materials.Default_Color}
          geometry={nodes.Chair_Label_1.geometry}
        />
        <mesh
          material={materials.Default_White}
          geometry={nodes.Chair_Label_2.geometry}
        />
        <mesh
          material={materials.Default_Color}
          geometry={nodes.Chair_Text.geometry}
          position={[-0.06, 0.83, 0.14]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            material={materials.Default_Color}
            geometry={nodes.Chair_CTV.geometry}
            position={[0, 0, 0.04]}
          />
        </mesh>
      </group>
    </a.group>
  );
}
