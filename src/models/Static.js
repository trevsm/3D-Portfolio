import React from "react";

function Room({ materials, nodes }) {
  return (
    <group>
      <mesh
        material={materials.Default_White}
        geometry={nodes.Walls_Floor.geometry}
      />
      <mesh
        material={materials.Default_Color}
        geometry={nodes.Walls_Floor_1.geometry}
      />
    </group>
  );
}

function Rug({ materials, nodes }) {
  return (
    <group>
      <mesh
        material={materials.Default_Color}
        geometry={nodes.Rug_1.geometry}
      />
      <mesh
        material={materials.Default_White}
        geometry={nodes.Rug_2.geometry}
      />
    </group>
  );
}

function Desk({ materials, nodes }) {
  return (
    <group>
      <mesh
        material={materials.Default_White}
        geometry={nodes.Desk_1.geometry}
      />
      <mesh
        material={materials.Default_Color}
        geometry={nodes.Desk_2.geometry}
      />
    </group>
  );
}

export { Desk, Rug, Room };
