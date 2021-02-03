import React, { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'
import { useThree } from 'react-three-fiber'

function Chair({ materials, nodes }) {
  const [label, setLabel] = useState(false)
  return (
    <group
      onPointerEnter={() => {
        setLabel(true)
      }}
      onPointerLeave={() => {
        setLabel(false)
      }}
    >
      <mesh
        material={materials.Default_Color}
        geometry={nodes.Chair_1.geometry}
      />
      <mesh
        material={materials.Default_White}
        geometry={nodes.Chair_2.geometry}
      />
      <group visible={label}>
        <mesh
          material={materials.Default_Color}
          geometry={nodes.Chair_Label_1.geometry}
        />
        <mesh
          material={materials.Default_White}
          geometry={nodes.Chair_Label_2.geometry}
        />
      </group>
    </group>
  )
}

function Lamp({ materials, nodes }) {
  const [label, setLabel] = useState(false)
  return (
    <group
      onPointerEnter={() => {
        setLabel(true)
      }}
      onPointerLeave={() => {
        setLabel(false)
      }}
    >
      <mesh
        material={materials.Default_Color}
        geometry={nodes.Hood_1.geometry}
      />
      <mesh
        material={materials.Default_White}
        geometry={nodes.Hood_2.geometry}
      />
      <group visible={label}>
        <mesh
          material={materials.Default_Color}
          geometry={nodes.Lamp_Label_1.geometry}
        />
        <mesh
          material={materials.Default_White}
          geometry={nodes.Lamp_Label_2.geometry}
        />
      </group>
    </group>
  )
}

function Soda({ materials, nodes }) {
  const [label, setLabel] = useState(false)
  return (
    <group
      onPointerEnter={() => {
        setLabel(true)
      }}
      onPointerLeave={() => {
        setLabel(false)
      }}
    >
      <mesh material={materials.Default_White} geometry={nodes.Can.geometry} />
      <mesh
        material={materials.Default_Color}
        geometry={nodes.Can_1.geometry}
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
      </group>
    </group>
  )
}

function Blinds({ materials, nodes }) {
  const [label, setLabel] = useState(false)
  return (
    <group
      onPointerEnter={() => {
        setLabel(true)
      }}
      onPointerLeave={() => {
        setLabel(false)
      }}
    >
      <mesh material={materials.Default_White} geometry={nodes.Blinds.geometry}>
        <group visible={label}>
          <mesh
            material={materials.Default_Color}
            geometry={nodes.Blinds_Label_1.geometry}
          />
          <mesh
            material={materials.Default_White}
            geometry={nodes.Blinds_Label_2.geometry}
          />
        </group>
      </mesh>
    </group>
  )
}

function Computer({ materials, nodes }) {
  const [label, setLabel] = useState(false)
  return (
    <group
      onPointerEnter={() => {
        setLabel(true)
      }}
      onPointerLeave={() => {
        setLabel(false)
      }}
    >
      <mesh
        material={materials.Default_White}
        geometry={nodes.Plane.geometry}
      />
      <mesh
        material={materials.Default_Color}
        geometry={nodes.Plane_1.geometry}
      />
      <group>
        <mesh
          material={materials.Default_White}
          geometry={nodes.Cube.geometry}
        />
        <mesh
          material={materials.Default_Color}
          geometry={nodes.Cube_1.geometry}
        />
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
      </group>
    </group>
  )
}

function Garbage({ materials, nodes }) {
  const [label, setLabel] = useState(false)
  return (
    <group
      onPointerEnter={() => {
        setLabel(true)
      }}
      onPointerLeave={() => {
        setLabel(false)
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
      <mesh
        material={materials.Default_White}
        geometry={nodes.Garbage.geometry}
      />
      <group visible={label}>
        <mesh
          material={materials.Default_Color}
          geometry={nodes.Garbage_Label_1.geometry}
        />
        <mesh
          material={materials.Default_White}
          geometry={nodes.Garbage_Label_2.geometry}
        />
      </group>
    </group>
  )
}

function Room({ materials, nodes }) {
  return (
    <group>
      <mesh
        material={materials.Default_White}
        geometry={nodes.Walls_Floor.geometry}
      />
      <mesh
        material={materials.Default_Color}
        geometry={nodes.Walls_Floor_1.geometry}
      />
    </group>
  )
}

function Rug({ materials, nodes }) {
  const [label, setLabel] = useState(false)
  return (
    <group
      onPointerEnter={() => {
        setLabel(true)
      }}
      onPointerLeave={() => {
        setLabel(false)
      }}
    >
      <mesh
        material={materials.Default_Color}
        geometry={nodes.Rug_1.geometry}
      />
      <mesh
        material={materials.Default_White}
        geometry={nodes.Rug_2.geometry}
      />
      <group visible={label}>
        <mesh
          material={materials.Default_Color}
          geometry={nodes.Rug_Label_1.geometry}
        />
        <mesh
          material={materials.Default_White}
          geometry={nodes.Rug_Label_2.geometry}
        />
      </group>
    </group>
  )
}

function Books({ materials, nodes }) {
  const [label, setLabel] = useState(false)
  return (
    <group
      onPointerEnter={() => {
        setLabel(true)
      }}
      onPointerLeave={() => {
        setLabel(false)
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
      <group>
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
      </group>
    </group>
  )
}

function WallArt({ materials, nodes }) {
  const [label, setLabel] = useState(false)
  return (
    <group
      onPointerEnter={() => {
        setLabel(true)
      }}
      onPointerLeave={() => {
        setLabel(false)
      }}
    >
      <mesh
        material={materials.Default_White}
        geometry={nodes.Wall_Art_1.geometry}
      />
      <mesh
        material={materials.Default_Color}
        geometry={nodes.Wall_Art_2.geometry}
      />
      <group visible={label}>
        <mesh
          material={materials.Default_Color}
          geometry={nodes.Art_Label_1.geometry}
        />
        <mesh
          material={materials.Default_White}
          geometry={nodes.Art_Label_2.geometry}
        />
      </group>
    </group>
  )
}

function Clock({ materials, nodes }) {
  const [label, setLabel] = useState(false)
  return (
    <group
      onPointerEnter={() => {
        setLabel(true)
      }}
      onPointerLeave={() => {
        setLabel(false)
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
      <group visible={label}>
        <mesh
          material={materials.Default_Color}
          geometry={nodes.Clock_Label_1.geometry}
        />
        <mesh
          material={materials.Default_White}
          geometry={nodes.Clock_Label_2.geometry}
        />
      </group>
      <mesh
        material={materials.Default_Color}
        geometry={nodes.Large_Hand.geometry}
      />
      <mesh
        material={materials.Default_Color}
        geometry={nodes.Small_Hand.geometry}
      />
    </group>
  )
}

function Glasses({ materials, nodes }) {
  const [label, setLabel] = useState(false)
  return (
    <group
      onPointerEnter={() => {
        setLabel(true)
      }}
      onPointerLeave={() => {
        setLabel(false)
      }}
    >
      <mesh
        material={materials.Default_White}
        geometry={nodes.Sunglasses.geometry}
      >
        <group visible={label}>
          <mesh
            material={materials.Default_Color}
            geometry={nodes.Glasses_Label_1.geometry}
          />
          <mesh
            material={materials.Default_White}
            geometry={nodes.Glasses_Label_2.geometry}
          />
        </group>
      </mesh>
    </group>
  )
}

function TextHeaders({ materials, nodes }) {
  return (
    <group>
      <mesh
        material={materials.Default_Color}
        geometry={nodes.Hello.geometry}
        position={[-0.83, 1.18, 0.73]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        material={materials.Default_Color}
        geometry={nodes.Im_Trevor.geometry}
        position={[-0.83, 0.95, 0.14]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        material={materials.Default_Color}
        geometry={nodes.I_Create.geometry}
        position={[-0.83, 0.87, 0.14]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
    </group>
  )
}

function Desk({ materials, nodes }) {
  return (
    <group>
      <mesh
        material={materials.Default_White}
        geometry={nodes.Cylinder.geometry}
      />
      <mesh
        material={materials.Default_Color}
        geometry={nodes.Cylinder_1.geometry}
      />
    </group>
  )
}

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/portfolio/models/iso-poly.gltf')

  const { camera, viewport } = useThree()

  useEffect(() => {
    camera.fov = 21
    camera.lookAt(0, 0, 0)
    camera.updateProjectionMatrix()
  })

  return (
    <group
      ref={group}
      dispose={null}
      position={[0, -0.73, 0]}
      rotation={[0, -0.8, 0]}
    >
      <TextHeaders nodes={nodes} materials={materials} />
      <Room nodes={nodes} materials={materials} />
      <Chair nodes={nodes} materials={materials} />
      <Lamp nodes={nodes} materials={materials} />
      <Soda nodes={nodes} materials={materials} />
      <Blinds nodes={nodes} materials={materials} />
      <Computer nodes={nodes} materials={materials} />
      <Garbage nodes={nodes} materials={materials} />
      <Rug nodes={nodes} materials={materials} />
      <Books nodes={nodes} materials={materials} />
      <WallArt nodes={nodes} materials={materials} />
      <Clock nodes={nodes} materials={materials} />
      <Glasses nodes={nodes} materials={materials} />
      <Desk nodes={nodes} materials={materials} />
    </group>
  )
}

useGLTF.preload('/iso-poly.gltf')
