import React, { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const snoise = /*glsl*/ `
// Simplex 2D noise
vec3 permute(vec3 x) { return mod(((x*34.0)+1.0)*x, 289.0); }

float snoise(vec2 v){
  const vec4 C = vec4(0.211324865405187, 0.366025403784439,
           -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod(i, 289.0);
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
  + i.x + vec3(0.0, i1.x, 1.0 ));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy),
    dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}
`;

export function Strings(props) {
  const ref = useRef();

  const _VS = /*glsl*/ `
  uniform float time;
  varying vec2 vUv;
  varying vec3 Position;
  varying vec3 Normal;
  varying float frc;

  ${snoise}

  void main(){
    vUv = uv;
    Normal = normalize(normalMatrix * normal);
    Position = vec3(modelViewMatrix * vec4(position, 1.0));

    vec3 transformed = position.xyz;

    transformed.y += snoise(vec2(-vUv.x * 1.0 + time/3.0, 0.0))/40.0;
    transformed.y += snoise(vec2(vUv.x * 1.0 - time/3.0, 0.0))/40.0;

    gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
  }
  `;

  const _FS = /*glsl*/ `
  varying vec3 Normal;
  uniform float time;
  varying vec3 Position;
  varying vec2 vUv;
  uniform vec2 resolution;

  void main() {

    gl_FragColor = vec4(vec3(0.05,0.0,2.0),0.9);
  }
  `;

  const uniforms = useMemo(
    () => ({
      color: { value: new THREE.Color("blue") },
      time: { value: 0 },
    }),
    []
  );

  useFrame(({ clock }) => {
    uniforms.time.value = clock.elapsedTime * props.amp;
  });

  return (
    <mesh
      ref={ref}
      rotation={[0, -0.8 - Math.PI / 2, 0]}
      position={[-1.1, 0.075, 0.02]}
    >
      <planeBufferGeometry attach="geometry" args={[0.2, 0.005, 20, 20]} />
      <shaderMaterial
        attach="material"
        args={{
          uniforms: uniforms,
          vertexShader: _VS,
          fragmentShader: _FS,
        }}
        side={THREE.DoubleSide}
        transparent
      />
    </mesh>
  );
}
