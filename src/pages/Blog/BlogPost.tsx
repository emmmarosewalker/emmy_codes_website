import { PrismicRichText, usePrismicDocumentByUID } from '@prismicio/react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Layout } from '../../common/Layout';
import { secondary2, tertiary } from '../../design/colors';
import { gridUnitPx } from '../../design/measurements';
import { boxshadowSmall } from '../../design/shadow';

const ContentContainer = styled.div`
  img {
    max-width: 90%;
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
  }

  h1 {
    font-size: ${gridUnitPx(10)};
    font-weight: 600;
    margin-bottom: ${gridUnitPx(3)};
  }

  h2 {
    font-size: ${gridUnitPx(8)};
    font-weight: 500;
    margin-bottom: ${gridUnitPx(2)};
  }

  h3 {
    font-size: ${gridUnitPx(6)};
    font-weight: 500;
    margin-bottom: ${gridUnitPx(2)};
  }

  h4 {
    font-size: ${gridUnitPx(5)};
    font-weight: 800;
    margin-bottom: ${gridUnitPx(2)};
  }

  h5 {
    font-size: ${gridUnitPx(5)};
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: ${gridUnitPx(2)};
    color ${tertiary};
  }

  h6 {
    font-size: ${gridUnitPx(4)};
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: ${gridUnitPx(2)};
    color ${secondary2};
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
    line-height: 1.2;
  }
`;

const Page = styled.div`
  max-width: ${gridUnitPx(180)};
  margin: ${gridUnitPx(10)} auto ${gridUnitPx(10)} auto;
  border-radius: ${gridUnitPx(2)};
  padding: ${gridUnitPx(6)};
  ${boxshadowSmall};
`;

export function BlogPost() {
  const params = useParams();

  const [page] = usePrismicDocumentByUID('blog_post', params.slug || '');

  if (!page) return <p>page not found</p>;

  return (
    <Layout>
      <Page>
        <ContentContainer>
          <PrismicRichText field={page.data.blog_content} />
        </ContentContainer>
      </Page>
    </Layout>
  );
}
