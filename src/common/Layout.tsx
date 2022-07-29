import { ReactNode } from 'react';
import { gridUnitPx } from '../design/measurements';
import { Nav } from './Nav';

type Props = {
  children: ReactNode;
};

export function Layout({ children }: Props) {
  return (
    <>
      <Nav />
      <div style={{
        maxWidth: '100%', overflow: 'hidden', paddingTop: gridUnitPx(20), paddingBottom: gridUnitPx(5)
      }}
      >
        {children}
      </div>
    </>
  );
}
