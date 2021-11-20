import styled from 'styled-components';

import { COLORS } from '../../constants';
import IconBase from '../Icon';

export const PADDING = {
  left: 16,
  right: 52,
  vertical: 12,
};

export const Select = styled.select`
  appearance: none;
  font-size: 1rem;
  color: inherit;
  background-color: ${COLORS.gray50};
  border-color: transparent;
  padding: ${PADDING.vertical}px ${PADDING.right}px ${PADDING.vertical}px
    ${PADDING.left}px;
  border-radius: 8px;
  outline-color: ${COLORS.primary};
  width: var(--width);
`;

export const SelectWrapper = styled.div`
  position: relative;
  width: fit-content;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

export const Icon = styled(IconBase)`
  position: absolute;
  right: 16px;
  margin: auto 0;
  width: 24px;
  height: 24px;
  color: inherit;
`;
