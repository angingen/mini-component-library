import styled from 'styled-components';

import { COLORS } from '../../constants';

export const SIZE = {
  small: {
    '--height': '8px',
    '--padding': 0,
    '--radius': '4px',
  },
  medium: {
    '--height': '12px',
    '--padding': 0,
    '--radius': '4px',
  },
  large: {
    '--height': '16px',
    '--padding': '4px',
    '--radius': '8px',
  },
};

export const Container = styled.div`
  padding: var(--padding);
  border-radius: var(--radius);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
`;

export const IndicatorBar = styled.div`
  height: var(--height);
  border-radius: 4px;
  background: linear-gradient(
    to right,
    ${COLORS.primary} 0 ${({ value }) => value}%,
    transparent ${({ value }) => value}% 100%
  );
`;
