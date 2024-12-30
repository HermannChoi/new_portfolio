"use client";
/** @jsxImportSource @emotion/react */

import {
  firstSectionStyles,
  FSmessageStyles,
} from "../styles/mainStyles/firstSecStyles";
import BlogSection from "./FirstSecComp/BlogSection";
import H1 from "./FirstSecComp/H1";
import ProfileSec from "./FirstSecComp/ProfileSec";
import { resumeInfo } from "../constants/personalInfo";
import { useRecoilValue } from "recoil";
import { languageAtom } from "../atoms/languageAtoms";

const FirstSection = () => {
  const isEnglish = useRecoilValue(languageAtom);
  return (
    <section css={firstSectionStyles.layout}>
      <div css={firstSectionStyles.left}>
        <div css={FSmessageStyles.layout}>
          <div css={FSmessageStyles.emoji}>🔔</div>
          <p css={FSmessageStyles.message}>
            {isEnglish ? `Open to work` : `구직중`}
          </p>
        </div>
      </div>
      <H1 />
      <div css={firstSectionStyles.resumeInfoLayout}>
        {resumeInfo.map((info) => {
          return (
            <div key={info.title}>
              <p css={firstSectionStyles.RI_title}>{info.title}</p>
              <p css={firstSectionStyles.RI_status}>
                {isEnglish ? info.statusEng : info.status}
              </p>
              <p css={firstSectionStyles.RI_date}>{info.date}</p>
              <p css={firstSectionStyles.RI_date}>
                {!isEnglish && info.description}
              </p>
            </div>
          );
        })}
      </div>
      <div css={firstSectionStyles.right}>
        <ProfileSec />
        <BlogSection />
      </div>
    </section>
  );
};

export default FirstSection;
