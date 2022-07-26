import { ReactNode } from 'react';
import { Nav } from './Nav';

type Props = {
  children: ReactNode;
};

export function Layout({ children }: Props) {
  return (
    <>
      <Nav />
      <div style={{ maxWidth: '100%', overflow: 'hidden' }}>
        {children}
      </div>
    </>
  );
}
