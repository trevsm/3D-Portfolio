import React, { Suspense, useRef, useState, useEffect } from 'react'
import { Html, OrbitControls } from '@react-three/drei'
import { EffectComposer, Noise } from 'react-postprocessing'
import { Canvas, useThree } from 'react-three-fiber'
import Model from './Iso-poly'

import './App.css'

function Loader() {
  return (
    <Html center>
      <div className="loader-2">Finishing up...</div>
    </Html>
  )
}

function Overlay(props) {
  function closeOverlay() {
    props.setOverlayOpen(false)
  }
  return (
    <>
      {props.overlayOpen ? (
        <div className="overlay">
          <div className="closeBtn" onClick={closeOverlay}>
            x
          </div>
          <div className="content">{props.children}</div>
        </div>
      ) : null}
    </>
  )
}

function CustomCamera() {
  const { camera, viewport } = useThree()

  useEffect(() => {
    camera.fov = 23
    camera.lookAt(0, 0, 0)
    camera.updateProjectionMatrix()
  })
  return null
}

export default function App() {
  const [overlayOpen, setOverlayOpen] = useState(false)
  const overlayItems = useRef([])

  const setItems = (items) => {
    overlayItems.current = items
    setOverlayOpen(true)
  }

  return (
    <>
      <Canvas
        pixelRatio={window.devicePixelRatio}
        camera={{ position: [0, 2, 4] }}
      >
        {/* <OrbitControls /> */}
        <ambientLight intensity={0.9} />
        <directionalLight intensity={0.5} />
        <Suspense fallback={<Loader />}>
          <Model setItems={setItems} />
        </Suspense>
        <EffectComposer>
          <Noise opacity={0.03} />
        </EffectComposer>
        <CustomCamera />
      </Canvas>
      <Overlay overlayOpen={overlayOpen} setOverlayOpen={setOverlayOpen}>
        {overlayItems.current}
      </Overlay>
    </>
  )
}
