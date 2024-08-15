import { css } from "@emotion/react";
import {
  commonColors,
  flexCenterX2,
  flexColumnCenter,
} from "../commonStyles/commonStyles";

export const secondSectionStyles = {
  layout: [
    flexColumnCenter,
    css`
      width: 100%;
    `,
  ],
  title: [
    css`
      margin-bottom: 20px;
      font-size: 4rem;
    `,
  ],
  main: [
    flexColumnCenter,
    css`
      width: 100%;
      @media (max-width: 1000px) {
        row-gap: 20px;
      }
    `,
  ],
  outerContainer: [
    css`
      display: flex;
      flex-direction: column;
      width: fit-content;
      transition: 0.2s;

      @media (max-width: 1000px) {
        row-gap: 20px;
        align-items: center;
      }
    `,
  ],
  innerContainer: [
    css`
      display: flex;
      align-items: center;
      width: 100%;
      min-height: 60px;
      padding: 5px 20px;
      border-radius: 0.5rem;
      transition: 0.2s;

      &:hover {
        transform: scale(1.03, 1);
        background-color: ${commonColors.rep}30;
      }

      @media (max-width: 1000px) {
        flex-direction: column;
      }
    `,
  ],
  techTitle: [
    css`
      min-width: 200px;
      font-size: 2.5rem;

      @media (max-width: 1000px) {
        text-align: center;
      }
    `,
  ],
  techContentLayout: [
    css`
      display: flex;
      gap: 20px;

      @media (max-width: 1000px) {
        flex-wrap: wrap;
        justify-content: center;
      }
    `,
  ],
  techContentContainer: [
    flexCenterX2,
    css`
      gap: 10px;
      min-width: fit-content;
      padding: 5px 20px;
      border-radius: 10px;
      background-color: ${commonColors.rep}50;
      font-size: 2rem;
      font-weight: 500;
      transition: 0.2s;

      &:hover {
        border-radius: 30px;
        background-color: ${commonColors.rep}90;
      }
    `,
  ],
  techContent: [
    css`
      font-size: 2rem;
    `,
  ],
};
