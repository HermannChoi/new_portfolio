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
      font-family: none;
      transition: 0.2s;

      &:hover {
        transform: scaleX(1.05);
        color: ${commonColors.color};
      }
    `,
  ],
  thead: [
    css`
      positoin: sticky;
      top: 60px;
    `,
  ],
  th: [
    css`
      padding: 15px 30px 15px 0;
      text-align: left;
      font-family: none;
      border-bottom: 1px solid ${commonColors.hr};
    `,
  ],
  tr: [
    css`
      padding: 15px 30px 15px 0;
    `,
  ],
  tdYear: [
    ,
    css`
      border-bottom: 1px solid ${commonColors.hr};
      color: gray;
      font-weight: 800;
      font-family: none;
    `,
  ],

  tdName: [
    css`
      padding: 30px 30px 30px 0;
      border-bottom: 1px solid ${commonColors.hr};
      font-size: 1.1rem;
      font-family: none;
      font-weight: 700;
    `,
  ],
  tdBuiltWith: [
    css`
      max-width: 400px;
      padding: 30px 30px 30px 0;
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
      font-family: none;

      &:hover {
        color: ${commonColors.color};
        text-decoration: underline;
      }
    `,
  ],
};
