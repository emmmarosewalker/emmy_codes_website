import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { breakpointSmall } from '../design/browser';
import { gridUnitPx } from '../design/measurements';
import { H2 } from '../design/typography';

type InstagramResponse = {
  caption: string;
  id: string;
  media_type: 'CAROUSEL_ALBUM' | 'VIDEO' | 'IMAGE';
  media_url: string;
  permalink: string;
};

const MediaContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: ${gridUnitPx(300)};
  margin: auto;

  ${breakpointSmall(`
      flex-direction: row;
      flex-wrap: wrap;
  `)}

`;

const MediaItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${gridUnitPx(2)};

  img, video {
    border-radius: ${gridUnitPx(2)};
    object-fit: cover;
    max-width: 80%;
    margin-bottom: ${gridUnitPx(6)};
  }

  ${breakpointSmall(`
    width: ${gridUnitPx(80)};
      img, video {
        width: ${gridUnitPx(68)};
        height: ${gridUnitPx(68)};
      }
  `)}
`;

function InstagramPost({ item }: { item: InstagramResponse }) {
  const ref = useRef<HTMLVideoElement>(null);
  const handlePlay = () => {
    ref.current?.play();
  };

  const handleStop = () => {
    ref.current?.pause();
  };

  return (
    <a href={item.permalink} target="_blank" rel="noreferrer">
      <MediaItem>
        {item.media_type !== 'VIDEO' ? <img src={item.media_url} alt={item.caption} /> : (
          <video
            ref={ref}
            loop
            muted
            src={item.media_url}
            onMouseOver={handlePlay}
            onFocus={handlePlay}
            onMouseOut={handleStop}
            onBlur={handleStop}
          />
        )}
      </MediaItem>
    </a>
  );
}

export function InstagramFeed() {
  const [data, setData] = useState<InstagramResponse[]>([]);
  const url = 'https://api.emmycodes.com/posts';

  useEffect(() => {
    const fetchData = async () => {
      fetch(url)
        .then((response) => response.json())
        .then((result) => setData(result.data))
        .catch((error) => console.error('error', error));
    };

    fetchData();
  }, [url]);

  return (
    <div>
      <H2 align="center" weight="semibold" size="x-large">Latest from instagram</H2>
      <MediaContainer>
        {data.slice(0, 6).map((item) => (
          <InstagramPost item={item} key={item.id} />
        ))}
      </MediaContainer>
    </div>
  );
}
