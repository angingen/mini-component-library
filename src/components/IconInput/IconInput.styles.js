import styled from 'styled-components';

import { COLORS } from '../../constants';
import IconBase from '../Icon';

export const SIZE = {
  small: {
    '--borderBottom': '1px',
    '--fontSize': `${14 / 16}rem`,
    '--padding': '4px 24px',
    '--iconSize': '20px',
  },
  large: {
    '--borderBottom': '2px',
    '--fontSize': `${18 / 16}rem`,
    '--padding': '7px 36px',
    '--iconSize': '28px',
  },
};

export const Input = styled.input`
  border: none;
  border-bottom: var(--borderBottom) solid ${COLORS.black};
  padding: var(--padding);
  font-size: var(--fontSize);
  font-weight: ${({ thinText }) => (thinText ? 400 : 700)};

  color: ${({ thinText }) => (thinText ? COLORS.gray500 : COLORS.gray700)};
  outline-color: ${COLORS.primary};
  outline-offset: 2px;

  width: 100%;

  &:hover {
    color: ${({ thinText }) => !thinText && COLORS.black};
  }
`;

export const InputWrapper = styled.div`
  width: var(--width);
  position: relative;
`;

export const Icon = styled(IconBase)`
  width: var(--iconSize);
  height: var(--iconSize);
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto 0;
  outline: none;

  svg {
    width: 100%;
    height: 100%;
  }
`;
