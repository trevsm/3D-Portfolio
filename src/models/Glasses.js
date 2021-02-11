import React, { useEffect, useState } from 'react'

import { useSpring } from '@react-spring/core'
import { a } from '@react-spring/three'

import Profile from '../static/profile.jpg'

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

  const ani = useSpring({
    pos: label ? [0, 0.01, 0] : [0, 0, 0],
    config: {
      mass: 0.1,
      tension: 50,
      friction: 10,
      precision: 0.0001,
    },
  })

  const Overlay = (
    <div>
      <h1 className="title">About</h1>
      <div className="split">
        <div className="left">
          <p>Hey! I'm Trevor Smith. </p>
          <p>
            I am currently a senior at Weber State University pursuing a
            bachelor's degree in Computer Science.
          </p>
          <p>
            I am also a frontend software developer working for The Energy &
            Geoscience Institute at The University of Utah
          </p>
        </div>
        <div className="right">
          <img src={Profile} alt="Profile Picture" className="profile-pic" />
        </div>
      </div>
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
      <a.group position={ani.pos}>
        <mesh
          material={materials.Default_White}
          geometry={nodes.Glasses_1.geometry}
        />
        <mesh
          material={materials.Default_Color}
          geometry={nodes.Glasses_2.geometry}
        />
      </a.group>
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
