const GRID_UNIT = 4;

const gridUnit = (factor: number) => GRID_UNIT * factor;
export const gridUnitPx = (factor: number) => `${gridUnit(factor)}px`;

export type SizeScale = 'xx-small' | 'x-small' | 'small' | 'regular' | 'large' | 'x-large' | 'xx-large';
