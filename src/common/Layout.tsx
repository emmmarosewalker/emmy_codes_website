import React, { ReactNode } from 'react';
import { Nav } from './Nav';

type Props = {
  children: ReactNode;
};

export function Layout({ children }: Props) {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
}
