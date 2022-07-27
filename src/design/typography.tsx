import styled from 'styled-components';
import {
  primary, secondary, tertiary, white
} from './colors';
import { gridUnitPx, SizeScale } from './measurements';

type TextType = {
  color: 'primary' | 'secondary' | 'white';
  weight: 'light' | 'regular' | 'semibold' | 'bold';
  size: SizeScale;
  align: 'left' | 'center' | 'right'
};

type TextProps = Partial<TextType>;

const getColor = (color: TextType['color']) => ({
  primary,
  white,
  secondary,
  tertiary,
})[color];

const getFontWeight = (weight: TextType['weight']) => ({
  light: '200',
  regular: '400',
  semibold: '500',
  bold: '600',
})[weight];

const getFontSize = (size: TextType['size']) => ({
  'xx-small': gridUnitPx(1.5),
  'x-small': gridUnitPx(2),
  small: gridUnitPx(3),
  regular: gridUnitPx(4),
  large: gridUnitPx(5),
  'x-large': gridUnitPx(8),
  'xx-large': gridUnitPx(12),
})[size];

const getTextStyles = (props: TextProps) => `
    ${props.color && `color: ${getColor(props.color)}`};
    ${props.weight && `font-weight: ${getFontWeight(props.weight)}`};
    ${props.size && `font-size: ${getFontSize(props.size)}`};
    ${props.align && `text-align: ${props.align}`};
`;

export const H1 = styled.h1<TextProps>`
    ${(props) => getTextStyles({ weight: 'bold', size: 'xx-large', ...props })};
`;

export const H2 = styled.h2<TextProps>`
    ${(props) => getTextStyles({ size: 'large', ...props })};
`;

export const P = styled.p<TextProps>`
    ${(props) => getTextStyles({ size: 'regular', ...props })};
`;
