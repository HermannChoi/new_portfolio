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
      <p className="fade-wrap2" css={footerStyles.thankYou}>
        {isEnglish ? `Thank you for reading` : `감사합니다.`}
      </p>
      <button
        className="fade-wrap2"
        onClick={() => clickCopyBtn(isEnglish)}
        css={footerStyles.contactCopyBtn}
      >
        <Image src={copy} alt="copy" loading="lazy" width={25} height={25} />
        <p css={footerStyles.contactTitle}>Contact : </p>
        <p css={footerStyles.email}>{myEmail}</p>
      </button>
      <button
        className="fade-wrap2"
        onClick={() => scrollToTop(0)}
        css={footerStyles.backToTopBtn}
      >
        Back to Top
      </button>
    </footer>
  );
};

export default Footer;
