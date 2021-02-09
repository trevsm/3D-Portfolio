import React, { useEffect, useState, useRef } from 'react'
import { useFrame } from 'react-three-fiber'

export function Clock({ materials, nodes, setItems }) {
  const [label, setLabel] = useState(false)
  const hourHand = useRef()
  const minHand = useRef()

  useEffect(() => {
    document.body.style.cursor = label ? 'pointer' : 'auto'
  }, [label])

  const Overlay = (
    <div>
      <h1 className="title">Timeline</h1>
    </div>
  )

  useFrame(({ clock }) => {
    minHand.current.rotation.z = Math.floor(-clock.elapsedTime) / 10
    hourHand.current.rotation.z = minHand.current.rotation.z / 10
  })

  return (
    <group>
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
          geometry={nodes.cbody.geometry}
        />
        <mesh
          material={materials.Default_White}
          geometry={nodes.cbody_1.geometry}
        />
        <mesh
          ref={minHand}
          material={materials.Default_Color}
          geometry={nodes.Large_Hand.geometry}
          position={[0.45, 1.12158, -0.9]}
        />
        <mesh
          ref={hourHand}
          material={materials.Default_Color}
          geometry={nodes.Small_Hand.geometry}
          position={[0.45, 1.12151, -0.9]}
        />
      </group>
      <group visible={label}>
        <mesh
          material={materials.Default_Color}
          geometry={nodes.Clock_Label_1.geometry}
        />
        <mesh
          material={materials.Default_White}
          geometry={nodes.Clock_Label_2.geometry}
        />
        <mesh
          material={materials.Default_Color}
          geometry={nodes.Clock_Text.geometry}
          position={[0.56, 1.35, -0.9]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <mesh
            material={materials.Default_Color}
            geometry={nodes.Clock_CTV.geometry}
            position={[0.01, 0, 0.04]}
          />
        </mesh>
      </group>
    </group>
  )
}