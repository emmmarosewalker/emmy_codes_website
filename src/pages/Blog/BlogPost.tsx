import { PrismicRichText, usePrismicDocumentByUID } from '@prismicio/react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { gridUnitPx } from '../../design/measurements';
import { boxshadowSmall } from '../../design/shadow';
import { H1, P } from '../../design/typography';

const ContentContainer = styled.div`
  line-height: 1.5;
  img {
    max-width: 90%;
    margin: ${gridUnitPx(3)} auto;
  }
  .block-img {
    display: flex;
  }
  li {
    line-height: 1.5;
    margin-left: ${gridUnitPx(3)};
  }
  ol li {
    list-style: decimal inside;
  }
  ul li {
    list-style: disc inside;
  }
  ol, ul {
    margin-top: ${gridUnitPx(1)};
    margin-bottom: ${gridUnitPx(1)};
  }

  pre {
    background-color: black;
    color: white;
    padding: ${gridUnitPx(4)};
    border-radius: ${gridUnitPx(1)};
    ${boxshadowSmall};
    margin-top: ${gridUnitPx(4)};
    margin-bottom: ${gridUnitPx(4)};
    font-size: 0.9rem;
    overflow-x: scroll;
  }

  h1 {
    font-size: ${gridUnitPx(10)};
    font-weight: 600;
    margin-bottom: ${gridUnitPx(8)};
    line-height: 1;
  }

  h2 {
    font-size: ${gridUnitPx(8)};
    font-weight: 500;
    margin: ${gridUnitPx(2)} 0;
  }

  h3 {
    font-size: ${gridUnitPx(6)};
    font-weight: 500;
    margin: ${gridUnitPx(2)} 0;
  }

  h4 {
    font-size: ${gridUnitPx(5)};
    font-weight: 800;
    margin: ${gridUnitPx(2)} 0;
  }

  h5 {
    font-size: ${gridUnitPx(5)};
    font-weight: 600;
    text-transform: uppercase;
    margin: ${gridUnitPx(2)} 0;
  }

  h6 {
    font-size: ${gridUnitPx(4)};
    font-weight: 600;
    text-transform: uppercase;
    margin: ${gridUnitPx(2)} 0;
  }

  a {
    text-decoration: underline;
  }

  strong {
    font-weight: 600;
  }

  em {
    font-style: italic;
  }

  p {
    margin-bottom: ${gridUnitPx(2)};
  }
`;

const Page = styled.div`
  max-width: ${gridUnitPx(275)};
  margin: 0 auto ${gridUnitPx(10)} auto;
  border-radius: ${gridUnitPx(2)};
  padding: ${gridUnitPx(15)} ${gridUnitPx(20)};
  ${boxshadowSmall};
`;

export function BlogPost() {
  const params = useParams();

  const [page, { state }] = usePrismicDocumentByUID('blog_post', params.slug || '');

  if (state === 'loading') {
    return <Page><P>Loading...</P></Page>;
  }

  if (!page) return <Page><P>Page not found</P></Page>;

  console.log(page);
  return (
    <Page>
      <ContentContainer>
        <H1>{page.data.title}</H1>
        <P size="small">
          Published:
          {' '}
          {page.data.date}
          {' '}
          by Emma W
        </P>
        <img src={page.data.hero_image.url} alt={page.data.hero_image.alt} />
        <PrismicRichText field={page.data.blog_content} />
      </ContentContainer>
    </Page>
  );
}
