import * as THREE from 'three';
import { useFrame, useLoader } from '@react-three/fiber';
import SunMap from '../../assets/sun.jpg';
import { TextureLoader } from 'three';
import { MutableRefObject, useEffect } from 'react';

export function Sun({
  sunRef,
}: {
  sunRef: MutableRefObject<THREE.Mesh | null>;
}) {
  const [sunMap] = useLoader(TextureLoader, [SunMap]);

  useEffect(() => {
    const pointLight = new THREE.PointLight(0xffffff, 5, 300);

    console.log('pointLight', pointLight);

    sunRef.current?.add(pointLight);
  }, [sunRef]);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    if (sunRef.current) {
      sunRef.current.rotation.y = elapsedTime / 6;
    }
  });

  return (
    <mesh ref={sunRef}>
      <sphereGeometry args={[0.6, 32, 32]} />
      <meshBasicMaterial map={sunMap} />
    </mesh>
  );
}
