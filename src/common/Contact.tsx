import {
  motion,
  useScroll,
  useTransform
} from 'framer-motion';
import { useRef } from 'react';
import styled from 'styled-components';
import hand from '../assets/images/hand.png';
import paperPlane from '../assets/images/paper-plane.png';
import { breakpointXLarge } from '../design/browser';
import { secondary } from '../design/colors';
import { gridUnitPx } from '../design/measurements';
import { H2, P } from '../design/typography';

const Container = styled.div`
  background-color: ${secondary};
  height: ${gridUnitPx(120)};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
`;

const HandContainer = styled(motion.div)`
  position: absolute;
  bottom: 0;
  width: ${gridUnitPx(110)};
  bottom: 0;
  left: 0;
  ${breakpointXLarge(`
    width: ${gridUnitPx(150)};
  `)}
`;

const HandInnerContainer = styled.div`
  position: relative;
  height: ${gridUnitPx(80)};
  ${breakpointXLarge(`
    height: ${gridUnitPx(100)};
  `)}
`;

const Hand = styled.img`
  transform: scaleX(-1);
  width: 100%;
  position: absolute;
  bottom: -${gridUnitPx(10)};
  left: -${gridUnitPx(10)};
`;

const PaperPlane = styled(motion.img)`
  position: absolute;
  top: -${gridUnitPx(20)};
  width: ${gridUnitPx(50)};
  ${breakpointXLarge(`
    width: ${gridUnitPx(70)};
  `)}
`;

export function Contact() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const translateX = useTransform(scrollYProgress, [1, 0], [-100, 150]);
  const translateY = useTransform(scrollYProgress, [1, 0], [100, -30]);
  const translateHandX = useTransform(scrollYProgress, [1, 0], [-200, 100]);
  const translateHandY = useTransform(scrollYProgress, [1, 0], [-40, 0]);

  return (
    <Container ref={ref}>
      <H2 weight="semibold" size="x-large">Contact</H2>
      <P size="large">Contact copy goes here</P>
      <PaperPlane src={paperPlane} style={{ translateX, translateY }} alt="3d paper plane" />
      <HandContainer style={{ translateX: translateHandX, translateY: translateHandY }}>
        <HandInnerContainer>
          <Hand src={hand} alt="3d hand" />
        </HandInnerContainer>
      </HandContainer>
    </Container>
  );
}
