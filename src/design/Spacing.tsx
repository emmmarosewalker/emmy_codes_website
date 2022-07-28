import classNames from 'classnames';
import { cloneElement, ReactElement } from 'react';
import styled from 'styled-components';
import { gridUnitPx } from './measurements';

export const CloneChild = ({
  className,
  children,
}: {
  className?: string;
  children: ReactElement;
}) => cloneElement(children, {
  className: classNames(children.props.className, className),
});

export const spacings = {
  'xx-small': gridUnitPx(0.5),
  'x-small': gridUnitPx(1),
  small: gridUnitPx(2),
  medium: gridUnitPx(3),
  large: gridUnitPx(4),
  'x-large': gridUnitPx(6),
  'xx-large': gridUnitPx(8),
};
export type SpacingType = keyof typeof spacings;

interface SpacingProps {
  top?: SpacingType;
  right?: SpacingType;
  bottom?: SpacingType;
  left?: SpacingType;
}
const Spacing = styled(CloneChild)<SpacingProps>`
    && {
      ${(props) => props.top && `margin-top: ${spacings[props.top]};`}
      ${(props) => props.right && `margin-right: ${spacings[props.right]};`}
      ${(props) => props.bottom && `margin-bottom: ${spacings[props.bottom]};`}
      ${(props) => props.left && `margin-left: ${spacings[props.left]};`}
    }
  `;

export default Spacing;
