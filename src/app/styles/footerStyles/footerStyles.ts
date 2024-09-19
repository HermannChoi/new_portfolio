import { css } from "@emotion/react";
import {
  commonColors,
  flexCenterX2,
  flexColumnCenterX2,
  mediaWidths,
} from "../commonStyles/commonStyles";

export const footerStyles = {
  layout: [
    flexColumnCenterX2,
    css`
      row-gap: 30px;
      width: 100%;
      height: 100vh;
      background-color: ${commonColors.rep};
    `,
  ],
  thankYou: [
    css`
      font-size: 7rem;
      text-align: center;

      @media (max-width: ${mediaWidths.fourth}px) {
        font-size: 4rem;
      }
    `,
  ],
  contactCopyBtn: [
    flexCenterX2,
    css`
      gap: 10px;
      padding: 5px 10px;
      border: 0.5px solid #ffffff;
      border-radius: 5px;
      background-color: #ffffff30;
      box-shadow: 0 5px #ffffff90;
      transition: 0.2s;

      &:hover {
        transform: translateY(5px);
        box-shadow: 0 0 #ffffff90;
      }
    `,
  ],
  contactTitle: [
    css`
      font-size: 2rem;

      @media (max-width: 450px) {
        display: none;
      }
    `,
  ],
  email: [
    css`
      font-size: 2rem;
    `,
  ],
  backToTopBtn: [
    css`
      padding: 10px 20px;
      border: 2px solid white;
      border-radius: 10px;
      background-color: transparent;
      font-size: 1.5rem;
      transition: border-color 0.2s, color 0.2s, opacity 1s, bottom 1s;

      &:hover {
        border-color: #000000;
        color: #000000;
      }
    `,
  ],
};
