import { Contact } from '../../common/Contact';
import { InstagramFeed } from '../../common/InstagramFeed';
import { Layout } from '../../common/Layout';
import { Tutorials } from '../../common/Tutorials';
import { Hero } from './Hero';

/* eslint-disable import/no-webpack-loader-syntax */
import Content from '!@mdx-js/loader!../../content/blog/hello.mdx';

export function Home() {
  return (
    <Layout>
      <Content />
      <Hero />
      <Contact />
      <Tutorials />
      <InstagramFeed />
    </Layout>
  );
}
