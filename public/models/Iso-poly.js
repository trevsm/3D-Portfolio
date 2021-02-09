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
      <group position={[-0.1882, 0.4166, -0.1384]}>
        <mesh material={materials.Default_Color} geometry={nodes.Chair.geometry} />
        <mesh material={materials.Default_White} geometry={nodes.Chair_1.geometry} />
        <group position={[0.1882, -0.4166, 0.1384]}>
          <mesh material={materials.Default_Color} geometry={nodes.Chair_Label_1.geometry} />
          <mesh material={materials.Default_White} geometry={nodes.Chair_Label_2.geometry} />
          <mesh
            material={materials.Default_Color}
            geometry={nodes.Chair_Text.geometry}
            position={[-0.0614, 0.8265, 0.1417]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
            <mesh
              material={materials.Default_Color}
              geometry={nodes.Chair_CTV.geometry}
              position={[-0.0033, 0, 0.0404]}
            />
          </mesh>
        </group>
      </group>
      <mesh material={materials.Default_White} geometry={nodes.Desk_1.geometry} />
      <mesh material={materials.Default_Color} geometry={nodes.Desk_2.geometry} />
      <group position={[-0.7072, 0.6649, 0.2244]}>
        <mesh material={materials.Default_Color} geometry={nodes.Body_1.geometry} />
        <mesh material={materials.Default_White} geometry={nodes.Body_2.geometry} />
        <mesh
          material={materials.Material}
          geometry={nodes.Lamp_HitBox.geometry}
          position={[0.7072, -0.6649, -0.2244]}
        />
        <group position={[0.7072, -0.6649, -0.2244]}>
          <mesh material={materials.Default_Color} geometry={nodes.Lamp_Label_1.geometry} />
          <mesh material={materials.Default_White} geometry={nodes.Lamp_Label_2.geometry} />
          <mesh
            material={materials.Default_Color}
            geometry={nodes.Lamp_Text.geometry}
            position={[-0.6785, 0.876, 0.0899]}
            rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
            <mesh
              material={materials.Default_Color}
              geometry={nodes.Lamp_CTV.geometry}
              position={[-0.0188, 0, 0.031]}
            />
          </mesh>
        </group>
      </group>
      <group position={[-0.714, 0.7242, 0.2528]}>
        <mesh material={materials.Default_Color} geometry={nodes.Hood_1.geometry} />
        <mesh material={materials.Default_White} geometry={nodes.Hood_2.geometry} />
      </group>
      <mesh material={materials.Default_White} geometry={nodes.Can.geometry} />
      <mesh material={materials.Default_Color} geometry={nodes.Can_1.geometry} />
      <mesh material={materials.Default_Color} geometry={nodes.Soda_Label_1.geometry} />
      <mesh material={materials.Default_White} geometry={nodes.Soda_Label_2.geometry} />
      <mesh
        material={materials.Default_Color}
        geometry={nodes.Soda_Text.geometry}
        position={[-0.5866, 0.7549, -0.5215]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh material={materials.Default_Color} geometry={nodes.Soda_CTV.geometry} position={[-0.0127, 0, 0.0404]} />
      </mesh>
      <mesh material={materials.Default_Color} geometry={nodes.Tab.geometry} position={[-0.5912, 0.5937, -0.4148]} />
      <mesh material={materials.Default_Color} geometry={nodes.Hole.geometry} />
      <mesh material={materials.Default_White} geometry={nodes.Top.geometry}>
        <mesh
          material={materials.Default_White}
          geometry={nodes.Blinds.geometry}
          position={[-0.0482, 1.2293, -0.9467]}
        />
        <mesh material={materials.Default_Color} geometry={nodes.Blinds_Label_1.geometry} />
        <mesh material={materials.Default_White} geometry={nodes.Blinds_Label_2.geometry} />
        <mesh
          material={materials.Default_Color}
          geometry={nodes.Blinds_Text.geometry}
          position={[-0.539, 1.0163, -0.8982]}
          rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            material={materials.Default_Color}
            geometry={nodes.Blinds_CTV.geometry}
            position={[0.0122, 0, 0.0404]}
          />
        </mesh>
        <mesh material={materials.Default_White} geometry={nodes.Bottom.geometry} />
        <mesh material={materials.Default_White} geometry={nodes.StringL.geometry} />
        <mesh material={materials.Default_White} geometry={nodes.StringR.geometry} />
      </mesh>
      <mesh material={materials.Material} geometry={nodes.Blinds_HitBox.geometry} />
      <mesh material={materials.Default_White} geometry={nodes.Computer_1.geometry} />
      <mesh material={materials.Default_Color} geometry={nodes.Computer_2.geometry} />
      <mesh material={materials.Default_White} geometry={nodes.Cube.geometry} />
      <mesh material={materials.Default_Color} geometry={nodes.Cube_1.geometry} />
      <mesh material={materials.Default_Color} geometry={nodes.Laptop_Label_1.geometry} />
      <mesh material={materials.Default_White} geometry={nodes.Laptop_Label_2.geometry} />
      <mesh
        material={materials.Default_Color}
        geometry={nodes.Laptop_Text.geometry}
        position={[-0.6406, 0.7324, -0.1873]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh material={materials.Default_Color} geometry={nodes.Laptop_CTV.geometry} position={[0.012, 0, 0.0404]} />
      </mesh>
      <group position={[-0.7124, 0.5429, -0.1432]}>
        <mesh material={materials.Default_White} geometry={nodes.Lid_1.geometry} />
        <mesh material={materials.Default_Color} geometry={nodes.Lid_2.geometry} />
      </group>
      <mesh material={materials.Default_White} geometry={nodes.Hinge.geometry} />
      <mesh material={materials.Default_Color} geometry={nodes.Bin_1.geometry} />
      <mesh material={materials.Default_White} geometry={nodes.Bin_2.geometry} />
      <mesh material={materials.Default_White} geometry={nodes.Garbage.geometry} />
      <mesh material={materials.Default_Color} geometry={nodes.Garbage_Label_1.geometry} />
      <mesh material={materials.Default_White} geometry={nodes.Garbage_Label_2.geometry} />
      <mesh
        material={materials.Default_Color}
        geometry={nodes.Garbage_Text.geometry}
        position={[-0.5932, 0.4408, 0.6666]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh material={materials.Default_Color} geometry={nodes.Garbage_CTV.geometry} position={[0.0203, 0, 0.0404]} />
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
        position={[-0.8129, 0.7051, -0.5946]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh material={materials.Default_Color} geometry={nodes.Books_CTV.geometry} position={[0.0314, 0, 0.0404]} />
      </mesh>
      <mesh material={materials.Default_White} geometry={nodes.Wall_Art.geometry} />
      <mesh material={materials.Default_Color} geometry={nodes.Wall_Art_1.geometry} />
      <mesh material={materials.Default_Color} geometry={nodes.Art_Label_1.geometry} />
      <mesh material={materials.Default_White} geometry={nodes.Art_Label_2.geometry} />
      <mesh
        material={materials.Default_Color}
        geometry={nodes.Art_Text.geometry}
        position={[-0.7707, 0.5807, 0.8428]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh material={materials.Default_Color} geometry={nodes.Art_CTV.geometry} position={[0.0209, 0, 0.0404]} />
      </mesh>
      <mesh material={materials.Default_White} geometry={nodes.Art_HitBox.geometry} position={[0.012, 0.0067, 0]} />
      <mesh material={materials.Default_Color} geometry={nodes.Sun01.geometry} position={[-0.8297, 0.9258, 0.8038]} />
      <group position={[-0.8267, 0.9513, 0.4852]}>
        <mesh material={materials.Default_White} geometry={nodes.Record_1.geometry} />
        <mesh material={materials.Default_Color} geometry={nodes.Record_2.geometry} />
        <mesh material={materials.Default_White} geometry={nodes.Lines.geometry} />
      </group>
      <mesh material={materials.Default_White} geometry={nodes.Arm.geometry} position={[-0.8247, 1.0073, 0.4069]} />
      <mesh material={materials.Default_Color} geometry={nodes.Sun02.geometry} position={[-0.8297, 0.753, 0.7151]} />
      <mesh material={materials.Default_Color} geometry={nodes.cbody.geometry} />
      <mesh material={materials.Default_White} geometry={nodes.cbody_1.geometry} />
      <mesh material={materials.Default_Color} geometry={nodes.Clock_Label_1.geometry} />
      <mesh material={materials.Default_White} geometry={nodes.Clock_Label_2.geometry} />
      <mesh
        material={materials.Default_Color}
        geometry={nodes.Clock_Text.geometry}
        position={[0.5617, 1.3524, -0.8982]}
        rotation={[Math.PI / 2, 0, 0]}>
        <mesh material={materials.Default_Color} geometry={nodes.Clock_CTV.geometry} position={[0.0144, 0, 0.0404]} />
      </mesh>
      <mesh
        material={materials.Default_Color}
        geometry={nodes.Large_Hand.geometry}
        position={[0.4474, 1.1215, -0.9021]}
      />
      <mesh
        material={materials.Default_Color}
        geometry={nodes.Small_Hand.geometry}
        position={[0.4475, 1.1216, -0.9021]}
      />
      <mesh
        material={materials.Default_Color}
        geometry={nodes.Hello.geometry}
        position={[-0.8284, 1.1807, 0.7253]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        material={materials.Default_Color}
        geometry={nodes.Im_Trevor.geometry}
        position={[-0.8284, 0.9505, 0.1443]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        material={materials.Default_Color}
        geometry={nodes.I_Create.geometry}
        position={[-0.8284, 0.8954, 0.1344]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={[0.8729, 0.8729, 0.8729]}
      />
      <mesh
        material={materials.Default_Color}
        geometry={nodes.Look_Around.geometry}
        position={[0.2137, 0.4145, -0.9001]}
        rotation={[1.5617, 0, 0]}
      />
      <mesh
        material={materials.Default_Color}
        geometry={nodes.Circle1.geometry}
        position={[-1.1003, 0.8223, 0.7622]}
        scale={[0.7281, 0.7281, 0.7281]}
      />
      <mesh
        material={materials.Default_Color}
        geometry={nodes.Circle2.geometry}
        position={[-1.1003, 0.8214, 0.7622]}
        rotation={[0, -1.4443, 0]}
        scale={[0.7281, 0.7281, 0.7281]}
      />
      <mesh material={materials.Default_White} geometry={nodes.Glasses_1.geometry} />
      <mesh material={materials.Default_Color} geometry={nodes.Glasses_2.geometry} />
      <mesh material={materials.Default_Color} geometry={nodes.Glasses_Label_1.geometry} />
      <mesh material={materials.Default_White} geometry={nodes.Glasses_Label_2.geometry} />
      <mesh
        material={materials.Default_Color}
        geometry={nodes.Glasses_Text.geometry}
        position={[-0.7179, 0.6936, -0.4294]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh
          material={materials.Default_Color}
          geometry={nodes.Glasses_CTV.geometry}
          position={[-0.0062, 0, 0.0404]}
        />
      </mesh>
      <mesh material={materials.Material} geometry={nodes.Glasses_HitBox.geometry} />
    </group>
  )
}

useGLTF.preload('/iso-poly.gltf')
