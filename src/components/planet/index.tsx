import * as THREE from 'three';
import { useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { MutableRefObject, useEffect, useRef } from 'react';
import { Ring, RingProps } from './ring';

interface PlanetProps {
  map: string;
  radius: number;
  position: number;
  rotationSpeed: number;
  sunRef: MutableRefObject<THREE.Mesh | null>;
  ring?: RingProps;
}

export function Planet({
  map,
  radius,
  position,
  rotationSpeed,
  sunRef,
  ring,
}: PlanetProps) {
  const [planetMap] = useLoader(TextureLoader, [map]);
  const planetRef: MutableRefObject<THREE.Mesh | null> = useRef(null);
  const ringRef: MutableRefObject<THREE.Mesh | null> = useRef(null);
  const planetObj = new THREE.Object3D();

  useEffect(() => {
    if (planetRef.current) {
      planetObj.add(planetRef.current);

      if (sunRef.current) {
        sunRef.current.add(planetObj);
      }

      if (ringRef.current && ring) {
        planetRef.current.position.x = position;
        ringRef.current.position.x = ring?.position;
        ringRef.current.rotation.x = 0.7 * Math.PI;

        planetObj.add(ringRef.current);
      }
    }
  });

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    if (planetRef.current) {
      planetRef.current.rotation.y = elapsedTime / rotationSpeed;
      planetObj.rotation.y = elapsedTime / rotationSpeed;
    }
  });

  return (
    <mesh ref={planetRef} position={[0, 0, position]}>
      <sphereGeometry args={[radius, 32, 32]} />
      <meshPhongMaterial map={planetMap} />
      {ring && (
        <Ring
          map={ring.map}
          position={ring.position}
          radius={ring.radius}
          ringRef={ringRef}
        />
      )}
    </mesh>
  );
}
