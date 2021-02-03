import React, { useRef, Suspense, useEffect, useLayoutEffect } from 'react'
import { Html, OrbitControls } from '@react-three/drei'
import { EffectComposer, Noise, Outline } from 'react-postprocessing'
import { Canvas } from 'react-three-fiber'
import Model from './Iso-poly'

// import './App.css'

function LoadOverlay() {
  return (
    <Html center>
      <div className="loader-2">Finishing up...</div>
    </Html>
  )
}

export default function App() {
  return (
    <Canvas
      pixelRatio={window.devicePixelRatio}
      camera={{ position: [0, 2, 4] }}
    >
      {/* <OrbitControls /> */}
      <ambientLight intensity={0.9} />
      <directionalLight intensity={0.5} />
      <Suspense fallback={<LoadOverlay />}>
        <Model />
      </Suspense>
      <EffectComposer>
        <Noise opacity={0.03} />
      </EffectComposer>
    </Canvas>
  )
}
