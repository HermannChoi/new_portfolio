import { css } from "@emotion/react";
import {
  commonColors,
  flexCenterX2,
  flexColumnCenter,
  mediaWidths,
} from "../commonStyles/commonStyles";

export const fourthSectionStyles = {
  outline: [
    flexColumnCenter,
    css`
      row-gap: 30px;
      padding: 0 10vw;

      @media (max-width: ${mediaWidths.fourth + 500}px) {
        padding: 0;
      }
    `,
  ],
  layout: [
    css`
      display: flex;
      gap: 30px;
      width: 100%;
      padding: 10px 15px;
      border: 2px solid transparent;
      border-radius: 10px;
      transition: background-color 0.2s;
      cursor: pointer;

      &:hover {
        background-color: ${commonColors.rep}20;
        border-color: ${commonColors.rep}30;
      }

      @media (max-width: ${mediaWidths.fourth}px) {
        flex-direction: column;
        gap: 0px;
      }
    `,
  ],
  left: [
    css`
      flex: 1;
      display: flex;
      flex-direction: column;
      row-gap: 10px;

      @media (max-width: ${mediaWidths.fourth}px) {
        align-items: center;
      }
    `,
  ],
  date: [
    css`
      font-size: 1rem;
      font-weight: 600;
      font-family: sans-serif;
      opacity: 0.6;
    `,
  ],
  imageContainer: [
    flexCenterX2,
    css`
      width: 100%;
      height: auto;
      border: 1px solid gray;
      border-radius: 5px;
      object-fit: cover;
    `,
  ],
  stateContainer: [
    css`
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
    `,
  ],
  state: [
    css`
      width: fit-content;
      padding: 2px 10px;
      border-radius: 10px;
      background-color: ${commonColors.rep}70;
      font-size: 1.2rem;
    `,
  ],
  right: [
    css`
      flex: 3;
      display: flex;
      flex-direction: column;
      row-gap: 10px;

      @media (max-width: ${mediaWidths.fourth}px) {
        align-items: center;
      }
    `,
  ],
  title: (whichHovered: number | null, i: number) => {
    return [
      css`
        position: relative;
        width: fit-content;
        font-size: 2rem;
        ${whichHovered === i && `color: ${commonColors.color};`}

        &:after {
          content: "↗";
          position: absolute;
          bottom: 5px;
          right: -15px;
          font-size: 1rem;
          transition: 0.3s;
          ${whichHovered === i && `transform: translate(10px, -10px);`}
        }
      `,
    ];
  },
  description: [
    css`
      font-size: 1.2rem;
      font-family: sans-serif;
      overflow: hidden;
      opacity: 0.8;

      @media (max-width: ${mediaWidths.fourth}px) {
        text-align: center;
      }
    `,
  ],
  stackContainer: [
    css`
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      row-gap: 10px;

      @media (max-width: ${mediaWidths.fourth}px) {
        justify-content: center;
      }
    `,
  ],
  stack: [
    css`
      width: fit-content;
      padding: 3px 10px;
      border-radius: 10px;
      color: ${commonColors.color};
      background-color: ${commonColors.rep}30;
      font-size: 1rem;
      font-family: sans-serif;
    `,
  ],
};
