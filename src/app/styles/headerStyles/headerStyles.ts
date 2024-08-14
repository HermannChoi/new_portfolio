import { css } from "@emotion/react";
import { commonColors } from "../commonStyles/commonStyles";

export const headerStyles = {
  header: [
    css`
      position: sticky;
      top: 0;
      width: 100%;
      height: 50px;
      background-color: ${commonColors.rep};
    `,
  ],
  progress_container: [
    css`
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 5px;
      border-radius: 5px;
      background-color: gray;
      overflow: hidden;
      z-index: 101;
    `,
  ],
  progress_bar: (progress: number) => {
    return [
      css`
        position: absolute;
        top: 0;
        left: 0;
        width: ${progress}%;
        height: 100%;
        background-color: red;
        transition: 0.1s;
      `,
    ];
  },
};
