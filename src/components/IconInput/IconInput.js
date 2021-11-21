import React from "react";

import VisuallyHidden from "../VisuallyHidden";
import * as S from "./IconInput.styles";

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  return (
    <S.InputWrapper style={{ ...S.SIZE[size], "--width": `${width}px` }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <S.Input placeholder={placeholder} />
      <S.Icon id={icon} />
    </S.InputWrapper>
  );
};

export default IconInput;
