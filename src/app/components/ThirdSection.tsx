"use client";
/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import {
  colorRep,
  flexColumnCenter,
  mediaWidths,
  sectionTitleStyle,
} from "../styles/commonStyles/commonStyles";
import { useRecoilValue } from "recoil";
import { languageAtom } from "../atoms/languageAtoms";

const ThirdSection = () => {
  const isEnglish = useRecoilValue(languageAtom);

  const pStyle = [
    css`
      font-size: 3rem;
      font-weight: 500;
      text-align: center;

      @media (max-width: ${mediaWidths.third}px) {
        font-size: 2rem;
      }
    `,
  ];

  return (
    <section className="fade-wrap2" css={[flexColumnCenter]}>
      <h2 css={sectionTitleStyle}>My Objective</h2>
      {isEnglish ? (
        <p css={pStyle}>
          When designing and implementing the front-end code for a website, my
          goal is to create a <span css={colorRep}>seamless experience</span>{" "}
          where the user feels <span css={colorRep}>fully integrated</span> with
          the service, as if they are one with the site. I focus on the details,
          always thinking about how to enhance{" "}
          <span css={colorRep}>user satisfaction</span>, and craft the code with
          precision to ensure the product itself serves its purpose{" "}
          <span css={colorRep}>effectively</span>.
        </p>
      ) : (
        <p css={pStyle}>
          사용자가 서비스를 이용할 때 사이트와 하나가 된 것 같은{" "}
          <span css={colorRep}>일체감</span> 및{" "}
          <span css={colorRep}>물 흐르듯 진행</span>이 되는 것을 목표로 사이트를
          디자인 및 프론트 코드를 구현합니다. 또한 어떻게 해야 사용자가{" "}
          <span css={colorRep}>만족감</span>을 느낄까 생각하며{" "}
          <span css={colorRep}>디테일</span>을 챙기면서 코드를 구현함으로써
          프로덕트를 만드는 목적 자체에 집중합니다.
        </p>
      )}
    </section>
  );
};

export default ThirdSection;
