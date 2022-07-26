import React from 'react';
import styled from 'styled-components';
import { primary } from '../../design/colors';
import { gridUnitPx } from '../../design/measurements';
import { H1, H2 } from '../../design/typography';
import htmlIcon from '../../assets/html-icon.png';
import phoneIcon from '../../assets/mobile-settings-icon.png';
import githubIcon from '../../assets/github-icon.png';
import instagramIcon from '../../assets/instagram-icon.webp';

const HeroContainer = styled.div`
    position: relative;
    height: ${gridUnitPx(150)};
    margin: ${gridUnitPx(10)};
    padding: ${gridUnitPx(3)} ${gridUnitPx(8)};

    border-radius: ${gridUnitPx(1)};
    background-color: ${primary};
`;

const HtmlIcon = styled.img`
    position: absolute;
    top: ${gridUnitPx(30)};
    right: -${gridUnitPx(5)};

    width: ${gridUnitPx(50)};
`;

const MobileIcon = styled.img`
    position: absolute;
    left: -${gridUnitPx(30)};
    bottom: ${gridUnitPx(30)};
    
    width: ${gridUnitPx(80)};
    transform: scaleX(-1);
`;

const SocialIcon = styled.img`
    width: ${gridUnitPx(20)};
`;

const SocialIconsContainer = styled.div`
    position: absolute;
    display: flex;
    bottom: 0;
    right: 0;

    flex-direction: column;
`;

export function Hero() {
  return (
    <HeroContainer>
      <HtmlIcon src={htmlIcon} alt="3d html icon" />
      <MobileIcon src={phoneIcon} alt="3d phone with settings cog" />
      <SocialIconsContainer>
        <SocialIcon src={githubIcon} alt="3d github icon" />
        <SocialIcon src={instagramIcon} alt="3d instagram icon" />
      </SocialIconsContainer>
      <H1 color="white">Title</H1>
      <H2 color="white">Subtitle text goes here</H2>
    </HeroContainer>
  );
}
