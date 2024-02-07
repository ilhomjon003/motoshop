import { colors } from "constants/styles";
import styled from "styled-components";
import { pxToRem } from "utils";

const { teal, borderGray, white } = colors;

export default styled.div`
  box-shadow: rgba(0, 0, 0, 0.05) 0 ${pxToRem(6)} ${pxToRem(24)} 0,
    ${borderGray} 0 0 0 ${pxToRem(1)};
  border: ${pxToRem(1)} solid ${borderGray};
  padding: ${pxToRem(15)};
  border-radius: ${pxToRem(10)};
  cursor: pointer;
  transition: 200ms ease-in-out;
  .img__wrp {
    width: 100%;
    height: 250px;
    background-image: linear-gradient(${white}, ${borderGray});
    background-position: 200% auto;
    animation: loading 1s infinite linear;
    .card__img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: ${pxToRem(6)};
    }
  }
  .card__head {
    margin: ${pxToRem(10)} 0 0 0;
    .card__title {
      transition: 200ms ease-in-out;
    }
  }
  .product__address {
    margin-top: ${pxToRem(20)};
  }
  &:hover {
    border-color: ${teal};
    .card__title {
      color: ${teal};
    }
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
  @keyframes loading {
    to {
      background-position: 200% center;
    }
  }
`;
