import { colors } from "constants/styles";
import styled from "styled-components";
import { btn, layout } from "styles/mixin";
import { pxToRem } from "utils";

const { teal, white } = colors;
export default styled.button`
  ${btn("normal")}
  @media only screen and (max-width: 768px) {
    font-size: ${pxToRem(16)};
  }
`;
export const StyledRadioBtn = styled.div`
  border-color: ${teal};
  .ant-radio-group {
    ${layout("flex")}
    width: 100%;
    max-width: ${pxToRem(550)};
    height: ${pxToRem(45)};
    border-radius: ${pxToRem(6)};
    .ant-select-selector {
      border: none !important;
      & :focus,
      :focus-within,
      :focus-visible {
        border: none !important;
        outline: none !important;
      }
    }
    .ant-radio-button-wrapper-checked:where(:hover, :focus-visible, :focus, :focus-within, :checked, :active)
      span {
    }
    :where(.css-dev-only-do-not-override-dkbvqv).ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled),
    :where(.css-dev-only-do-not-override-dkbvqv).ant-radio-button-wrapper:hover {
      color: ${white} !important;
      border-color: ${teal} !important;
      background-color: ${teal};
    }
    :where(.css-dev-only-do-not-override-dkbvqv).ant-radio-button-wrapper:hover {
      background-color: ${teal};
      opacity: 0.7;
    }
    :where(.css-dev-only-do-not-override-dkbvqv).ant-radio-button-wrapper {
      height: 100%;
      ${layout("flex")}
    }
    :where(.css-dev-only-do-not-override-dkbvqv).ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled)::before {
      background-color: ${teal};
    }
  }
`;
