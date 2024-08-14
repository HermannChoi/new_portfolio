import { css } from "@emotion/react";
import {
  commonColors,
  flexCenterX2,
  flexColumnCenterX2,
} from "../commonStyles/commonStyles";
import { roate360 } from "../commonStyles/keyframes";

export const headerStyles = {
  header: [
    css`
      position: sticky;
      top: 0;
      width: 100%;
      height: 60px;
      background-color: #0cae86;
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
      width: 35px;
      height: 35px;
      animation: ${roate360} 2s infinite linear;
    `,
  ],
  menu: [
    flexColumnCenterX2,
    css`
      row-gap: 5px;
      width: 40px;
      height: 40px;
      border: none;
      background-color: transparent;
      transition: 0.2s;
      &:hover {
        transform: scale(1.1, 1);
      }
    `,
  ],
  menubar: [
    css`
      width: 80%;
      height: 4px;
      border-radius: 3px;
      background-color: white;
    `,
  ],
};
