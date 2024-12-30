import { css } from "@emotion/react";
import { commonColors } from "../commonStyles/commonStyles";
import { gettingBiggerAni } from "../commonStyles/keyframes";

export const fifthSectionStyles = {
  switchBtn: (isClicked: boolean) => {
    return [
      css`
        position: relative;
        min-width: 200px;
        width: 100%;
        height: 40px;
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

        &:before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(1.2);
          width: 100%;
          height: 100%;
          border: 2px solid ${commonColors.rep}50;
          border-radius: 5px;
          opacity: 0;
          animation: ${!isClicked && gettingBiggerAni} 1s infinite;
        }
        &:after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) scale(1.2);
          width: 100%;
          height: 100%;
          border: 2px solid ${commonColors.rep}50;
          border-radius: 5px;
          opacity: 0;
          animation: ${!isClicked && gettingBiggerAni} 1.2s infinite;
        }
      `,
    ];
  },
  container: [
    css`
      display: flex;
      flex-direction: column;
      width: 100%;
    `,
  ],
  table: [
    css`
      width: 100%;
      border-collapse: collapse;
    `,
  ],
  thead: [
    css`
      position: sticky;
      top: 0;
      backdrop-filter: blur(10px);
    `,
  ],
  th: [
    css`
      padding: 15px 30px 15px 5px;
      text-align: left;
      font-family: sans-serif;
    `,
  ],
  tr: [
    css`
      border-bottom: 1px solid ${commonColors.hr};
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
      color: gray;
      font-weight: 800;
      font-family: sans-serif;
    `,
  ],
  tdName: [
    css`
      padding: 15px 30px 15px 5px;
      font-size: 1.1rem;
      font-family: sans-serif;
      font-weight: 700;
    `,
  ],
  tdBuiltWith: [
    css`
      max-width: 400px;
      padding: 30px 30px 30px 5px;
    `,
  ],
  tdLink: [
    css`
      max-width: 12vw;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
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
