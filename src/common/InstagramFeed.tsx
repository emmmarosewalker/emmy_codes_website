import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { gridUnitPx } from '../design/measurements';
import { boxshadowSmall } from '../design/shadow';
import { P } from '../design/typography';

type InstagramResponse = {
  caption: string;
  id: string;
  media_type: 'CAROUSEL_ALBUM' | 'VIDEO' | 'IMAGE';
  media_url: string;
  permalink: string;
};

const MediaContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  max-width: ${gridUnitPx(300)};
  margin: auto;
`;

const MediaItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-radius: ${gridUnitPx(2)};
  ${boxshadowSmall};
  padding: ${gridUnitPx(8)} ${gridUnitPx(2)};
  margin: ${gridUnitPx(3)};
  img, video {
    width: ${gridUnitPx(80)};
    height: ${gridUnitPx(80)};
    border-radius: ${gridUnitPx(2)};
    object-fit: cover;
  }
  p {
    max-width: 80%;
  }
`;

export function InstagramFeed() {
  const [data, setData] = useState<InstagramResponse[]>([]);
  const url = `https://graph.instagram.com/me/media?fields=media_count,media_type,permalink,media_url,caption&&access_token=${process.env.REACT_APP_INSTAGRAM_API_KEY}`;

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
    <MediaContainer>
      {data.map((item) => (
        <MediaItem key={item.id}>
          {item.media_type !== 'VIDEO' ? <img src={item.media_url} alt={item.caption} /> : <video src={item.media_url} />}
          <P>{item.caption}</P>
        </MediaItem>
      ))}
    </MediaContainer>
  );
}
