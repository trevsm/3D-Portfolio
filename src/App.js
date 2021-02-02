import React, { useRef, Suspense, useEffect, useLayoutEffect } from 'react'

import { EffectComposer, Noise, Outline } from 'react-postprocessing'
import { Canvas } from 'react-three-fiber'
import Model from './Iso-poly'

import './App.css'

export default function App() {
  return (
    <Canvas
      pixelRatio={window.devicePixelRatio}
      camera={{ position: [0, 2, 4] }}
    >
      <ambientLight intensity={0.9} />
      <directionalLight intensity={0.5} />
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      <EffectComposer>
        <Noise opacity={0.03} />
      </EffectComposer>
    </Canvas>
  )
}
