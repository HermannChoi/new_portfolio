import { css } from "@emotion/react";
import {
  commonColors,
  flexCenterX2,
  widthHeightFull,
} from "../commonStyles/commonStyles";
import { emojiAni } from "../commonStyles/keyframes";

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
  h1: [
    css`
      font-size: 3rem;
    `,
  ],
  right: [
    css`
      position: relative;
      flex: 1;
      min-height: 400px;
    `,
  ],
  profileBtn: (isClicked: boolean) => {
    return [
      widthHeightFull,
      css`
        border: none;
        border-radius: 30px;
        background-color: transparent;
        transition: 0.2s;
        overflow: hidden;
        &:hover {
          box-shadow: 0 0 20px #80808080;
        }
        ${!isClicked &&
        `filter: blur(10px); opacity: 0.5; &:hover { opacity: 0.7;}`}
      `,
    ];
  },
  profileImage: [
    widthHeightFull,
    css`
      object-fit: cover;
      user-select: none;
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
      animation: ${emojiAni} 3s infinite;
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
      flex-wrap: wrap;
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
      height: 25px;
    `,
  ],
  name: [
    css`
      font-size: 1.5rem;
    `,
  ],
};
