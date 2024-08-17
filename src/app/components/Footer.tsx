"use client";
import { useRecoilValue } from "recoil";
/** @jsxImportSource @emotion/react */

import { footerStyles } from "../styles/footerStyles/footerStyles";
import { scrollToTop } from "../utils/scrollToTop";
import { languageAtom } from "../atoms/languageAtoms";

const Footer = () => {
  const isEnglish = useRecoilValue(languageAtom);

  return (
    <footer css={footerStyles.layout}>
      <p className="fade-wrap2" css={footerStyles.text}>
        {isEnglish ? `Thank you for reading` : `감사합니다.`}
      </p>
      <button
        className="fade-wrap2"
        onClick={() => scrollToTop(0)}
        css={footerStyles.btn}
      >
        Back to Top
      </button>
    </footer>
  );
};

export default Footer;
