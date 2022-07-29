import { useAllPrismicDocumentsByType } from '@prismicio/react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { gridUnitPx } from '../../design/measurements';
import { borderShadow } from '../../design/shadow';
import Spacing from '../../design/Spacing';
import { H2 } from '../../design/typography';

const BlogContainer = styled.div`
    max-width: ${gridUnitPx(275)};
    display: flex;
    margin: auto;
    justify-content: flex-start;
`;

const BlogCard = styled.div`
  max-height: 200px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
    img {
      max-width: 100%;
      object-fit: contain;
    }
`;

const StyledLink = styled(Link)`
    display: flex;
    flex-direction: column;
    max-width: 30%;
    ${borderShadow};
    border-radius: ${gridUnitPx(2)};
    padding: ${gridUnitPx(4)};
    margin: ${gridUnitPx(4)};
`;

export function AllBlogPosts() {
  const [posts, { state }] = useAllPrismicDocumentsByType('blog_post');
  return (
    <>
      <Spacing bottom="x-large">
        <H2 align="center" weight="semibold" size="x-large">Latest Blog Posts</H2>
      </Spacing>
      <BlogContainer>
        {state === 'loading' ? <p>loading...</p> : posts?.map((post) => (
          <StyledLink to={`/blog/${post.uid}`} key={post.id}>
            <H2 size="regular">{post.data.title}</H2>
            <Spacing bottom="medium" top="small">
              <hr />
            </Spacing>
            <BlogCard>
              <img src={post.data.hero_image.url} alt={post.data.hero_image.alt} />
            </BlogCard>
          </StyledLink>
        ))}
      </BlogContainer>
    </>
  );
}

export function BlogPage() {
  return (
    <AllBlogPosts />
  );
}
