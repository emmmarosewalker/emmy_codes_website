import { Contact } from '../../common/Contact';
import { InstagramFeed } from '../../common/InstagramFeed';
import { Layout } from '../../common/Layout';
import { Hero } from './Hero';

export function Home() {
  return (
    <Layout>
      <Hero />
      <div style={{ height: 600 }} />
      <Contact />
      <div style={{ height: 600 }} />
      <InstagramFeed />
    </Layout>
  );
}
