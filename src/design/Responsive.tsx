import { ReactNode } from 'react';
import styled from 'styled-components';
import { breakpointXLarge } from './browser';

const StyledDisplayOnXLarge = styled.div`
    display: none;

    ${breakpointXLarge(`
        display: initial;
    `)}
`;

export function DisplayOnlyOnXLarge({ children }: { children: ReactNode }) {
  return <StyledDisplayOnXLarge>{children}</StyledDisplayOnXLarge>;
}
