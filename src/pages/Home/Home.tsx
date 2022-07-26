import React from 'react';
import { Contact } from '../../common/Contact';
import { Layout } from '../../common/Layout';
import { Hero } from './Hero';

export function Home() {
  return (
    <Layout>
      <Hero />
      <Contact />
    </Layout>
  );
}
