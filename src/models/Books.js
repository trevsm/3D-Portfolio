import React, { useEffect, useState } from 'react'

import { useSpring } from '@react-spring/core'
import { a } from '@react-spring/three'

const defaultConfig = {
  mass: 5,
  tension: 400,
  friction: 150,
  precision: 0.0001,
}

export function Books({ materials, nodes, setItems }) {
  const [label, setLabel] = useState(false)
  const [active, setActive] = useState(false)

  const sProps = useSpring({
    pos: active ? [0, 0, 0] : [0, 1, 0],
    config: defaultConfig,
  })

  const Overlay = (
    <div>
      <h1 className="title">Education</h1>
    </div>
  )

  useEffect(() => {
    setTimeout(() => {
      setActive(true)
    }, 300)
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
          material={materials.Default_Color}
          geometry={nodes.Book_02.geometry}
        />
        <mesh
          material={materials.Default_White}
          geometry={nodes.Book_02_1.geometry}
        />
        <mesh
          material={materials.Default_Color}
          geometry={nodes.Book_01_1.geometry}
        />
        <mesh
          material={materials.Default_White}
          geometry={nodes.Book_01_2.geometry}
        />
      </group>
      <group visible={label}>
        <mesh
          material={materials.Default_Color}
          geometry={nodes.Books_Label_1.geometry}
        />
        <mesh
          material={materials.Default_White}
          geometry={nodes.Books_Label_2.geometry}
        />
        <mesh
          material={materials.Default_Color}
          geometry={nodes.Books_Text.geometry}
          position={[-0.81, 0.71, -0.59]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            material={materials.Default_Color}
            geometry={nodes.Books_CTV.geometry}
            position={[0.03, 0, 0.04]}
          />
        </mesh>
      </group>
    </a.group>
  )
}
