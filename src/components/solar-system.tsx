import * as THREE from 'three';
import { OrbitControls, Stars } from '@react-three/drei';
import { Sun } from './sun';
import { MutableRefObject, useRef } from 'react';
import { Planet } from './planet';
import { planets } from './planet/planets';

export function SolarSystem() {
  const sunRef: MutableRefObject<THREE.Mesh | null> = useRef(null);

  return (
    <>
      <Stars
        radius={250}
        depth={60}
        count={20000}
        factor={7}
        saturation={0}
        fade
      />
      <ambientLight color='0x404040' intensity={0.2} />
      <Sun sunRef={sunRef} />
      {planets.map(({ map, position, radius, rotationSpeed, ring }) => {
        return (
          <Planet
            map={map}
            position={position}
            radius={radius}
            rotationSpeed={rotationSpeed}
            sunRef={sunRef}
            ring={ring}
          />
        );
      })}
      <OrbitControls
        enableZoom
        enablePan
        enableRotate
        zoomSpeed={0.6}
        panSpeed={0.5}
        rotateSpeed={0.4}
      />
    </>
  );
}
