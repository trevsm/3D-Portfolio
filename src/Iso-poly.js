import React, { useEffect, useRef, useState } from 'react'
import { Outline, EffectComposer } from 'react-postprocessing'
import { BlendFunction, Resizer, KernelSize } from 'postprocessing'
import { useGLTF } from '@react-three/drei/useGLTF'
import { useThree } from 'react-three-fiber'

export default function Model(props) {
  const group = useRef()
  const meshArray = useRef([])
  const { nodes, materials } = useGLTF('/portfolio/models/iso-poly.gltf')

  const { camera, viewport } = useThree()

  useEffect(() => {
    camera.fov = 21
    camera.lookAt(0, 0, 0)
    camera.updateProjectionMatrix()
  })

  function activateMesh(e) {
    console.log(e.eventObject)
  }

  return (
    <group ref={group} {...props} dispose={null} position={[0,-.73,0]} rotation={[0,-.8,0]}>
      <mesh
        material={materials.Default_White}
        geometry={nodes.Sunglasses.geometry}
        position={[-0.73, 0.54, -0.34]}
        rotation={[1.58, 0.11, 0.05]}
        scale={[1.15, 1.15, 1.3]}
      />
      <group position={[-0.19, 0.24, -0.14]}>
        <mesh
          material={materials.Default_Color}
          geometry={nodes.Chair_1.geometry}
        />
        <mesh
          material={materials.Default_White}
          geometry={nodes.Chair_2.geometry}
        />
      </group>
      <group position={[-0.5, 0.3, -0.58]}>
        <mesh
          material={materials.Default_White}
          geometry={nodes.Cylinder.geometry}
        />
        <mesh
          material={materials.Default_Color}
          geometry={nodes.Cylinder_1.geometry}
        />
      </group>
      <group
        position={[-0.71, 0.71, 0.22]}
        rotation={[-2.41, 0.17, 2.99]}
        scale={[0.73, 0.73, 0.73]}
      >
        <mesh
          material={materials.Default_Color}
          geometry={nodes.Hood_1.geometry}
        />
        <mesh
          material={materials.Default_White}
          geometry={nodes.Hood_2.geometry}
        />
      </group>
      <group
        position={[-0.59, 0.55, -0.42]}
        rotation={[-Math.PI, 1.15, -Math.PI]}
        scale={[0.96, 0.96, 0.96]}
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
      <mesh
        material={materials.Default_White}
        geometry={nodes.Blinds.geometry}
        position={[0.05, 1.26, -0.95]}
        scale={[23.02, 1.09, 1.09]}
      />
      <group position={[-0.64, 0.54, -0.14]}>
        <mesh
          material={materials.Default_White}
          geometry={nodes.Plane.geometry}
        />
        <mesh
          material={materials.Default_Color}
          geometry={nodes.Plane_1.geometry}
        />
        <group position={[0.01, 0.01, 0.08]} scale={[1.06, 0.07, 0.88]}>
          <mesh
            material={materials.Default_White}
            geometry={nodes.Cube.geometry}
          />
          <mesh
            material={materials.Default_Color}
            geometry={nodes.Cube_1.geometry}
          />
        </group>
      </group>
      <group position={[-0.66, 0.11, 0.39]} scale={[0.57, 0.57, 0.57]}>
        <mesh
          material={materials.Default_Color}
          geometry={nodes.Circle.geometry}
        />
        <mesh
          material={materials.Default_White}
          geometry={nodes.Circle_1.geometry}
        />
      </group>
      <mesh
        material={materials.Default_White}
        geometry={nodes.Garbage.geometry}
        position={[-0.67, 0.23, 0.4]}
        rotation={[-1.87, -0.74, -2.25]}
        scale={[0.36, 0.36, 0.36]}
      />
      <group position={[0.05, -0.01, -0.01]} rotation={[0, -1.57, 0]}>
        <mesh
          material={materials.Default_White}
          geometry={nodes.Walls_Floor.geometry}
        />
        <mesh
          material={materials.Default_Color}
          geometry={nodes.Walls_Floor_1.geometry}
        />
      </group>
      <group position={[-0.36, 0.11, 0.61]} scale={[0.99, 0.99, 0.99]}>
        <mesh
          material={materials.Default_Color}
          geometry={nodes.Rug_1.geometry}
        />
        <mesh
          material={materials.Default_White}
          geometry={nodes.Rug_2.geometry}
        />
      </group>
      <group
        position={[-0.79, 0.55, -0.52]}
        rotation={[Math.PI / 2, 0, 0.11]}
        scale={[2.18, 2.8, 0.44]}
      >
        <mesh
          material={materials.Default_Color}
          geometry={nodes.Book_01_1.geometry}
        />
        <mesh
          material={materials.Default_White}
          geometry={nodes.Book_01_2.geometry}
        />
      </group>
      <group
        position={[-0.79, 0.53, -0.52]}
        rotation={[Math.PI / 2, 0, -0.02]}
        scale={[2.18, 2.8, 0.44]}
      >
        <mesh
          material={materials.Default_Color}
          geometry={nodes.Book_02_1.geometry}
        />
        <mesh
          material={materials.Default_White}
          geometry={nodes.Book_02_2.geometry}
        />
      </group>
      <group position={[-0.83, 0.83, 0.76]}>
        <mesh
          material={materials.Default_White}
          geometry={nodes.squigglesArt.geometry}
        />
        <mesh
          material={materials.Default_Color}
          geometry={nodes.squigglesArt_1.geometry}
        />
      </group>
      <group position={[-0.83, 0.95, 0.49]}>
        <mesh
          material={materials.Default_White}
          geometry={nodes.recordArt.geometry}
        />
        <mesh
          material={materials.Default_Color}
          geometry={nodes.recordArt_1.geometry}
        />
      </group>
      <group position={[0.45, 1.12, -0.9]}>
        <mesh
          material={materials.Default_Color}
          geometry={nodes.cbody.geometry}
        />
        <mesh
          material={materials.Default_White}
          geometry={nodes.cbody_1.geometry}
        />
        <mesh
          material={materials.Default_Color}
          geometry={nodes.Large_Hand.geometry}
          position={[0, 0.02, -0.01]}
        />
        <mesh
          material={materials.Default_Color}
          geometry={nodes.Small_Hand.geometry}
          position={[-0.01, 0.01, -0.01]}
        />
      </group>
      <mesh
        material={materials.Default_Color}
        geometry={nodes.Hello.geometry}
        position={[-0.83, 1.18, 0.73]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.18, 0.18, 0.18]}
      />
      <mesh
        material={materials.Default_Color}
        geometry={nodes.Im_Trevor.geometry}
        position={[-0.83, 0.95, 0.14]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.14, 0.14, 0.14]}
      />
      <mesh
        material={materials.Default_Color}
        geometry={nodes.I_Create.geometry}
        position={[-0.83, 0.87, 0.14]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.08, 0.08, 0.08]}
      />
    </group>
  )
}

useGLTF.preload('/iso-poly.gltf')
