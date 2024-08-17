import { css } from "@emotion/react";
import { commonColors, flexCenterX2 } from "../commonStyles/commonStyles";

export const footerStyles = {
  layout: [
    flexCenterX2,
    css`
      width: 100%;
      height: 100vh;
      background-color: ${commonColors.rep};
    `,
  ],
  text: [
    css`
      font-size: 7rem;
    `,
  ],
};
