import React, { useEffect, useState } from "react";
import { useSpring, a } from "@react-spring/three";

function OverlayContent() {
  return (
    <>
      <h1 className="title">External Links</h1>
      <div className="tile-grid">
        <div className="tile short">
          <div className="tile-content">Linkedin</div>
          <div className="tile-bottom">
            <a
              href="https://www.linkedin.com/in/trevor-smith-27621613b/"
              target="new"
            >
              visit page
            </a>
          </div>
        </div>
        <div className="tile short">
          <div className="tile-content">Github</div>
          <div className="tile-bottom">
            <a href="https://github.com/trevsm" target="new">
              visit page
            </a>
          </div>
        </div>
        <div className="tile short">
          <div className="tile-content">StackOverflow</div>
          <div className="tile-bottom">
            <a
              href="https://stackoverflow.com/users/8026620/subtora"
              target="new"
            >
              visit page
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export function Blinds({ materials, nodes, setItems }) {
  const [label, setLabel] = useState(false);

  const ani = useSpring({
    rot: label ? [0, 0, 0] : [0.2, 0, 0],
    config: {
      mass: 0.1,
      tension: 200,
      friction: 10,
      precision: 0.0001,
    },
  });

  useEffect(() => {
    document.body.style.cursor = label ? "pointer" : "auto";
  }, [label]);

  return (
    <group>
      <group
        onPointerEnter={() => {
          setLabel(true);
        }}
        onPointerLeave={() => {
          setLabel(false);
        }}
        onClick={() => {
          setItems(<OverlayContent />);
        }}
      >
        <mesh
          visible={false}
          material={materials.Material}
          geometry={nodes.Blinds_HitBox.geometry}
        />
      </group>
      {Array(25)
        .fill(undefined)
        .map((m, i) => (
          <a.mesh
            key={i}
            material={materials.Default_White}
            geometry={nodes.Blinds.geometry}
            position={[-0.05, 0.68 + (i - 1) / 40, -0.95]}
            rotation={ani.rot}
          />
        ))}
      <mesh material={materials.Default_White} geometry={nodes.Top.geometry} />
      <mesh
        material={materials.Default_White}
        geometry={nodes.Bottom.geometry}
      />
      <mesh
        material={materials.Default_White}
        geometry={nodes.StringL.geometry}
      />
      <mesh
        material={materials.Default_White}
        geometry={nodes.StringR.geometry}
      />
      <group visible={label}>
        <mesh
          material={materials.Default_Color}
          geometry={nodes.Blinds_Label_1.geometry}
        />
        <mesh
          material={materials.Default_White}
          geometry={nodes.Blinds_Label_2.geometry}
        />
        <mesh
          material={materials.Default_Color}
          geometry={nodes.Blinds_Text.geometry}
          position={[-0.54, 1.02, -0.89]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <mesh
            material={materials.Default_Color}
            geometry={nodes.Blinds_CTV.geometry}
            position={[0.01, 0, 0.04]}
          />
        </mesh>
      </group>
    </group>
  );
}
