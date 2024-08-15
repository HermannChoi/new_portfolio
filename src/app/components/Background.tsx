"use client";
/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";
import { backgroundStyles } from "../styles/background/backgroundStyles";

const Background = () => {
  const [randomOrder1, setRandomOrder1] = useState<number>(10);
  const [randomOrder2, setRandomOrder2] = useState<number>(10);
  const [randomOrder3, setRandomOrder3] = useState<number>(10);

  const keyboardForBackground = {
    firstLine: ["R", "T", "Y", "U", "I"],
    secondLine: ["D", "F", "G", "H", "J", "K"],
    thirdLine: ["C", "V", "B", "N", "M"],
  };

  useEffect(() => {
    setInterval(() => {
      const randomNumber = Math.floor(Math.random() * 10);
      setRandomOrder1(randomNumber);
    }, 1100);
    setInterval(() => {
      const randomNumber = Math.floor(Math.random() * 10);
      setRandomOrder2(randomNumber);
    }, 1300);
    setInterval(() => {
      const randomNumber = Math.floor(Math.random() * 10);
      setRandomOrder3(randomNumber);
    }, 1800);
  }, []);

  return (
    <div css={backgroundStyles.layout}>
      <div css={backgroundStyles.container}>
        {keyboardForBackground.firstLine.map((a, i) => {
          return (
            <div key={i} css={backgroundStyles.key(randomOrder1, i)}>
              {a}
            </div>
          );
        })}
      </div>
      <div css={backgroundStyles.container}>
        {keyboardForBackground.secondLine.map((a, i) => {
          return (
            <div key={i} css={backgroundStyles.key(randomOrder2, i)}>
              {a}
            </div>
          );
        })}
      </div>
      <div css={backgroundStyles.container}>
        {keyboardForBackground.thirdLine.map((a, i) => {
          return (
            <div key={i} css={backgroundStyles.key(randomOrder3, i)}>
              {a}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Background;
