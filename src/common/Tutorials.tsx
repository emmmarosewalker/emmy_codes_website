import styled from 'styled-components';
import { Card } from './Card';

import testImage from '../assets/images/test-image.webp';
import testVideo from '../assets/images/test-video.mp4';
import { breakpointLarge, breakpointSmall } from '../design/browser';
import { gridUnitPx } from '../design/measurements';
import { H2 } from '../design/typography';

const Container = styled.div`
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const CardsContainer = styled.div`
  ${breakpointSmall(`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: ${gridUnitPx(5)};
  `)}
  ${breakpointLarge(`
    grid-template-columns: 1fr 1fr 1fr;
    gap: ${gridUnitPx(5)};
  `)}
`;

export function Tutorials() {
  return (
    <Container>
      <H2 align="center" weight="semibold" size="x-large">Tutorials</H2>
      <CardsContainer>
        <Card image={testImage} video={testVideo} text="Test" link="#" />
        <Card image={testImage} video={testVideo} text="Test" link="#" />
        <Card image={testImage} video={testVideo} text="Test" link="#" />
        <Card image={testImage} video={testVideo} text="Test" link="#" />
        <Card image={testImage} video={testVideo} text="Test" link="#" />
        <Card image={testImage} video={testVideo} text="Test" link="#" />
      </CardsContainer>
    </Container>
  );
}
