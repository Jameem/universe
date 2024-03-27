import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { MutableRefObject } from 'react';

export interface RingProps {
  map: string;
  radius: number;
  position: number;
  ringRef?: MutableRefObject<THREE.Mesh | null>;
}

export function Ring({ map, radius, position, ringRef }: RingProps) {
  const [ringMap] = useLoader(TextureLoader, [map]);

  return (
    <mesh ref={ringRef} position={[0, 0, position]}>
      <ringGeometry args={[radius, 0.4, 32]} />
      <meshBasicMaterial map={ringMap} side={2} />
    </mesh>
  );
}
