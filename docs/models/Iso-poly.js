/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/iso-poly.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh material={materials.Default_Color} geometry={nodes.Chair.geometry} />
      <mesh material={materials.Default_White} geometry={nodes.Chair_1.geometry} />
      <mesh material={materials.Default_Color} geometry={nodes.Chair_Label_1.geometry} />
      <mesh material={materials.Default_White} geometry={nodes.Chair_Label_2.geometry} />
      <mesh
        material={materials.Default_Color}
        geometry={nodes.Chair_Text.geometry}
        position={[-0.06, 0.83, 0.14]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh material={materials.Default_Color} geometry={nodes.Chair_CTV.geometry} position={[0, 0, 0.04]} />
      </mesh>
      <mesh material={materials.Default_White} geometry={nodes.Desk_1.geometry} />
      <mesh material={materials.Default_Color} geometry={nodes.Desk_2.geometry} />
      <group position={[-0.71, 0.66, 0.22]}>
        <mesh material={materials.Default_Color} geometry={nodes.Hood_1.geometry} />
        <mesh material={materials.Default_White} geometry={nodes.Hood_2.geometry} />
        <group position={[0.71, -0.66, -0.22]}>
          <mesh material={materials.Default_Color} geometry={nodes.Lamp_Label_1.geometry} />
          <mesh material={materials.Default_White} geometry={nodes.Lamp_Label_2.geometry} />
          <mesh
            material={materials.Default_Color}
            geometry={nodes.Lamp_Text.geometry}
            position={[-0.68, 0.88, 0.1]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
            <mesh material={materials.Default_Color} geometry={nodes.Lamp_CTV.geometry} position={[-0.01, 0, 0.04]} />
          </mesh>
        </group>
      </group>
      <mesh material={materials.Default_White} geometry={nodes.Can.geometry} />
      <mesh material={materials.Default_Color} geometry={nodes.Can_1.geometry} />
      <mesh material={materials.Default_Color} geometry={nodes.Soda_Label_1.geometry} />
      <mesh material={materials.Default_White} geometry={nodes.Soda_Label_2.geometry} />
      <mesh
        material={materials.Default_Color}
        geometry={nodes.Soda_Text.geometry}
        position={[-0.59, 0.75, -0.52]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh material={materials.Default_Color} geometry={nodes.Soda_CTV.geometry} position={[-0.01, 0, 0.04]} />
      </mesh>
      <mesh material={materials.Default_White} geometry={nodes.Blinds.geometry}>
        <mesh material={materials.Default_Color} geometry={nodes.Blinds_Label_1.geometry} />
        <mesh material={materials.Default_White} geometry={nodes.Blinds_Label_2.geometry} />
        <mesh
          material={materials.Default_Color}
          geometry={nodes.Blinds_Text.geometry}
          position={[-0.54, 1.02, -0.9]}
          rotation={[Math.PI / 2, 0, 0]}>
          <mesh material={materials.Default_Color} geometry={nodes.Blinds_CTV.geometry} position={[0.01, 0, 0.04]} />
        </mesh>
      </mesh>
      <mesh material={materials.Material} geometry={nodes.Blinds_HitBox.geometry} />
      <group position={[-0.68, 0.58, -0.13]}>
        <mesh material={materials.Default_White} geometry={nodes.Computer_1.geometry} />
        <mesh material={materials.Default_Color} geometry={nodes.Computer_2.geometry} />
        <group position={[0.68, -0.58, 0.13]}>
          <mesh material={materials.Default_White} geometry={nodes.Cube.geometry} />
          <mesh material={materials.Default_Color} geometry={nodes.Cube_1.geometry} />
        </group>
        <group position={[0.68, -0.58, 0.13]}>
          <mesh material={materials.Default_Color} geometry={nodes.Laptop_Label_1.geometry} />
          <mesh material={materials.Default_White} geometry={nodes.Laptop_Label_2.geometry} />
          <mesh
            material={materials.Default_Color}
            geometry={nodes.Laptop_Text.geometry}
            position={[-0.64, 0.73, -0.19]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
            <mesh material={materials.Default_Color} geometry={nodes.Laptop_CTV.geometry} position={[0.01, 0, 0.04]} />
          </mesh>
        </group>
      </group>
      <group position={[-0.71, 0.54, -0.14]} rotation={[0, 0, 0.02]} scale={[1, 1.08, 0.99]}>
        <mesh material={materials.Default_White} geometry={nodes.Lid_1.geometry} />
        <mesh material={materials.Default_Color} geometry={nodes.Lid_2.geometry} />
      </group>
      <mesh
        material={nodes.Hinge.material}
        geometry={nodes.Hinge.geometry}
        position={[-0.72, 0.54, -0.14]}
        scale={[0.49, 0.78, 15.97]}
      />
      <mesh material={materials.Default_Color} geometry={nodes.Bin_1.geometry} />
      <mesh material={materials.Default_White} geometry={nodes.Bin_2.geometry} />
      <mesh material={materials.Default_White} geometry={nodes.Garbage.geometry} />
      <mesh material={materials.Default_Color} geometry={nodes.Garbage_Label_1.geometry} />
      <mesh material={materials.Default_White} geometry={nodes.Garbage_Label_2.geometry} />
      <mesh
        material={materials.Default_Color}
        geometry={nodes.Garbage_Text.geometry}
        position={[-0.59, 0.44, 0.67]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh material={materials.Default_Color} geometry={nodes.Garbage_CTV.geometry} position={[0.02, 0, 0.04]} />
      </mesh>
      <mesh material={materials.Default_White} geometry={nodes.Walls_Floor.geometry} />
      <mesh material={materials.Default_Color} geometry={nodes.Walls_Floor_1.geometry} />
      <mesh material={materials.Default_Color} geometry={nodes.Rug_1.geometry} />
      <mesh material={materials.Default_White} geometry={nodes.Rug_2.geometry} />
      <mesh material={materials.Default_Color} geometry={nodes.Book_02.geometry} />
      <mesh material={materials.Default_White} geometry={nodes.Book_02_1.geometry} />
      <mesh material={materials.Default_Color} geometry={nodes.Book_01_1.geometry} />
      <mesh material={materials.Default_White} geometry={nodes.Book_01_2.geometry} />
      <mesh material={materials.Default_Color} geometry={nodes.Books_Label_1.geometry} />
      <mesh material={materials.Default_White} geometry={nodes.Books_Label_2.geometry} />
      <mesh
        material={materials.Default_Color}
        geometry={nodes.Books_Text.geometry}
        position={[-0.81, 0.71, -0.59]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh material={materials.Default_Color} geometry={nodes.Books_CTV.geometry} position={[0.03, 0, 0.04]} />
      </mesh>
      <mesh material={materials.Default_White} geometry={nodes.Wall_Art_1.geometry} />
      <mesh material={materials.Default_Color} geometry={nodes.Wall_Art_2.geometry} />
      <mesh material={materials.Default_Color} geometry={nodes.Art_Label_1.geometry} />
      <mesh material={materials.Default_White} geometry={nodes.Art_Label_2.geometry} />
      <mesh
        material={materials.Default_Color}
        geometry={nodes.Art_Text.geometry}
        position={[-0.77, 0.58, 0.84]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh material={materials.Default_Color} geometry={nodes.Art_CTV.geometry} position={[0.02, 0, 0.04]} />
      </mesh>
      <mesh material={materials.Material} geometry={nodes.Art_HitBox.geometry} />
      <mesh material={materials.Default_Color} geometry={nodes.cbody.geometry} />
      <mesh material={materials.Default_White} geometry={nodes.cbody_1.geometry} />
      <mesh material={materials.Default_Color} geometry={nodes.Clock_Label_1.geometry} />
      <mesh material={materials.Default_White} geometry={nodes.Clock_Label_2.geometry} />
      <mesh
        material={materials.Default_Color}
        geometry={nodes.Clock_Text.geometry}
        position={[0.59, 1.35, -0.9]}
        rotation={[Math.PI / 2, 0, 0]}>
        <mesh material={materials.Default_Color} geometry={nodes.Clock_CTV.geometry} position={[-0.01, 0, 0.04]} />
      </mesh>
      <mesh material={materials.Default_Color} geometry={nodes.Large_Hand.geometry} position={[0.45, 1.12, -0.9]} />
      <mesh material={materials.Default_Color} geometry={nodes.Small_Hand.geometry} position={[0.45, 1.12, -0.9]} />
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
        position={[-0.83, 0.9, 0.13]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.87, 0.87, 0.87]}
      />
      <mesh
        material={materials.Default_Color}
        geometry={nodes.Look_Around.geometry}
        position={[0.21, 0.41, -0.9]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.87, 0.87, 0.87]}
      />
      <mesh material={materials.Default_White} geometry={nodes.Glasses_1.geometry} />
      <mesh material={materials.Default_Color} geometry={nodes.Glasses_2.geometry} />
      <mesh material={materials.Default_Color} geometry={nodes.Glasses_Label_1.geometry} />
      <mesh material={materials.Default_White} geometry={nodes.Glasses_Label_2.geometry} />
      <mesh
        material={materials.Default_Color}
        geometry={nodes.Glasses_Text.geometry}
        position={[-0.72, 0.69, -0.42]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh material={materials.Default_Color} geometry={nodes.Glasses_CTV.geometry} position={[0.01, 0, 0.04]} />
      </mesh>
      <mesh material={materials.Material} geometry={nodes.Glasses_HitBox.geometry} />
    </group>
  )
}

useGLTF.preload('/iso-poly.gltf')
