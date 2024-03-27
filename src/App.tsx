import { Canvas } from '@react-three/fiber';
import styled from 'styled-components';
import { SolarSystem } from './components/solar-system';
import { Text } from './components/text';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <Wrapper>
      <Text />
      <Canvas>
        <SolarSystem />
      </Canvas>
    </Wrapper>
  );
}

export default App;
