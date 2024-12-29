"use client";
/** @jsxImportSource @emotion/react */

import { footerStyles } from "../styles/footerStyles/footerStyles";
import { scrollToTop } from "../utils/scrollToTop";
import { languageAtom } from "../atoms/languageAtoms";
import { useRecoilValue } from "recoil";
import Image from "next/image";
import copy from "@/app/assets/svg/copy.svg";
import { clickCopyBtn } from "../utils/clickCopyEmail";
import { myEmail } from "../constants/personalInfo";

const Footer = () => {
  const isEnglish = useRecoilValue(languageAtom);

  return (
    <footer css={footerStyles.layout}>
      <p
        // className="fade-wrap2"
        css={footerStyles.thankYou}
      >
        {isEnglish ? `Thank you for reading` : `감사합니다.`}
      </p>
    </footer>
  );
};

export default Footer;
