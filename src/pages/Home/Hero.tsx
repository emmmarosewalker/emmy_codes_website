import { motion, useMotionValue, useTransform } from 'framer-motion';
import { MouseEventHandler } from 'react';
import styled from 'styled-components';
import atom from '../../assets/images/atom.png';
import cloudIcon from '../../assets/images/cloud-icon.webp';
import htmlIcon from '../../assets/images/html-icon.png';
import laptopIcon from '../../assets/images/laptop.png';
import phoneIcon from '../../assets/images/mobile-settings-icon.png';
import { breakpointSmall, breakpointXLarge } from '../../design/browser';
import { primary } from '../../design/colors';
import { gridUnitPx } from '../../design/measurements';
import { DisplayOnlyOnXLarge } from '../../design/Responsive';
import Spacing from '../../design/Spacing';
import { H1, H2 } from '../../design/typography';

const HeroContainer = styled.div`
    position: relative;
    height: ${gridUnitPx(150)};
    margin: 0 ${gridUnitPx(10)} ${gridUnitPx(10)} ${gridUnitPx(10)} ${gridUnitPx(10)};
    padding: ${gridUnitPx(3)} ${gridUnitPx(8)};
    max-width: ${gridUnitPx(275)};

    border-radius: ${gridUnitPx(1)};
    background-color: ${primary};

    ${breakpointSmall(`
        padding: ${gridUnitPx(15)} ${gridUnitPx(15)};
    `)}

    ${breakpointXLarge(`
        margin: 0 auto ${gridUnitPx(28)} auto;
        display: flex;
        align-items: center;
        padding: ${gridUnitPx(15)} ${gridUnitPx(30)};
    `)}
`;

const HtmlIcon = styled(motion.img)`
    position: absolute;
    top: ${gridUnitPx(30)};
    right: -${gridUnitPx(10)};

    width: ${gridUnitPx(50)};

    ${breakpointSmall(`
        width: ${gridUnitPx(70)};
        right: -${gridUnitPx(15)};
        top: ${gridUnitPx(5)};
    `)}

    ${breakpointXLarge(`
        width: ${gridUnitPx(60)};
        right: -${gridUnitPx(20)};
        top: ${gridUnitPx(5)};
    `)}
`;

const MobileIcon = styled(motion.img)`
    position: absolute;
    left: -${gridUnitPx(20)};
    bottom: ${gridUnitPx(30)};
    
    width: ${gridUnitPx(60)};

    ${breakpointSmall(`
        width: ${gridUnitPx(70)};
        left: -${gridUnitPx(40)};
        bottom: ${gridUnitPx(5)};
    `)}

    ${breakpointXLarge(`
        left: -${gridUnitPx(40)};
        bottom: -${gridUnitPx(20)};
    `)}
`;

const LaptopIcon = styled(motion.img)`
    position: absolute;
    left: 50%;
    width: ${gridUnitPx(70)};
`;

const CloudIcon = styled(motion.img)`
    position: absolute;
    top: 0;
    left: 0;
    width: ${gridUnitPx(45)};
`;

const AtomIcon = styled(motion.img)`
  width: ${gridUnitPx(40)};
  position: absolute;
  bottom: -${gridUnitPx(12)};
  right: -${gridUnitPx(12)};
`;

const CONTAINER_WIDTH = 1100;
const CONTAINER_HEIGHT = 600;
const SPEED_UNIT = 8;
const SPEED_SLOW = 1 * SPEED_UNIT;
const SPEED_REGULAR = 2 * SPEED_UNIT;
const SPEED_FAST = 3 * SPEED_UNIT;

export function Hero() {
  const x = useMotionValue(550);
  const y = useMotionValue(300);

  const translateX = useTransform(x, [0, CONTAINER_WIDTH], [-SPEED_REGULAR, SPEED_REGULAR]);
  const translateY = useTransform(y, [0, CONTAINER_HEIGHT], [-SPEED_REGULAR, SPEED_REGULAR]);

  const translateXSlow = useTransform(x, [0, CONTAINER_WIDTH], [-SPEED_SLOW, SPEED_SLOW]);
  const translateYSlow = useTransform(y, [0, CONTAINER_HEIGHT], [-SPEED_SLOW, SPEED_SLOW]);

  const translateXFast = useTransform(x, [0, CONTAINER_WIDTH], [-SPEED_FAST, SPEED_FAST]);
  const translateYFast = useTransform(y, [0, CONTAINER_HEIGHT], [-SPEED_FAST, SPEED_FAST]);

  const handleMouse: MouseEventHandler<HTMLDivElement> = (event) => {
    x.set(event.pageX);
    y.set(event.pageY);
  };

  return (
    <HeroContainer onMouseMove={handleMouse}>
      <HtmlIcon
        src={htmlIcon}
        alt="3d html icon"
        style={{
          translateX,
          translateY,
        }}
      />
      <MobileIcon
        src={phoneIcon}
        alt="3d phone with settings cog"
        style={{
          translateX: translateXFast,
          translateY: translateYFast,
        }}
      />
      <AtomIcon
        src={atom}
        alt="3d atom icon"
        style={{
          translateX: translateXSlow,
          translateY: translateYSlow,
        }}
      />
      <DisplayOnlyOnXLarge>
        <LaptopIcon
          src={laptopIcon}
          alt="3d paint color palette"
          style={{
            translateX: translateXSlow,
            translateY: translateYSlow,
          }}
        />
        <CloudIcon
          src={cloudIcon}
          alt="3d cogs"
          style={{
            translateX: translateXSlow,
            translateY: translateYSlow,
          }}
        />
      </DisplayOnlyOnXLarge>
      <div>
        <H1>Welcome to EmmyCodes!</H1>
        <Spacing left="small" top="small">
          <div style={{ maxWidth: '60%' }}>
            <H2>
              I am a software developer aiming to inspire others to grow or
              start their dev career
            </H2>
          </div>
        </Spacing>
      </div>
    </HeroContainer>
  );
}
