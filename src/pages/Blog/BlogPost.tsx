import { PrismicRichText, usePrismicDocumentByUID } from '@prismicio/react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Layout } from '../../common/Layout';
import { gridUnitPx } from '../../design/measurements';

const ContentContainer = styled.div`
  max-width: ${gridUnitPx(200)};
  margin: ${gridUnitPx(10)} auto auto auto;
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
`;

export function BlogPost() {
  const params = useParams();

  const [page] = usePrismicDocumentByUID('blog_post', params.slug || '');

  console.log('page', page);

  if (!page) return <p>page not found</p>;

  return (
    <Layout>
      <ContentContainer>
        <PrismicRichText field={page.data.blog_content} />
      </ContentContainer>
    </Layout>
  );
}
