type BreakPoint = 'small' | 'medium' | 'large' | 'x-large';

const getBreakpointSize = (size: BreakPoint) => ({
  small: '600px',
  medium: '768px',
  large: '992px',
  'x-large': '1200px',
})[size];

export const breakpoint = (size: BreakPoint, styles: string) => `
  @media only screen and (min-width: ${getBreakpointSize(size)}) {
    ${styles}
  }
`;
