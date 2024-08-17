"use client";
/** @jsxImportSource @emotion/react */

import { footerStyles } from "../styles/footerStyles/footerStyles";
import { scrollToTop } from "../utils/scrollToTop";

const Footer = () => {
  return (
    <footer css={footerStyles.layout}>
      <p className="fade-wrap2" css={footerStyles.text}>
        Thank you for reading
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
