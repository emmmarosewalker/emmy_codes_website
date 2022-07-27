import { Contact } from '../../common/Contact';
import { InstagramFeed } from '../../common/InstagramFeed';
import { Layout } from '../../common/Layout';
import { Hero } from './Hero';

export function Home() {
  return (
    <Layout>
      <Hero />
      <Contact />
      <InstagramFeed />
    </Layout>
  );
}
