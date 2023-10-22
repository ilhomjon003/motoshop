import { colors } from "constants/styles";
import styled from "styled-components";
import { pxToRem } from "utils";

const { black, gray, white } = colors;

export default styled.div`
  box-shadow: rgba(0, 0, 0, 0.05) 0 ${pxToRem(6)} ${pxToRem(24)} 0,
    rgba(0, 0, 0, 0.08) 0 0 0 ${pxToRem(1)};
  padding: ${pxToRem(15)};
  border-radius: ${pxToRem(10)};
  cursor: pointer;
  .img__wrp {
    width: 100%;
    .card__img {
      width: 100%;
      object-fit: cover;
      border-radius: ${pxToRem(6)};
    }
  }
  .helmet__img {
    background-color: ${white};
    border-radius: ${pxToRem(10)};
    padding: ${pxToRem(15)};
    .card__img {
      width: 100%;
      max-height: ${pxToRem(250)};
      object-fit: contain;
      border-radius: ${pxToRem(6)};
    }
  }
  .card__head {
    margin: ${pxToRem(10)} 0 0 0;
    .card__title {
      font-size: ${pxToRem(23)};
      color: ${black};
      font-weight: 600;
    }
  }
  .product__address {
    margin-top: ${pxToRem(20)};
    font-size: ${pxToRem(16)};
    color: ${gray}80;
  }

  @media only screen and (max-width: ${pxToRem(1200)}) {
    .card__head {
      .card__title {
        font-size: ${pxToRem(19)};
      }
    }
    .product__address {
      font-size: ${pxToRem(14)};
    }
  }
`;