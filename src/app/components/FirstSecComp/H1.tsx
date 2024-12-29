"use client";
/** @jsxImportSource @emotion/react */

import { languageAtom } from "@/app/atoms/languageAtoms";
import { colorRep } from "@/app/styles/commonStyles/commonStyles";
import { firstSectionStyles } from "@/app/styles/mainStyles/firstSecStyles";
import { useRecoilValue } from "recoil";

const H1 = () => {
  const isEnglish = useRecoilValue(languageAtom);

  return (
    <h1 css={firstSectionStyles.h1}>
      {isEnglish ? (
        <>
          <p>
            Hello, this is the <span css={colorRep}>detail-oriented</span>
          </p>
          <p>
            frontend developer, <span css={colorRep}>Yunseok Choi</span>
          </p>
        </>
      ) : (
        <>
          <p>
            안녕하세요, <span css={colorRep}>디테일 바라기</span>
          </p>
          <p>프론트엔드 개발자,</p>
          <p>
            <span css={colorRep}>최윤석</span>입니다.
          </p>
        </>
      )}
    </h1>
  );
};

export default H1;
