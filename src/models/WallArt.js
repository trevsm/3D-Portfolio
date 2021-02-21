import React, { useEffect, useState, useRef } from "react";
import { useFrame } from "react-three-fiber";

function OverlayContent() {
  return (
    <>
      <h1 className="title">Interests</h1>
      <div className="tile-grid">
        <div className="tile">
          <div className="tile-content">
            Hiking <br />
            <span className="description">
              Utah&apos;s High Uintah Mountains are breathtaking! If you ever
              get a chance to go, take a map and visit one of the unnamed lakes
              near Mt. Marsell.
            </span>
          </div>
        </div>
        <div className="tile">
          <div className="tile-content">
            Writing <br />
            <span className="description">
              Poetry mostly; I&apos;ve found that creating a piece, that
              resonates with a reader, comes easier when you slow down and
              describe your senses.
            </span>
          </div>
        </div>
        <div className="tile">
          <div className="tile-content">
            Swimming <br />
            <span className="description">
              Always loved the water since I was little. The weightlessness and
              lack of sound at the bottom of the pool really lets me think.
            </span>
          </div>
        </div>
        <div className="tile">
          <div className="tile-content">
            3D Modeling <br />
            <span className="description">
              Originally, I started learning with CAD and 3D Printing the
              result. Now, I&apos;ve moved on to Blender and animation.
            </span>
          </div>
        </div>
        <div className="tile">
          <div className="tile-content">
            Music <br />
            <span className="description">
              I believe my specific taste is &quot;Melodic Dubstep&quot;, sorta
              like Dubstep meets Trance:{" "}
              <a
                href="https://soundcloud.com/hegemon/skrux-essence"
                target="new"
              >
                Check it out
              </a>
              .
            </span>
          </div>
        </div>
        <div className="tile">
          <div className="tile-content">
            Coding <br />
            <span className="description">
              Creating solutions to problems people didn&apos;t know they had ;)
              But really, coding is my favorite tool in my toolbox; There&apos;s
              always somthing exciting to learn.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export function WallArt({ materials, nodes, setItems }) {
  const [label, setLabel] = useState(false);

  const sunRef = useRef();
  const sun2Ref = useRef();
  const recordRef = useRef();
  const armRef = useRef();
  const c1Ref = useRef();
  const c2Ref = useRef();

  const idx = useRef(1.15);
  const tmp = useRef(1);

  useEffect(() => {
    document.body.style.cursor = label ? "pointer" : "auto";
  }, [label]);

  function updateSunTransforms() {
    sunRef.current.scale.y = Math.sin(idx.current) / 5 + 0.83;
    sunRef.current.scale.z = Math.sin(idx.current) / 5 + 0.83;

    sun2Ref.current.scale.y = -Math.sin(idx.current) / 5 + 0.83;
    sun2Ref.current.scale.z = -Math.sin(idx.current) / 5 + 0.83;

    sunRef.current.position.y = Math.sin(idx.current) / 10 + 0.83;
    sun2Ref.current.position.y = -Math.sin(idx.current) / 10 + 0.83;
  }

  function spinRecordAndArm() {
    recordRef.current.rotation.x = -idx.current;
    armRef.current.rotation.x = Math.cos(idx.current) / 4 - 0.2;
  }

  function updateStringTransforms() {
    c1Ref.current.rotation.y = idx.current / 5;
    c2Ref.current.rotation.y = -idx.current / 5;
  }

  useEffect(() => {
    updateSunTransforms();
    spinRecordAndArm();
    updateStringTransforms();
  }, []);

  useFrame(({ clock }) => {
    if (label) {
      if (!clock.running) clock.start();
      idx.current = clock.elapsedTime * 1.5 + tmp.current;
      updateSunTransforms();
      spinRecordAndArm();
      updateStringTransforms();
    } else {
      if (clock.running) {
        tmp.current += clock.elapsedTime * 1.5;
        clock.stop();
      }
    }
  });

  return (
    <group>
      <group
        onPointerEnter={() => {
          setLabel(true);
        }}
        onPointerLeave={() => {
          setLabel(false);
        }}
        onClick={() => {
          setItems(<OverlayContent />);
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
  );
}
