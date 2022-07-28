import { Contact } from '../../common/Contact';
import { InstagramFeed } from '../../common/InstagramFeed';
import { Layout } from '../../common/Layout';
import { Tutorials } from '../../common/Tutorials';
import { Hero } from './Hero';

export function Home() {
  return (
    <Layout>
      <Hero />
      <Contact />
      <Tutorials />
      <InstagramFeed />
    </Layout>
  );
}
