import mercuryMap from '../../assets/mercury.jpg';
import saturnMap from '../../assets/saturn.jpg';
import saturnRingMap from '../../assets/saturn-ring.png';
import venusMap from '../../assets/venus.jpg';
import earthMap from '../../assets/earth.jpg';
import marsMap from '../../assets/mars.jpg';
import jupiterMap from '../../assets/jupiter.jpg';
import uranusMap from '../../assets/uranus.jpg';
import neptuneMap from '../../assets/neptune.jpg';

export const planets = [
  {
    map: mercuryMap,
    position: 1,
    radius: 0.1,
    rotationSpeed: 1,
  },
  {
    map: venusMap,
    position: 1.5,
    radius: 0.15,
    rotationSpeed: 2,
  },
  {
    map: earthMap,
    position: 2,
    radius: 0.2,
    rotationSpeed: 3,
  },
  {
    map: marsMap,
    position: 2.7,
    radius: 0.12,
    rotationSpeed: 4,
  },
  {
    map: jupiterMap,
    position: 5,
    radius: 0.4,
    rotationSpeed: 6,
  },
  {
    map: saturnMap,
    position: 8,
    radius: 0.3,
    rotationSpeed: 7,
    ring: { map: saturnRingMap, position: 8, radius: 0.2 },
  },
  {
    map: uranusMap,
    position: 14,
    radius: 0.18,
    rotationSpeed: 8,
  },
  {
    map: neptuneMap,
    position: 20,
    radius: 0.15,
    rotationSpeed: 9,
  },
];
