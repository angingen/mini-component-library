import React from "react";

import VisuallyHidden from "../VisuallyHidden";
import { getDisplayedValue } from "./Select.helpers";
import * as S from "./Select.styles";

const Select = ({ id = "sampleId", label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <>
      <VisuallyHidden>
        <label htmlFor={id}>{label}</label>
      </VisuallyHidden>
      <S.SelectWrapper>
        <S.Select id={id} value={value} onChange={onChange}>
          {children}
        </S.Select>
        <S.Presentational>
          {displayedValue} <S.Icon id="chevron-down" />
        </S.Presentational>
      </S.SelectWrapper>
    </>
  );
};

export default Select;
