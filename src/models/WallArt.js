import React, { useEffect, useState, useRef } from 'react'
import { useFrame } from 'react-three-fiber'

export function WallArt({ materials, nodes, setItems }) {
  const [label, setLabel] = useState(false)

  const sunRef = useRef()
  const sun2Ref = useRef()
  const recordRef = useRef()
  const armRef = useRef()
  const c1Ref = useRef()
  const c2Ref = useRef()

  const idx = useRef(1.3)

  useEffect(() => {
    document.body.style.cursor = label ? 'pointer' : 'auto'
  }, [label])

  const Overlay = (
    <div>
      <h1 className="title">Music</h1>
    </div>
  )

  function updateSunTransforms() {
    sunRef.current.scale.y = Math.sin(idx.current) / 5 + 0.83
    sunRef.current.scale.z = Math.sin(idx.current) / 5 + 0.83

    sun2Ref.current.scale.y = -Math.sin(idx.current) / 5 + 0.83
    sun2Ref.current.scale.z = -Math.sin(idx.current) / 5 + 0.83

    sunRef.current.position.y = Math.sin(idx.current) / 10 + 0.83
    sun2Ref.current.position.y = -Math.sin(idx.current) / 10 + 0.83
  }

  function spinRecordAndArm() {
    recordRef.current.rotation.x = -idx.current
    armRef.current.rotation.x = Math.cos(idx.current) / 4 - 0.2
  }

  function updateStringTransforms(){
    c1Ref.current.rotation.y = idx.current/5
    c2Ref.current.rotation.y = -idx.current/4.92
  }

  useEffect(() => {
    updateSunTransforms()
    spinRecordAndArm()
    updateStringTransforms()
  }, [])

  useFrame(() => {
    if (label) {
      idx.current += 0.01
      updateSunTransforms()
      spinRecordAndArm()
      updateStringTransforms()
    }
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
          material={materials.Default_White}
          geometry={nodes.Art_HitBox.geometry}
          position={[0.01, 0.01, 0]}
        />
      </group>
      <mesh
        material={materials.Default_White}
        geometry={nodes.Wall_Art.geometry}
      />
      <mesh
        material={materials.Default_Color}
        geometry={nodes.Wall_Art_1.geometry}
      />
      <mesh
        ref={sunRef}
        material={materials.Default_Color}
        geometry={nodes.Sun01.geometry}
        position={[-0.83, 0.93, 0.8]}
      />
      <mesh
        ref={sun2Ref}
        material={materials.Default_Color}
        geometry={nodes.Sun02.geometry}
        position={[-0.83, 0.75, 0.72]}
      />
      <mesh
        ref={armRef}
        material={materials.Default_White}
        geometry={nodes.Arm.geometry}
        position={[-0.82, 1.01, 0.41]}
      />
      <mesh
        ref={c1Ref}
        material={materials.Default_Color}
        geometry={nodes.Circle1.geometry}
        position={[-1.1, 0.82, 0.76]}
        scale={[0.73, 0.73, 0.73]}
      />
      <mesh
        ref={c2Ref}
        material={materials.Default_Color}
        geometry={nodes.Circle2.geometry}
        position={[-1.1, 0.82, 0.76]}
        rotation={[0, -1.44, 0]}
        scale={[0.73, 0.73, 0.73]}
      />
      <group ref={recordRef} position={[-0.83, 0.95, 0.49]}>
        <mesh
          material={materials.Default_White}
          geometry={nodes.Record_1.geometry}
        />
        <mesh
          material={materials.Default_Color}
          geometry={nodes.Record_2.geometry}
        />
        <mesh
          material={materials.Default_White}
          geometry={nodes.Lines.geometry}
        />
      </group>
      <group visible={label}>
        <mesh
          material={materials.Default_Color}
          geometry={nodes.Art_Label_1.geometry}
        />
        <mesh
          material={materials.Default_White}
          geometry={nodes.Art_Label_2.geometry}
        />
        <mesh
          material={materials.Default_Color}
          geometry={nodes.Art_Text.geometry}
          position={[-0.77, 0.58, 0.84]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            material={materials.Default_Color}
            geometry={nodes.Art_CTV.geometry}
            position={[0.02, 0, 0.04]}
          />
        </mesh>
      </group>
    </group>
  )
}
