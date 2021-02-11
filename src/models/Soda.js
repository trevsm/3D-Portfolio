import React, { useEffect, useState } from 'react'

import { useSpring } from '@react-spring/core'
import { a } from '@react-spring/three'

const defaultConfig = {
  mass: 5,
  tension: 400,
  friction: 150,
  precision: 0.0001,
}

function OverlayContent() {
  return (
    <>
      <h1 className="title">Soda</h1>
      <div className="tile-grid">
        <div className="tile">
          <div className="tile-content">
            Soda? <br />
            <span className="description">
              Yup, that's it. I just really like soda! Depending on how I feel
              on a given day, here's my unordered top 3: A&W RB, Mexican Coke,
              Vernors
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export function Soda({ materials, nodes, setItems }) {
  const [label, setLabel] = useState(false)
  const [active, setActive] = useState(false)

  const sProps = useSpring({
    pos: active ? [0, 0, 0] : [0, 1, 0],
    config: defaultConfig,
  })

  const ani = useSpring({
    rot: label ? [0.5, 0, 0] : [0, 0, 0],
    pos: label ? [0, 0, 0] : [0, -0.001, 0],
    config: {
      mass: 0.1,
      tension: 400,
      friction: 10,
      precision: 0.0001,
    },
  })

  useEffect(() => {
    setTimeout(() => {
      setActive(true)
    }, 200)
  }, [])

  useEffect(() => {
    // document.body.style.cursor = label ? 'pointer' : 'auto'
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
          // setItems(<OverlayContent />)
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
      <group visible={false}>
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
