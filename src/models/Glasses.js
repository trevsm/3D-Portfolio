import React, { useEffect, useState } from 'react'

import { useSpring } from '@react-spring/core'
import { a } from '@react-spring/three'

const defaultConfig = {
  mass: 5,
  tension: 400,
  friction: 150,
  precision: 0.0001,
}

export function Glasses({ materials, nodes, setItems }) {
  const [label, setLabel] = useState(false)
  const [active, setActive] = useState(false)

  const sProps = useSpring({
    pos: active ? [0, 0, 0] : [0, 1, 0],
    config: defaultConfig,
  })

  const Overlay = (
    <div>
      <h1 className="title">Vision</h1>
    </div>
  )

  useEffect(() => {
    setTimeout(() => {
      setActive(true)
    }, 100)
  }, [])

  useEffect(() => {
    document.body.style.cursor = label ? 'pointer' : 'auto'
  }, [label])

  return (
    <a.group position={sProps.pos}>
      <mesh
        visible={false}
        material={materials.Material}
        geometry={nodes.Glasses_HitBox.geometry}
        onPointerEnter={() => {
          setLabel(true)
        }}
        onPointerLeave={() => {
          setLabel(false)
        }}
        onClick={() => {
          setItems(Overlay)
        }}
      />
      <mesh
        material={materials.Default_White}
        geometry={nodes.Glasses_1.geometry}
      />
      <mesh
        material={materials.Default_Color}
        geometry={nodes.Glasses_2.geometry}
      />
      <group visible={label}>
        <mesh
          material={materials.Default_Color}
          geometry={nodes.Glasses_Label_1.geometry}
        />
        <mesh
          material={materials.Default_White}
          geometry={nodes.Glasses_Label_2.geometry}
        />
        <mesh
          material={materials.Default_Color}
          geometry={nodes.Glasses_Text.geometry}
          position={[-0.72, 0.69, -0.43]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            material={materials.Default_Color}
            geometry={nodes.Glasses_CTV.geometry}
            position={[-0.01, 0, 0.04]}
          />
        </mesh>
      </group>
    </a.group>
  )
}