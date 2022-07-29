import styled from 'styled-components';
import { Card } from './Card';

import testImage from '../assets/images/test-image.webp';
import testVideo from '../assets/images/test-video.mp4';
import { breakpointLarge, breakpointSmall, breakpointXLarge } from '../design/browser';
import { gridUnitPx } from '../design/measurements';
import Spacing from '../design/Spacing';
import { H2 } from '../design/typography';

const Container = styled.div`
  margin: ${gridUnitPx(10)} auto ${gridUnitPx(10)} auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ${breakpointLarge(`
    margin: ${gridUnitPx(20)} auto ${gridUnitPx(20)} auto;
  `)}

  ${breakpointLarge(`
    max-width: ${gridUnitPx(275)};
  `)}
`;

const CardsContainer = styled.div`
  ${breakpointSmall(`
    display: grid;
    grid-template-columns: 1fr 1fr;
  `)}
  ${breakpointLarge(`
    grid-template-columns: 1fr 1fr 1fr;
    gap: ${gridUnitPx(5)};
  `)}
  ${breakpointXLarge(`
    gap: ${gridUnitPx(10)};
    max-width: ${gridUnitPx(275)};
  `)}
`;

export function Tutorials() {
  return (
    <Container>
      <Spacing bottom="x-large">
        <H2 align="center" weight="semibold" size="x-large">Tutorials</H2>
      </Spacing>
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
