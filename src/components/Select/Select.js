import React from 'react';

import { getDisplayedValue } from './Select.helpers';
import * as S from './Select.styles';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  const width = `${
    displayedValue.length * 10 + S.PADDING.left + S.PADDING.right
  }px`;

  return (
    <S.SelectWrapper>
      <S.Select
        style={{
          '--width': width,
        }}
        value={value}
        onChange={onChange}
      >
        {children}
      </S.Select>
      <S.Icon id="chevron-down" />
    </S.SelectWrapper>
  );
};

export default Select;
