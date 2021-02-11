import React, { Suspense, useRef, useState } from 'react'
// import { EffectComposer, Noise } from 'react-postprocessing'
import { Canvas } from 'react-three-fiber'
import { Loader } from './components/Loader'
import { CustomCamera } from './components/Camera'
import { Overlay } from './components/Overlay'
import Models from './Models'

import './App.css'

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
        <ambientLight intensity={0.9} />
        <directionalLight intensity={0.5} />
        <Suspense fallback={<Loader />}>
          <Models setItems={setItems} />
        </Suspense>
        {/* <EffectComposer>
          <Noise opacity={0.01} />
        </EffectComposer> */}
        <CustomCamera />
      </Canvas>
      <Overlay overlayOpen={overlayOpen} setOverlayOpen={setOverlayOpen}>
        {overlayItems.current}
      </Overlay>
    </>
  )
}
