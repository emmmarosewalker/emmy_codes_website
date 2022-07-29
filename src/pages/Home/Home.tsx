import { InstagramFeed } from '../../common/InstagramFeed';
import { AllBlogPosts } from '../Blog/AllBlogPosts';
import { Hero } from './Hero';

export function Home() {
  return (
    <>
      <Hero />
      <AllBlogPosts />
      <InstagramFeed />
    </>
  );
}
