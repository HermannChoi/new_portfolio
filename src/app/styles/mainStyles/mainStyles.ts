import { css } from "@emotion/react";
import { mediaWidths } from "../commonStyles/commonStyles";

export const mainStyles = {
  main: [
    css`
      display: flex;
      width: 100%;
      padding: 50px 6vw 0;

      @media (max-width: ${mediaWidths.first}px) {
        flex-direction: column;
        row-gap: 8rem;
      }
    `,
  ],
  infoPart: [
    css`
      display: flex;
      flex-direction: column;
      row-gap: 8rem;
      width: 100%;
      padding: 50px;

      @media (max-width: ${mediaWidths.first}px) {
        padding: 0;
      }
    `,
  ],
};
