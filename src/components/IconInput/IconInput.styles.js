import styled from "styled-components";

import { COLORS } from "../../constants";
import IconBase from "../Icon";

export const SIZE = {
  small: {
    "--borderBottom": "1px",
    "--fontSize": `${14 / 16}rem`,
    "--padding": "4px 24px",
    "--iconSize": "20px",
  },
  large: {
    "--borderBottom": "2px",
    "--fontSize": `${18 / 16}rem`,
    "--padding": "7px 36px",
    "--iconSize": "28px",
  },
};

export const Input = styled.input`
  border: none;
  border-bottom: var(--borderBottom) solid ${COLORS.black};
  padding: var(--padding);
  font-size: var(--fontSize);
  font-weight: 700;

  color: inherit;
  outline-color: ${COLORS.primary};
  outline-offset: 2px;
  width: var(--width);

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

export const InputWrapper = styled.label`
  position: relative;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
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
