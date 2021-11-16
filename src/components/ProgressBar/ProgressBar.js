/* eslint-disable no-unused-vars */
import React from 'react';

import VisuallyHidden from '../VisuallyHidden';
import * as S from './ProgressBar.styles';

const ProgressBar = ({ value, size }) => {
  return (
    <S.Container
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      style={S.SIZE[size]}
    >
      <S.IndicatorBar value={value}>
        <VisuallyHidden>{value}</VisuallyHidden>
      </S.IndicatorBar>
    </S.Container>
  );
};

export default ProgressBar;
