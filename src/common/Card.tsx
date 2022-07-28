import styled from 'styled-components';
import { borderShadow } from '../design/shadow';
import { P } from '../design/typography';

type Props = {
  image: string;
  video: string;
  text: string;
  link: string;
};

const StyledLink = styled.a`
    ${borderShadow};
    video {
        opacity: 0;
    }
    &:hover {
        video {
            opacity: 1;
        }
    }
`;

export function Card({
  image, video, text, link
}: Props) {
  return (
    <StyledLink href={link}>
      <img src={image} alt={text} />
      <video src={video} />
      <P>{text}</P>
    </StyledLink>
  );
}
