import { css } from "@emotion/react";
import {
  commonColors,
  flexCenterX2,
  mediaWidths,
  widthHeightFull,
} from "../commonStyles/commonStyles";
import { emojiAni, profileBtnAni } from "../commonStyles/keyframes";

export const firstSectionStyles = {
  layout: [
    css`
      display: flex;
      gap: 20px;
      min-height: 80vh;

      @media (max-width: ${mediaWidths.first}px) {
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
      font-weight: 500;
    `,
  ],
  right: [
    flexCenterX2,
    css`
      position: relative;
      flex: 1;
    `,
  ],
  flip: [
    css`
      width: 300px;
      height: 300px;
    `,
  ],
  card: (isClicked: boolean) => {
    return [
      css`
        width: 100%;
        height: 100%;
        position: relative;
        transition: 1.5s;
        transform-style: preserve-3d;
        transform: rotateY(${isClicked ? 360 * 4 : 0}deg);
      `,
    ];
  },
  card_front: (isClicked: boolean) => {
    return [
      css`
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
        user-select: none;
        ${!isClicked && `filter: blur(10px); opacity: 0.5;`}
      `,
    ];
  },
  profileBtn: (isClicked: boolean) => {
    return [
      css`
        transform: rotateY(180deg);
        width: 100%;
        height: 100%;
        border: none;
        border-radius: 50%;
        background-color: transparent;
        transition: 0.2s;
        overflow: hidden;
        animation: ${!isClicked && profileBtnAni} 2s infinite;
        &:hover {
          box-shadow: 0 0 50px #fff;
        }
        ${!isClicked &&
        `filter: blur(5px); opacity: 0.5; &:hover { opacity: 0.8;}`}
      `,
    ];
  },
  profileImage: [
    widthHeightFull,
    css`
      min-height: 300px;
      max-height: 600px;

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
      background-color: ${commonColors.rep}4d;
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
      transition: all 0.2s;
      &:hover {
        border-radius: 10px;
        border-color: ${commonColors.rep};
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
