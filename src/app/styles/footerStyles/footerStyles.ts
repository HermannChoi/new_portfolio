import { css } from "@emotion/react";
import { commonColors, flexColumnCenterX2 } from "../commonStyles/commonStyles";

export const footerStyles = {
  layout: [
    flexColumnCenterX2,
    css`
      width: 100%;
      height: 100vh;
      background-color: ${commonColors.rep};
    `,
  ],
  text: [
    css`
      padding: 0 10px;
      font-size: 7rem;
      text-align: center;
    `,
  ],
  btn: [
    css`
      padding: 10px 20px;
      border: 2px solid white;
      border-radius: 10px;
      background-color: transparent;
      font-size: 1.5rem;
      transition: background-color 0.2s, color 0.2s, opacity 3s, bottom 3s;

      &:hover {
        border-color: #000000;
        color: #000000;
      }
    `,
  ],
};
