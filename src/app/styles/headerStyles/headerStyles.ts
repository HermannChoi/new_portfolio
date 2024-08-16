import { css } from "@emotion/react";
import { commonColors, flexColumnCenterX2 } from "../commonStyles/commonStyles";
import { rotate360 } from "../commonStyles/keyframes";

export const headerStyles = {
  header: [
    css`
      position: sticky;
      top: 0;
      width: 100%;
      height: 80px;
      background-color: ${commonColors.rep};
      z-index: 100;
    `,
  ],
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
  menu: [
    flexColumnCenterX2,
    css`
      row-gap: 5px;
      width: 45px;
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
            translate(${isClicked ? `4px, -18px` : `0, 0`});
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
