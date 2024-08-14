import { css } from "@emotion/react";
import { commonColors, flexCenterX2 } from "../commonStyles/commonStyles";

export const firstSectionStyles = {
  layout: [
    css`
      display: flex;
      gap: 20px;
      height: 70vh;

      @media (max-width: 900px) {
        flex-direction: column;
      }
    `,
  ],
  left: [
    css`
      flex: 1.5;
      display: flex;
      flex-direction: column;
      justify-content: center;
    `,
  ],
  right: [
    css`
      flex: 1;
      border: 1px solid white;
      border-radius: 10px;
    `,
  ],
  h1: [
    css`
      font-size: 3rem;
    `,
  ],
};

export const FSmessageStyles = {
  layout: [
    flexCenterX2,
    css`
      width: fit-content;
      padding: 5px 10px;
      border-radius: 5px;
      margin-bottom: 10px;
      background-color: ${commonColors.rep}90;
    `,
  ],
  emoji: [
    css`
      font-size: 1.5rem;
      margin-right: 10px;
    `,
  ],
  message: [
    css`
      font-size: 1.2rem;
      font-family: monospace;
    `,
  ],
};

export const personalLinks = {
  container: [
    css`
      display: flex;
      gap: 10px;
      margin-top: 10px;
    `,
  ],
  layout: [
    css`
      display: flex;
      align-items: center;
      gap: 10px;
      width: fit-content;
      height: 40px;
      padding: 10px;
      border: 1px solid white;
      border-radius: 5px;
      background-color: transparent;
      transition: all 0.1s;
      &:hover {
        transform: scale(1.1);
        border-color: ${commonColors.rep};
        color: ${commonColors.rep};
      }
    `,
  ],
  image: [
    css`
      width: 25px;
    `,
  ],
  name: [
    css`
      font-size: 1.5rem;
    `,
  ],
};
