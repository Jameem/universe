import styled from 'styled-components';
import { Footer } from './footer';

const TopSectionContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 20.7%;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2%;
`;

const Title = styled.h1`
  margin: 0;
  color: #6b13cf;
  font-weight: 800;
  font-size: 80px;
`;

const Slogan = styled.div`
  margin: 0;
  color: #fff;
  font-size: 40px;
  font-weight: 700;
  margin-top: 20px;

  @media only screen and (max-width: 1000px) {
    font-size: 30px;
  }

  @media only screen and (max-width: 600px) {
    font-size: 25px;
  }
`;

const Paragraph = styled.p`
  margin: 0;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  margin-top: 1em;
  line-height: 1.5;
  max-width: 30%;
  text-align: center;

  @media only screen and (max-width: 1600px) {
    max-width: 50%;
  }

  @media only screen and (max-width: 1100px) {
    max-width: 60%;
  }

  @media only screen and (max-width: 700px) {
    max-width: 70%;
  }
`;

export function Text() {
  return (
    <TopSectionContainer>
      <Title>UNIVERSE</Title>
      <Slogan>Where Dreams Spark Across the Cosmos</Slogan>
      <Paragraph>
        In the vast expanse of time and space, galaxies twirl in cosmic dance,
        weaving tales of celestial grace. Stars whisper secrets in the silence
        of infinity, while the universe breathes life into the poetry of
        existence.
      </Paragraph>
      <Footer />
    </TopSectionContainer>
  );
}
