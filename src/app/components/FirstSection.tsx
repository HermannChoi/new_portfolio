"use client";
/** @jsxImportSource @emotion/react */

import {
  firstSectionStyles,
  FSmessageStyles,
} from "../styles/mainStyles/firstSecStyles";
import BlogSection from "./FirstSecComp/BlogSection";
import H1 from "./FirstSecComp/H1";
import ProfileSec from "./FirstSecComp/ProfileSec";

const FirstSection = () => {
  return (
    <section css={firstSectionStyles.layout}>
      <div css={firstSectionStyles.left}>
        <div css={FSmessageStyles.layout}>
          <div css={FSmessageStyles.emoji}>✌️</div>
          <p css={FSmessageStyles.message}>Open to work</p>
        </div>
        <H1 />
        <BlogSection />
      </div>
      <div css={firstSectionStyles.right}>
        <ProfileSec />
      </div>
    </section>
  );
};

export default FirstSection;
