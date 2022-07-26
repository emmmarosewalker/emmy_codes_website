import { MouseEventHandler } from 'react';
import styled from 'styled-components';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import cogsIcon from '../../assets/cogs-icon.png';
import colorPaletteIcon from '../../assets/color-palette-icon.png';
import githubIcon from '../../assets/github-icon.png';
import htmlIcon from '../../assets/html-icon.png';
import instagramIcon from '../../assets/instagram-icon.webp';
import phoneIcon from '../../assets/mobile-settings-icon.png';
import { breakpointSmall, breakpointXLarge } from '../../design/browser';
import { primary } from '../../design/colors';
import { gridUnitPx } from '../../design/measurements';
import { DisplayOnlyOnXLarge } from '../../design/Responsive';
import { H1, H2 } from '../../design/typography';

const HeroContainer = styled.div`
    position: relative;
    height: ${gridUnitPx(150)};
    margin: ${gridUnitPx(10)};
    padding: ${gridUnitPx(3)} ${gridUnitPx(8)};
    max-width: 1100px;

    border-radius: ${gridUnitPx(1)};
    background-color: ${primary};

    ${breakpointSmall(`
        padding: ${gridUnitPx(15)} ${gridUnitPx(15)};
    `)}

    ${breakpointXLarge(`
        margin: ${gridUnitPx(10)} auto;
        display: flex;
        align-items: center;
        padding: ${gridUnitPx(15)} ${gridUnitPx(30)};
    `)}
`;

const HtmlIcon = styled(motion.img)`
    position: absolute;
    top: ${gridUnitPx(30)};
    right: -${gridUnitPx(15)};

    width: ${gridUnitPx(50)};

    ${breakpointSmall(`
        width: ${gridUnitPx(70)};
        right: -${gridUnitPx(15)};
        top: ${gridUnitPx(5)};
    `)}

    ${breakpointXLarge(`
        width: ${gridUnitPx(80)};
        right: -${gridUnitPx(30)};
        top: ${gridUnitPx(5)};
    `)}
`;

const MobileIcon = styled(motion.img)`
    position: absolute;
    left: -${gridUnitPx(30)};
    bottom: ${gridUnitPx(30)};
    
    width: ${gridUnitPx(80)};
    transform: scaleX(-1);

    ${breakpointSmall(`
        width: ${gridUnitPx(100)};
        left: -${gridUnitPx(40)};
        bottom: ${gridUnitPx(5)};
    `)}

    ${breakpointXLarge(`
        width: ${gridUnitPx(110)};
        left: -${gridUnitPx(45)};
        bottom: -${gridUnitPx(25)};
    `)}
`;

const ColorPaletteIcon = styled(motion.img)`
    position: absolute;
    left: 40%;
    bottom: -${gridUnitPx(10)};
    width: ${gridUnitPx(120)};
`;

const CogsIcon = styled(motion.img)`
    position: absolute;
    top: 0;
    left: 0;
    width: ${gridUnitPx(45)};
`;

const SocialIcon = styled.img`
    width: ${gridUnitPx(20)};


    ${breakpointSmall(`
        width: ${gridUnitPx(30)};
    `)}
`;

const SocialIconsContainer = styled.div`
    position: absolute;
    display: flex;
    bottom: 0;
    right: 0;

    flex-direction: column;
    ${breakpointXLarge(`
        flex-direction: row;
        bottom: -${gridUnitPx(10)};
    `)}
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
      <SocialIconsContainer>
        <SocialIcon src={githubIcon} alt="3d github icon" />
        <SocialIcon src={instagramIcon} alt="3d instagram icon" />
      </SocialIconsContainer>
      <DisplayOnlyOnXLarge>
        <ColorPaletteIcon
          src={colorPaletteIcon}
          alt="3d paint color palette"
          style={{
            translateX: translateXSlow,
            translateY: translateYSlow,
          }}
        />
        <CogsIcon
          src={cogsIcon}
          alt="3d cogs"
          style={{
            translateX: translateXSlow,
            translateY: translateYSlow,
          }}
        />
      </DisplayOnlyOnXLarge>
      <div>
        <H1 color="white">Title</H1>
        <H2 color="white">Subtitle text goes here</H2>
      </div>
    </HeroContainer>
  );
}
