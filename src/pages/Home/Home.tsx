import { useAllPrismicDocumentsByType } from '@prismicio/react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { InstagramFeed } from '../../common/InstagramFeed';
import { Layout } from '../../common/Layout';
import { Tutorials } from '../../common/Tutorials';
import { gridUnitPx } from '../../design/measurements';
import { H2 } from '../../design/typography';
import { Hero } from './Hero';

const BlogContainer = styled.div`
  max-width: ${gridUnitPx(275)};
  display: flex;
  margin: auto;
`;

const BlogCard = styled.div`
  max-width: 20%;
  img {
    max-width: 100%;
  }
`;

export function Home() {
  const [posts, { state }] = useAllPrismicDocumentsByType('blog_post');
  console.log('posts', posts);
  return (
    <Layout>
      <Hero />
      <H2 align="center" weight="semibold" size="x-large">Latest Blog Posts</H2>
      <BlogContainer>
        {state === 'loading' ? <p>loading...</p> : posts?.map((post) => (
          <Link to={`/blog/${post.uid}`}>
            <BlogCard>
              <H2>{post.uid}</H2>
              <img src={post.data.hero_image.url} alt={post.data.hero_image.alt} />
            </BlogCard>
          </Link>
        ))}
      </BlogContainer>
      <Tutorials />
      <InstagramFeed />
    </Layout>
  );
}
