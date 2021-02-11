import React, { useEffect, useState } from 'react'

import { useSpring } from '@react-spring/core'
import { a } from '@react-spring/three'

export function Garbage({ materials, nodes }) {
  const [label, setLabel] = useState(false)
  const [animation, setAnimation] = useState(false)

  useEffect(() => {
    document.body.style.cursor = label ? 'pointer' : 'auto'
  }, [label])

  const ani = useSpring({
    pos: animation ? [0, 0.03, 0] : [0, 0, 0],
    config: {
      mass: 0.1,
      tension: 50,
      friction: 10,
      precision: 0.0001,
    },
  })

  function animate() {
    setAnimation(true)
    setTimeout(() => {
      setAnimation(false)
    }, 100)
  }

  return (
    <group>
      <group
        onPointerEnter={() => {
          setLabel(true)
          animate()
        }}
        onPointerLeave={() => {
          setLabel(false)
        }}
        onClick={() => {
          window.open('https://github.com/trevsm/portfolio');
        }}
      >
        <mesh
          material={materials.Default_Color}
          geometry={nodes.Bin_1.geometry}
        />
        <mesh
          material={materials.Default_White}
          geometry={nodes.Bin_2.geometry}
        />
        <a.mesh
          position={ani.pos}
          material={materials.Default_White}
          geometry={nodes.Garbage.geometry}
        />
      </group>
      <group visible={label}>
        <mesh
          material={materials.Default_Color}
          geometry={nodes.Garbage_Label_1.geometry}
        />
        <mesh
          material={materials.Default_White}
          geometry={nodes.Garbage_Label_2.geometry}
        />
        <mesh
          material={materials.Default_Color}
          geometry={nodes.Garbage_Text.geometry}
          position={[-0.59, 0.44, 0.68]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            material={materials.Default_Color}
            geometry={nodes.Garbage_CTV.geometry}
            position={[0.03, 0, 0.04]}
          />
        </mesh>
      </group>
    </group>
  )
}
