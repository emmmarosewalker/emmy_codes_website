type BreakPoint = 'small' | 'medium' | 'large' | 'x-large';

const getBreakpointSize = (size: BreakPoint) => ({
  small: '600px',
  medium: '768px',
  large: '992px',
  'x-large': '1200px',
})[size];

const breakpoint = (size: BreakPoint, styles: string) => `
  @media only screen and (min-width: ${getBreakpointSize(size)}) {
    ${styles}
  }
`;

export const breakpointSmall = (styles: string) => breakpoint('small', styles);
export const breakpointMedium = (styles: string) => breakpoint('medium', styles);
export const breakpointLarge = (styles: string) => breakpoint('large', styles);
export const breakpointXLarge = (styles: string) => breakpoint('x-large', styles);
