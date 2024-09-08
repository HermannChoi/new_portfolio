import { css } from "@emotion/react";
import {
  commonColors,
  flexCenterX2,
  flexColumnCenter,
  widthHeightVhFull,
} from "../commonStyles/commonStyles";
import { fadeIn } from "../commonStyles/keyframes";

export const backgroundStyles = {
  layout: [
    widthHeightVhFull,
    flexColumnCenter,
    css`
      position: fixed;
      top: 0;
      left: 0;
      gap: 10px;
      filter: blur(6px);
      z-index: -1;
      animation: ${fadeIn} 2s;
    `,
  ],
  container: [
    css`
      display: flex;
      justify-content: center;
      gap: 10px;
    `,
  ],
  key: (RO: number, i: number) => {
    return [
      flexCenterX2,
      css`
        flex: 1;
        width: 35vh;
        height: 35vh;
        ${RO === i
          ? `border: 3px solid ${commonColors.rep};`
          : `border: 3px solid ${commonColors.rep}50;`}
        border-radius: 10px;
        color: ${RO === i ? `#808080` : `#80808080`};
        font-size: 17vh;
        transform: translateY(${RO === i ? `0` : `-10px`});
        transition: all 1s;
      `,
    ];
  },
};
