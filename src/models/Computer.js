import React, { useEffect, useState, useRef } from 'react'

import { useSpring } from '@react-spring/core'
import { a } from '@react-spring/three'

const defaultConfig = {
  mass: 5,
  tension: 400,
  friction: 150,
  precision: 0.0001,
}

export function Computer({ materials, nodes, setItems }) {
  const [label, setLabel] = useState(false)
  const [active, setActive] = useState(false)
  const allowAnimation = useRef(false)

  const sProps = useSpring({
    rot: active ? [0, 0, 0] : [0, 0, -1.8],
    config: defaultConfig,
  })

  const ani = useSpring({
    rot2: label ? [0, 0, -0.2] : [0, 0, 0],
    config: {
      mass: 0.1,
      tension: 50,
      friction: 10,
      precision: 0.0001,
    },
  })

  const Overlay = (
    <div>
      <h1 className="title">Projects</h1>
    </div>
  )

  useEffect(() => {
    setTimeout(() => {
      setActive(true)
      allowAnimation.current = true
    }, 1000)
  }, [])

  useEffect(() => {
    document.body.style.cursor = label ? 'pointer' : 'auto'
  }, [label])

  return (
    <group>
      <group
        onPointerEnter={() => {
          if (allowAnimation.current) setLabel(true)
        }}
        onPointerLeave={() => {
          if (allowAnimation.current) setLabel(false)
        }}
        onClick={() => {
          if (allowAnimation.current) setItems(Overlay)
        }}
      >
        <mesh
          material={materials.Default_White}
          geometry={nodes.Computer_1.geometry}
        />
        <mesh
          material={materials.Default_Color}
          geometry={nodes.Computer_2.geometry}
        />
        <mesh
          material={materials.Default_White}
          geometry={nodes.Cube.geometry}
        />
        <mesh
          material={materials.Default_Color}
          geometry={nodes.Cube_1.geometry}
        />
        <a.group position={[-0.713, 0.545, -0.14]} rotation={sProps.rot}>
          <a.mesh
            material={materials.Default_White}
            geometry={nodes.Lid_1.geometry}
            rotation={ani.rot2}
          />
          <a.mesh
            material={materials.Default_Color}
            geometry={nodes.Lid_2.geometry}
            rotation={ani.rot2}
          />
        </a.group>
        <mesh material={nodes.Hinge.material} geometry={nodes.Hinge.geometry} />
      </group>

      <group visible={label}>
        <mesh
          material={materials.Default_Color}
          geometry={nodes.Laptop_Label_1.geometry}
        />
        <mesh
          material={materials.Default_White}
          geometry={nodes.Laptop_Label_2.geometry}
        />
        <mesh
          material={materials.Default_Color}
          geometry={nodes.Laptop_Text.geometry}
          position={[-0.64, 0.73, -0.19]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            material={materials.Default_Color}
            geometry={nodes.Laptop_CTV.geometry}
            position={[0.01, 0, 0.04]}
          />
        </mesh>
      </group>
    </group>
  )
}