import { css } from "@emotion/react";
import { commonColors, mediaWidths } from "../commonStyles/commonStyles";

export const fifthSectionStyles = {
  switchBtn: [
    css`
      padding: 5px 10px;
      border: 1px solid ${commonColors.rep}90;
      border-radius: 5px;
      margin-top: 20px;
      background-color: transparent;
      font-size: 1rem;
      font-family: sans-serif;
      transition: 0.2s;

      &:hover {
        transform: scaleX(1.05);
        color: ${commonColors.color};
      }
    `,
  ],
  thead: [
    css`
      position: sticky;
      top: 80px;
      backdrop-filter: blur(10px);
    `,
  ],
  th: [
    css`
      padding: 15px 30px 15px 5px;
      text-align: left;
      font-family: sans-serif;
      border-bottom: 1px solid ${commonColors.hr};
    `,
  ],
  tr: [
    css`
      transition: background-color 0.2s;
      &:hover {
        background-color: ${commonColors.rep}15;
      }
    `,
  ],
  tdYear: [
    ,
    css`
      padding-left: 5px;
      border-bottom: 1px solid ${commonColors.hr};
      color: gray;
      font-weight: 800;
      font-family: sans-serif;
    `,
  ],
  tdName: [
    css`
      padding: 30px 30px 30px 5px;
      border-bottom: 1px solid ${commonColors.hr};
      font-size: 1.1rem;
      font-family: sans-serif;
      font-weight: 700;
    `,
  ],
  tdBuiltWith: [
    css`
      max-width: 400px;
      padding: 30px 30px 30px 5px;
      border-bottom: 1px solid ${commonColors.hr};
    `,
  ],
  tdLink: [
    css`
      max-width: 300px;
      border-bottom: 1px solid ${commonColors.hr};
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;

      @media (max-width: ${mediaWidths.fifth}px) {
        max-width: 40vw;
      }
    `,
  ],
  link: [
    css`
      color: gray;
      font-family: sans-serif;

      &:hover {
        color: ${commonColors.color};
        text-decoration: underline;
      }
    `,
  ],
};
