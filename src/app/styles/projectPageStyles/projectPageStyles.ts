import { css } from "@emotion/react";
import { flexCenterX2, flexColumnCenter } from "../commonStyles/commonStyles";

export const projectPageStyles = {
  header: [
    css`
      width: 100%;
      height: 3rem;
      padding: 5px;
    `,
  ],
  backButton: [
    flexCenterX2,
    css`
      width: 4rem;
      height: 100%;
      border-radius: 10px;
      font-size: 3rem;
      transition: 0.2s;

      &:hover {
        background-color: #80808030;
      }
    `,
  ],
  layout: [
    flexColumnCenter,
    css`
      row-gap: 3rem;
      width: 100%;
      padding: 1vw 20vw 5vw;

      @media (max-width: 500px) {
        padding: 1vw 5vw 5vw;
      }
    `,
  ],
  firstInfoLayout: [
    css`
      display: flex;
      gap: 1rem;
      width: 100%;
    `,
  ],
  left: [
    css`
      flex: 2;
      display: flex;
      flex-direction: column;
      row-gap: 10px;
    `,
  ],
  title: [
    css`
      font-size: 2rem;
    `,
  ],
  date: [
    css`
      font-size: 1rem;
      font-family: none;
    `,
  ],
  stackContainer: [
    css`
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      row-gap: 10px;
    `,
  ],
  description: [
    css`
      font-size: 1rem;
      font-family: none;
    `,
  ],
  right: [
    css`
      flex: 1;
      display: flex;
      flex-direction: column;
    `,
  ],
  image: [
    flexCenterX2,
    css`
      width: 100%;
      height: auto;
      border: 1px solid gray;
      border-radius: 5px;
      object-fit: cover;
    `,
  ],
  troubleshootingLayout: [
    css`
      display: flex;
      flex-direction: column;
      row-gap: 1rem;
      width: 100%;
    `,
  ],
  TS_InnerLayout: [
    css`
      display: flex;
      justify-content: space-between;
      gap: 5rem;
      width: 100%;

      @media (max-width: 768px) {
        flex-direction: column;
        gap: 0;
      }
    `,
  ],
  TS_left: [
    css`
      // flex: 1;
      width: 110px;
      font-size: 1.5rem;
    `,
  ],
  TS_right: [
    css`
      flex: 10;
      line-height: 1.5rem;
      font-size: 1.2rem;
      font-family: none;
    `,
  ],
};
