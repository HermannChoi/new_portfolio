import { flexColumnCenter, mediaWidths } from "./../commonStyles/commonStyles";
import { css } from "@emotion/react";
import {
  commonColors,
  flexCenterX2,
  flexColumnCenterX2,
} from "../commonStyles/commonStyles";
import { rotate360, showUp } from "../commonStyles/keyframes";

export const headerStyles = {
  header: (isClicked: boolean) => {
    return [
      css`
        position: sticky;
        top: 0;
        width: 100%;
        height: ${isClicked ? `100vh` : `80px`};
        background-color: ${commonColors.rep};
        transition: 1s;
        z-index: 100;
      `,
    ];
  },
  progress_container: [
    css`
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 5px;
      border-radius: 5px;
      background-color: gray;
      overflow: hidden;
    `,
  ],
  progress_bar: (progress: number) => {
    return [
      css`
        position: absolute;
        top: 0;
        left: 0;
        width: ${progress}%;
        height: 100%;
        background-color: red;
        transition: 0.1s;
      `,
    ];
  },
  inner: [
    css`
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 100%;
      padding: 5px 20px 0;
    `,
  ],
  cd: [
    css`
      width: 40px;
      height: 40px;
      animation: ${rotate360} 2s infinite linear;
    `,
  ],
  contentsContainer: [
    flexColumnCenterX2,
    css`
      row-gap: 20px;
      width: 100%;
      animation: ${showUp} 2s;
    `,
  ],
  languageBtn: [
    flexCenterX2,
    css`
      gap: 30px;
      border: none;
      background-color: transparent;
      font-size: 5rem;
      transition: 0.2s;

      &:hover {
        transform: scaleX(1.1);
      }
    `,
  ],
  eng: (isEnglish: boolean) => {
    return [
      flexCenterX2,
      css`
        color: ${isEnglish ? `#ffffff` : `#808080`};
        transition: 0.3s;
        ${isEnglish && `text-shadow: 0 0 30px green;`}
      `,
    ];
  },
  kor: (isEnglish: boolean) => {
    return [
      flexCenterX2,
      css`
        color: ${isEnglish ? `#808080` : `#ffffff`};
        transition: 0.3s;
        ${!isEnglish && `text-shadow: 0 0 30px green;`}
      `,
    ];
  },
  socialContainer: [
    flexColumnCenter,
    css`
      row-gap: 10px;
    `,
  ],
  social: [
    flexCenterX2,
    css`
      gap: 10px;
      width: 100%;
      height: 100px;
      padding: 10px 30px;
      border-radius: 10px;
      font-size: 4rem;
      transition: 0.3s;

      &:hover {
        background-color: ${commonColors.color};
      }

      @media (max-width: ${mediaWidths.header}px) {
        font-size: 2rem;
      }
    `,
  ],
  menu: [
    flexColumnCenterX2,
    css`
      row-gap: 5px;
      min-width: 45px;
      height: 45px;
      padding: 0 5px;
      border: none;
      border-radius: 3px;
      background-color: transparent;
      transition: 0.2s;
      &:hover {
        transform: scale(1.1);
        background-color: #00000030;
      }
    `,
  ],
  menubar: [
    css`
      width: 35px;
      height: 4px;
      border-radius: 3px;
      background-color: white;
      transition: 0.3s;
    `,
  ],
  menubar1: (isClicked: boolean) => {
    return [
      headerStyles.menubar,
      css`
        position: relative;
        ${isClicked && `width: 0;`}
        &:before {
          ${headerStyles.menubar}
          content: "";
          position: absolute;
          top: -10px;
          left: 0;
          display: block;
          transform: rotate(${isClicked ? `-135` : `0`}deg)
            translate(${isClicked ? `4px, -19px` : `0, 0`});
        }
        &:after {
          ${headerStyles.menubar}
          content: "";
          position: absolute;
          top: 10px;
          left: 0;
          display: block;
          transform: rotate(${isClicked ? `135` : `0`}deg)
            translate(${isClicked ? `5px, 19px` : `0, 0`});
        }
      `,
    ];
  },
};
