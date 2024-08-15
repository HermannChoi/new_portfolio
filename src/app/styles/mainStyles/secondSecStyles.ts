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
      @media (max-width: 1000px) {
        row-gap: 20px;
      }
    `,
  ],
  outerContainer: [
    css`
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      padding: 0 5%;

      @media (max-width: 1000px) {
        justify-content: center;
      }
    `,
  ],
  innerContainer: [
    css`
      display: flex;
      align-items: center;
      gap: 20px;
      min-height: 60px;

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
      font-weight: 500;
    `,
  ],
};
