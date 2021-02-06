import React, { useEffect, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei/useGLTF'
import { useFrame } from 'react-three-fiber'

import { useSpring } from '@react-spring/core'
import { a } from '@react-spring/three'

const defaultConfig = {
  mass: 5,
  tension: 400,
  friction: 150,
  precision: 0.0001,
}

function Chair({ materials, nodes, setItems }) {
  const [label, setLabel] = useState(false)
  const [active, setActive] = useState(false)

  const sProps = useSpring({
    pos: active ? [0, 0, 0] : [1, 0, 0],
    config: defaultConfig,
  })

  const Overlay = (
    <div>
      <h1 className="title">Chair</h1>
    </div>
  )

  useEffect(() => {
    setActive(true)
  }, [])

  useEffect(() => {
    document.body.style.cursor = label ? 'pointer' : 'auto'
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
          setItems(Overlay)
        }}
      >
        <mesh
          material={materials.Default_Color}
          geometry={nodes.Chair.geometry}
        />
        <mesh
          material={materials.Default_White}
          geometry={nodes.Chair_1.geometry}
        />
      </group>
      <group visible={label}>
        <mesh
          material={materials.Default_Color}
          geometry={nodes.Chair_Label_1.geometry}
        />
        <mesh
          material={materials.Default_White}
          geometry={nodes.Chair_Label_2.geometry}
        />
        <mesh
          material={materials.Default_Color}
          geometry={nodes.Chair_Text.geometry}
          position={[-0.06, 0.83, 0.14]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            material={materials.Default_Color}
            geometry={nodes.Chair_CTV.geometry}
            position={[0, 0, 0.04]}
          />
        </mesh>
      </group>
    </a.group>
  )
}

function Lamp({ materials, nodes, setItems }) {
  const [label, setLabel] = useState(false)
  const [active, setActive] = useState(false)

  const endPos = [-0.71, 0.66, 0.22]

  const sProps = useSpring({
    pos: active ? endPos : [endPos[0], endPos[1] + 1, endPos[2]],
    rot: active ? [0, 0, 0] : [0, Math.PI, 0],
    config: defaultConfig,
  })

  const Overlay = (
    <div>
      <h1 className="title">Future Projects</h1>
    </div>
  )

  useEffect(() => {
    setActive(true)
  }, [])

  useEffect(() => {
    document.body.style.cursor = label ? 'pointer' : 'auto'
  }, [label])

  return (
    <a.group position={sProps.pos} rotation={sProps.rot}>
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
          geometry={nodes.Hood_1.geometry}
        />
        <mesh
          material={materials.Default_White}
          geometry={nodes.Hood_2.geometry}
        />
        <mesh
          visible={false}
          material={materials.Material}
          geometry={nodes.Lamp_HitBox.geometry}
          position={[0.71, -0.66, -0.22]}
        />
      </group>
      <group visible={label} position={[0.71, -0.66, -0.22]}>
        <mesh
          material={materials.Default_Color}
          geometry={nodes.Lamp_Label_1.geometry}
        />
        <mesh
          material={materials.Default_White}
          geometry={nodes.Lamp_Label_2.geometry}
        />
        <mesh
          material={materials.Default_Color}
          geometry={nodes.Lamp_Text.geometry}
          position={[-0.68, 0.88, 0.1]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            material={materials.Default_Color}
            geometry={nodes.Lamp_CTV.geometry}
            position={[-0.01, 0, 0.04]}
          />
        </mesh>
      </group>
    </a.group>
  )
}

function Soda({ materials, nodes, setItems }) {
  const [label, setLabel] = useState(false)
  const [active, setActive] = useState(false)

  const sProps = useSpring({
    pos: active ? [0, 0, 0] : [0, 1, 0],
    config: defaultConfig,
  })

  const Overlay = (
    <div>
      <h1 className="title">Soda</h1>
    </div>
  )

  useEffect(() => {
    setTimeout(() => {
      setActive(true)
    }, 200)
  }, [])

  useEffect(() => {
    document.body.style.cursor = label ? 'pointer' : 'auto'
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
          setItems(Overlay)
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
      <group visible={label}>
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

function Blinds({ materials, nodes, setItems }) {
  const [label, setLabel] = useState(false)

  useEffect(() => {
    document.body.style.cursor = label ? 'pointer' : 'auto'
  }, [label])

  const Overlay = (
    <div>
      <h1 className="title">Window</h1>
    </div>
  )

  return (
    <group>
      <mesh
        visible={false}
        onPointerEnter={() => {
          setLabel(true)
        }}
        onPointerLeave={() => {
          setLabel(false)
        }}
        onClick={() => {
          setItems(Overlay)
        }}
        material={materials.Material}
        geometry={nodes.Blinds_HitBox.geometry}
      />
      <mesh
        material={materials.Default_White}
        geometry={nodes.Blinds.geometry}
      />
      <group visible={label}>
        <mesh
          material={materials.Default_Color}
          geometry={nodes.Blinds_Label_1.geometry}
        />
        <mesh
          material={materials.Default_White}
          geometry={nodes.Blinds_Label_2.geometry}
        />
        <mesh
          material={materials.Default_Color}
          geometry={nodes.Blinds_Text.geometry}
          position={[-0.54, 1.02, -0.9]}
          rotation={[Math.PI / 2, 0, 0]}
        >
          <mesh
            material={materials.Default_Color}
            geometry={nodes.Blinds_CTV.geometry}
            position={[0.01, 0, 0.04]}
          />
        </mesh>
      </group>
    </group>
  )
}

function Computer({ materials, nodes, setItems }) {
  const [label, setLabel] = useState(false)
  const [active, setActive] = useState(false)

  const sProps = useSpring({
    rot: active ? [0, 0, 0] : [0, 0, -1.8],
    config: defaultConfig,
  })

  const Overlay = (
    <div>
      <h1 className="title">Projects</h1>
    </div>
  )

  useEffect(() => {
    setTimeout(() => {
      setActive(true)
    }, 1000)
  }, [])

  useEffect(() => {
    document.body.style.cursor = label ? 'pointer' : 'auto'
  }, [label])

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
          <mesh
            material={materials.Default_White}
            geometry={nodes.Lid_1.geometry}
          />
          <mesh
            material={materials.Default_Color}
            geometry={nodes.Lid_2.geometry}
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

function Garbage({ materials, nodes, setItems }) {
  const [label, setLabel] = useState(false)

  useEffect(() => {
    document.body.style.cursor = label ? 'pointer' : 'auto'
  }, [label])

  const Overlay = (
    <div>
      <h1 className="title">Garbage</h1>
    </div>
  )

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
          position={[-0.59, 0.44, 0.67]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            material={materials.Default_Color}
            geometry={nodes.Garbage_CTV.geometry}
            position={[0.02, 0, 0.04]}
          />
        </mesh>
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
  return (
    <group>
      <mesh
        material={materials.Default_Color}
        geometry={nodes.Rug_1.geometry}
      />
      <mesh
        material={materials.Default_White}
        geometry={nodes.Rug_2.geometry}
      />
    </group>
  )
}

function Books({ materials, nodes, setItems }) {
  const [label, setLabel] = useState(false)
  const [active, setActive] = useState(false)

  const sProps = useSpring({
    pos: active ? [0, 0, 0] : [0, 1, 0],
    config: defaultConfig,
  })

  const Overlay = (
    <div>
      <h1 className="title">Education</h1>
    </div>
  )

  useEffect(() => {
    setTimeout(() => {
      setActive(true)
    }, 300)
  }, [])

  useEffect(() => {
    document.body.style.cursor = label ? 'pointer' : 'auto'
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
          setItems(Overlay)
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
        <mesh
          material={materials.Default_Color}
          geometry={nodes.Books_Text.geometry}
          position={[-0.81, 0.71, -0.59]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        >
          <mesh
            material={materials.Default_Color}
            geometry={nodes.Books_CTV.geometry}
            position={[0.03, 0, 0.04]}
          />
        </mesh>
      </group>
    </a.group>
  )
}

function WallArt({ materials, nodes, setItems }) {
  const [label, setLabel] = useState(false)

  useEffect(() => {
    document.body.style.cursor = label ? 'pointer' : 'auto'
  }, [label])

  const Overlay = (
    <div>
      <h1 className="title">Music</h1>
    </div>
  )

  return (
    <group>
      <mesh
        visible={false}
        material={materials.Material}
        geometry={nodes.Art_HitBox.geometry}
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

function Clock({ materials, nodes, setItems }) {
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

function Glasses({ materials, nodes, setItems }) {
  const [label, setLabel] = useState(false)
  const [active, setActive] = useState(false)

  const sProps = useSpring({
    pos: active ? [0, 0, 0] : [0, 1, 0],
    config: defaultConfig,
  })

  const Overlay = (
    <div>
      <h1 className="title">Vision</h1>
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
      <mesh
        material={materials.Default_White}
        geometry={nodes.Glasses_1.geometry}
      />
      <mesh
        material={materials.Default_Color}
        geometry={nodes.Glasses_2.geometry}
      />
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

function TextHeaders({ materials, nodes }) {
  const [active, setActive] = useState(false)
  const [active1, setActive1] = useState(false)
  const [active2, setActive2] = useState(false)
  const [active3, setActive3] = useState(false)

  const pX = [
    [-0.83, 1.18, 0.73],
    [-0.83, 0.95, 0.14],
    [-0.83, 0.87, 0.14],
    [0.21, 0.41, -0.9],
  ]

  const sProps = useSpring({
    pos0: active ? pX[0] : [pX[0][0] - 1, pX[0][1], pX[0][2]],
    pos1: active1 ? pX[1] : [pX[1][0] - 1, pX[1][1], pX[1][2]],
    pos2: active2 ? pX[2] : [pX[2][0] - 1, pX[2][1], pX[2][2]],
    pos3: active3 ? pX[3] : [pX[3][0], pX[3][1], pX[3][2] - 0.5],
    config: { mass: 20, tension: 400, friction: 200, precision: 0.0001 },
  })

  useEffect(() => {
    setTimeout(() => {
      setActive(true)
    }, 250)
    setTimeout(() => {
      setActive1(true)
    }, 750)
    setTimeout(() => {
      setActive2(true)
    }, 1000)
    setTimeout(() => {
      setActive3(true)
    }, 1500)
  }, [])

  return (
    <group>
      <a.mesh
        material={materials.Default_Color}
        geometry={nodes.Hello.geometry}
        position={sProps.pos0}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <a.mesh
        material={materials.Default_Color}
        geometry={nodes.Im_Trevor.geometry}
        position={sProps.pos1}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <a.mesh
        material={materials.Default_Color}
        geometry={nodes.I_Create.geometry}
        position={sProps.pos2}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <a.mesh
        geometry={nodes.Look_Around.geometry}
        material={materials.Default_Color}
        position={sProps.pos3}
        rotation={[1.56, 0, 0]}
      />
    </group>
  )
}

function Desk({ materials, nodes }) {
  return (
    <group>
      <mesh
        material={materials.Default_White}
        geometry={nodes.Desk_1.geometry}
      />
      <mesh
        material={materials.Default_Color}
        geometry={nodes.Desk_2.geometry}
      />
    </group>
  )
}

export default function Model({ setItems }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/portfolio/models/iso-poly.gltf')

  return (
    <group
      ref={group}
      dispose={null}
      position={[0, -0.76, 0]}
      rotation={[0, -0.8, 0]}
    >
      <TextHeaders nodes={nodes} materials={materials} />
      <Room nodes={nodes} materials={materials} />
      <Rug nodes={nodes} materials={materials} />
      <Desk nodes={nodes} materials={materials} />
      <Chair nodes={nodes} materials={materials} setItems={setItems} />
      <Lamp nodes={nodes} materials={materials} setItems={setItems} />
      <Clock nodes={nodes} materials={materials} setItems={setItems} />
      <Blinds nodes={nodes} materials={materials} setItems={setItems} />
      <Computer nodes={nodes} materials={materials} setItems={setItems} />
      <Garbage nodes={nodes} materials={materials} setItems={setItems} />
      <WallArt nodes={nodes} materials={materials} setItems={setItems} />
      <Soda nodes={nodes} materials={materials} setItems={setItems} />
      <Books nodes={nodes} materials={materials} setItems={setItems} />
      <Glasses nodes={nodes} materials={materials} setItems={setItems} />
    </group>
  )
}

useGLTF.preload('/portfolio/models/iso-poly.gltf')
