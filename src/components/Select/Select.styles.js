import styled from "styled-components";

import { COLORS } from "../../constants";
import IconBase from "../Icon";

export const PADDING = {
  left: 16,
  right: 52,
  vertical: 12,
};

export const Select = styled.select`
  appearance: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

export const SelectWrapper = styled.div`
  position: relative;
  width: max-content;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

export const Icon = styled(IconBase)`
  position: absolute;
  right: 16px;
  top: 0;
  bottom: 0;
  margin: auto 0;
  width: 24px;
  height: 24px;
  color: inherit;
  /** Preventing block the interaction of the hidden native selec element */
  pointer-events: none;
`;

export const Presentational = styled.div`
  font-size: 1rem;
  color: inherit;
  background-color: ${COLORS.gray50};
  border-color: transparent;
  padding: ${PADDING.vertical}px ${PADDING.right}px ${PADDING.vertical}px
    ${PADDING.left}px;
  border-radius: 8px;
  outline-color: ${COLORS.primary};

  ${Select}:focus + & {
    outline: 1px dotted ${COLORS.primary};
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: 1px;
  }
`;
