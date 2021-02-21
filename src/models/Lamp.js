import React, { useEffect, useState } from "react";

import { useSpring } from "@react-spring/core";
import { a } from "@react-spring/three";

const defaultConfig = {
  mass: 5,
  tension: 400,
  friction: 150,
  precision: 0.0001,
};

function OverlayContent() {
  return (
    <>
      <h1 className="title">Skills/Languages</h1>
      <div className="tile-grid horizontal">
        <div className="tile short">
          <div className="tile-content">
            Frontend <br />
            <span className="description">
              HTML, CSS, JS, React.js, Three.js
            </span>
          </div>
        </div>
        <div className="tile short">
          <div className="tile-content">
            Backend <br />
            <span className="description">Node.js, C++, PHP, Java</span>
          </div>
        </div>
        <div className="tile short">
          <div className="tile-content">
            Functional
            <br />
            <span className="description">
              Git, NPM, Linux, Bash, OracleSQL, MongoDB
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export function Lamp({ materials, nodes, setItems }) {
  const [label, setLabel] = useState(false);
  const [active, setActive] = useState(false);

  const sProps = useSpring({
    pos: active ? [0, 0, 0] : [0, 1, 0],
    rot: active ? [0, 0, 0] : [0, Math.PI, 0],
    config: defaultConfig,
  });

  const ani = useSpring({
    rot: label ? [0.2, 0, 0] : [0, 0, 0],
    config: {
      mass: 0.1,
      tension: 50,
      friction: 10,
      precision: 0.0001,
    },
  });

  // const Overlay = (
  //   <div>
  //     <h1 className="title">Skills</h1>
  //   </div>
  // )

  useEffect(() => {
    setActive(true);
  }, []);

  useEffect(() => {
    document.body.style.cursor = label ? "pointer" : "auto";
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
          setItems(<OverlayContent />);
        }}
        position={[-0.71, 0.66, 0.22]}
        rotation={sProps.rot}
      >
        <mesh
          material={materials.Default_Color}
          geometry={nodes.Body_1.geometry}
        />
        <mesh
          material={materials.Default_White}
          geometry={nodes.Body_2.geometry}
        />
        <mesh
          visible={false}
          material={materials.Material}
          geometry={nodes.Lamp_HitBox.geometry}
          position={[0.71, -0.66, -0.22]}
        />
        <a.group position={[0, 0.06, 0.03]} rotation={ani.rot}>
          <mesh
            material={materials.Default_Color}
            geometry={nodes.Hood_1.geometry}
          />
          <mesh
            material={materials.Default_White}
            geometry={nodes.Hood_2.geometry}
          />
        </a.group>
        <group position={[0.71, -0.66, -0.22]} visible={label}>
          <mesh
            material={materials.Default_Color}
            geometry={nodes.Lamp_Label_1.geometry}
          />
          <mesh
            material={materials.Default_White}
            geometry={nodes.Lamp_Label_2.geometry}
          />
          <mesh
            material={materials.Default_Color}
            geometry={nodes.Lamp_Text.geometry}
            position={[-0.68, 0.88, 0.09]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}
          >
            <mesh
              material={materials.Default_Color}
              geometry={nodes.Lamp_CTV.geometry}
              position={[-0.02, 0, 0.03]}
            />
          </mesh>
        </group>
      </a.group>
    </a.group>
  );
}
