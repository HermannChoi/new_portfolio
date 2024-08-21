"use client";
/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import {
  commonColors,
  flexCenterX2,
  widthHeightVhFull,
} from "../styles/commonStyles/commonStyles";
import { firstCoverAni } from "../styles/commonStyles/keyframes";

const FirstCover = () => {
  return (
    <div
      css={[
        widthHeightVhFull,
        flexCenterX2,
        css`
          position: fixed;
          top: 0;
          left: 0;
          background-color: ${commonColors.rep};
          font-size: 4rem;
          white-space: nowrap;
          animation: ${firstCoverAni} 1.5s forwards;
          z-index: 1000;
        `,
      ]}
    >
      YUNSEOK CHOI
    </div>
  );
};

export default FirstCover;
