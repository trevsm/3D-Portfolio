import React, { useEffect, useState } from 'react'

import { useSpring } from '@react-spring/core'
import { a } from '@react-spring/three'

const defaultConfig = {
  mass: 5,
  tension: 400,
  friction: 150,
  precision: 0.0001,
}

export function Soda({ materials, nodes, setItems }) {
  const [label, setLabel] = useState(false)
  const [active, setActive] = useState(false)

  const sProps = useSpring({
    pos: active ? [0, 0, 0] : [0, 1, 0],
    config: defaultConfig,
  })

  const ani = useSpring({
    rot: label ? [.5, 0, 0] : [0, 0, 0],
    pos: label ? [0, 0, 0] : [0, -.001, 0],
    config: {
      mass: 0.1,
      tension: 400,
      friction: 10,
      precision: 0.0001,
    },
  })

  const Overlay = (
    <div>
      <h1 className="title">Soda</h1>
    </div>
  )

  useEffect(() => {
    setTimeout(() => {
      setActive(true)
    }, 200)
  }, [])

  useEffect(() => {
    document.body.style.cursor = label ? 'pointer' : 'auto'
  }, [label])

  return (
    <a.group position={sProps.pos}>
      <group
        onPointerEnter={() => {
          setLabel(true)
        }}
        onPointerLeave={() => {
          setLabel(false)
        }}
        onClick={() => {
          setItems(Overlay)
        }}
      >
        <mesh
          material={materials.Default_White}
          geometry={nodes.Can.geometry}
        />
        <mesh
          material={materials.Default_Color}
          geometry={nodes.Can_1.geometry}
        />
      </group>
      <a.mesh
        material={materials.Default_Color}
        geometry={nodes.Tab.geometry}
        position={[-0.5912, 0.5937, -0.4148]}
        rotation={ani.rot}
      />
      <a.mesh
        material={materials.Default_Color}
        geometry={nodes.Hole.geometry}
        position={ani.pos}
      />
      <group visible={label}>
        <mesh
          material={materials.Default_Color}
          geometry={nodes.Soda_Label_1.geometry}
        />
        <mesh
          material={materials.Default_White}
          geometry={nodes.Soda_Label_2.geometry}
        />
        <mesh
          material={materials.Default_Color}
          geometry={nodes.Soda_Text.geometry}
          position={[-0.59, 0.75, -0.52]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            material={materials.Default_Color}
            geometry={nodes.Soda_CTV.geometry}
            position={[-0.01, 0, 0.04]}
          />
        </mesh>
      </group>
    </a.group>
  )
}
