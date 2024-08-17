import { css } from "@emotion/react";
import { showUp2 } from "./keyframes";

export const mediaWidths = {
  first: 900,
  second: 1000,
  third: 750,
  fourth: 720,
  fifth: 960,
};

export const commonColors = {
  rep: "#0cd5a4",
  color: "#00ffc1",
  hr: "#80808050",
};

export const colorRep = [
  css`
    color: ${commonColors.rep};
  `,
];

export const flexCenterX2 = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const widthHeightFull = css`
  width: 100%;
  height: 100%;
`;

export const widthHeightVhFull = css`
  width: 100%;
  height: 100vh;
`;

export const flexColumnCenter = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const flexColumnCenterX2 = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const absoluteCenter = css`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const absoluteCenterX2 = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const whiteSpaceNoWrap = css`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

export const delayShowUpAni = (delay: number) => {
  return [
    css`
      opacity: 0;
      animation: ${showUp2} 0.5s ${delay}s forwards;
    `,
  ];
};

export const sectionTitleStyle = [
  css`
    font-size: 4rem;
    margin-bottom: 20px;
    text-align: center;
  `,
];
