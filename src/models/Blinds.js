import React, { useEffect, useState } from 'react'

export function Blinds({ materials, nodes, setItems }) {
  const [label, setLabel] = useState(false)

  useEffect(() => {
    document.body.style.cursor = label ? 'pointer' : 'auto'
  }, [label])

  const Overlay = (
    <div>
      <h1 className="title">Window</h1>
    </div>
  )

  return (
    <group>
      <mesh
        visible={false}
        onPointerEnter={() => {
          setLabel(true)
        }}
        onPointerLeave={() => {
          setLabel(false)
        }}
        onClick={() => {
          setItems(Overlay)
        }}
        material={materials.Material}
        geometry={nodes.Blinds_HitBox.geometry}
      />
      <mesh
        material={materials.Default_White}
        geometry={nodes.Blinds.geometry}
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
          position={[-0.54, 1.02, -0.9]}
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
  )
}
