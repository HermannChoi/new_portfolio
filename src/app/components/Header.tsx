"use client";
/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";
import { headerStyles } from "../styles/headerStyles/headerStyles";
import Image from "next/image";
import cd from "@/app/assets/svg/cd.svg";
import { updateProgress } from "../utils/progressBar";

const Header = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    window.addEventListener("scroll", () => updateProgress(setScrollProgress));
  }, []);

  return (
    <header css={headerStyles.header(isClicked)}>
      <div css={headerStyles.progress_container}>
        <div css={headerStyles.progress_bar(scrollProgress)}></div>
      </div>
      <div css={headerStyles.inner}>
        <Image src={cd} alt="CD" css={headerStyles.cd} />
        {isClicked && (
          <div css={headerStyles.contentsContainer}>Coming soon</div>
        )}
        <button
          onClick={() => setIsClicked(!isClicked)}
          css={headerStyles.menu}
        >
          <label css={[`position: absolute; color: transparent`]}>menu</label>
          <div css={headerStyles.menubar1(isClicked)} />
        </button>
      </div>
    </header>
  );
};

export default Header;
