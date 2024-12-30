import { css } from "@emotion/react";
import {
  commonColors,
  flexCenterX2,
  mediaWidths,
  widthHeightFull,
} from "../commonStyles/commonStyles";
import { emojiAni } from "../commonStyles/keyframes";

export const firstSectionStyles = {
  layout: [
    css`
      position: sticky;
      top: 130px;
      left: 0;
      display: flex;
      flex-direction: column;
      gap: 30px;
      width: 40%;
      min-width: 40%;
      height: fit-content;

      @media (max-width: ${mediaWidths.first}px) {
        position: static;
        width: 100%;
      }
    `,
  ],
  left: [
    css`
      // flex: 1.5;
      display: flex;
      flex-direction: column;
      justify-content: center;
    `,
  ],
  h1: [
    css`
      font-size: 2.5rem;
      font-weight: 500;
    `,
  ],
  right: [
    css`
      position: relative;
      display: flex;
      gap: 10px;
      height: 200px;
    `,
  ],
  flip: [
    css`
      width: 40%;
      min-width: 160px;
      height: 200px;
    `,
  ],
  card: (isClicked: boolean) => {
    return [
      css`
        width: 100%;
        height: 100%;
        position: relative;
        border: 1px solid #ffffff;
        border-radius: 20px 0 0 20px;
        transition: 1.5s;
        transform-style: preserve-3d;
        transform: rotateY(${isClicked ? 360 * 3 : 0}deg);
      `,
    ];
  },
  card_front: (isClicked: boolean) => {
    return [
      css`
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 20px 0 0 20px;
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
        border-radius: 0 20px 20px 0;
        background-color: transparent;
        transition: 0.2s;
        overflow: hidden;

        &:hover {
          box-shadow: 0 0 30px #fff;
        }
        ${!isClicked &&
        `filter: blur(5px); opacity: 0.5; &:hover { opacity: 0.8;}`}
      `,
    ];
  },
  profileImage: [
    widthHeightFull,
    css`
      min-height: 200px;
      max-height: 200px;

      object-fit: cover;
      user-select: none;
    `,
  ],
  resumeInfoLayout: [
    css`
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
    `,
  ],
  RI_title: [
    css`
      font-size: 1.7rem;
      // margin-bottom: 5px;
    `,
  ],
  RI_status: [
    css`
      font-size: 1.2rem;
    `,
  ],
  RI_date: [
    css`
      font-size: 1rem;
      font-family: none;
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
      flex-direction: column;
      justify-content: space-between;
      width: 100%;
      height: 100%;
    `,
  ],
  layout: (color?: string) => {
    return [
      css`
        display: flex;
        align-items: center;
        gap: 10px;
        width: 90%;
        min-width: 10rem;
        height: 40px;
        padding: 10px;
        border: 1px solid white;
        border-radius: 0 10px 10px 0;
        background-color: transparent;
        transition: all 0.2s;

        &:hover {
          width: 100%;
          border-color: ${commonColors.rep};
          background-color: ${color}80;
        }
      `,
    ];
  },
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
