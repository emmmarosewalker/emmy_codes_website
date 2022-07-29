import styled from 'styled-components';
import { breakpointXLarge } from '../design/browser';
import { gridUnitPx } from '../design/measurements';

import { borderShadow } from '../design/shadow';
import { P } from '../design/typography';

type Props = {
  image: string;
  video: string;
  text: string;
  link: string;
};

const Container = styled.div`
  position: relative;
  width: 300px;
  height: 200px;
  video, img {
    ${borderShadow};
    border-radius: 8px;
    position: absolute;
    top: 0;
    left: 0;
    width: 101%;
    height: 101%;
    object-fit: cover;
    transition: opacity 0.2s ease-in-out;
  }
  video {
      opacity: 0;
  }
  img {
    opacity: 1;
  }
  &:hover {
      video {
          opacity: 1;
      } 
      img {
        opacity: 0;
      }
  }

  ${breakpointXLarge(`
    width: ${gridUnitPx(80)};
    height: ${gridUnitPx(50)};
  `)}
`;

const StyledLink = styled.a`
   
`;

export function Card({
  image, video, text, link
}: Props) {
  return (
    <StyledLink href={link}>
      <Container>
        <img src={image} alt={text} />
        <video autoPlay muted loop src={video} />
        <P>{text}</P>
      </Container>
    </StyledLink>
  );
}
