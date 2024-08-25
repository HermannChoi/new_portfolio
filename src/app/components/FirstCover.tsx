"use client";
/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import {
  flexCenterX2,
  widthHeightVhFull,
} from "../styles/commonStyles/commonStyles";
import {
  firstCoverAni,
  firstCoverSvgAni,
} from "../styles/commonStyles/keyframes";
import { useEffect, useState } from "react";

const FirstCover = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    requestAnimationFrame(() => {
      setIsMounted(true);
    });
  }, []);
  return (
    <div
      css={[
        widthHeightVhFull,
        flexCenterX2,
        css`
          position: fixed;
          top: 0;
          left: 0;
          background-color: #000000;
          white-space: nowrap;
          animation: ${firstCoverAni} 5s forwards;
          z-index: 1000;
        `,
      ]}
    >
      {isMounted && (
        <svg
          css={[
            css`
              width: 100vw;
              animation: ${isMounted && firstCoverSvgAni} 4s linear forwards;
              stroke-width: 2;

              @media (max-width: 600px) {
                stroke-width: 1;
              }
            `,
          ]}
        >
          <text
            x="50%"
            y="50%"
            dy="40px"
            textAnchor="middle"
            css={[
              css`
                font-size: 8rem;

                @media (max-width: 600px) {
                  font-size: 3rem;
                }
              `,
            ]}
          >
            Yunseok Choi
          </text>
        </svg>
      )}
    </div>
  );
};

export default FirstCover;
