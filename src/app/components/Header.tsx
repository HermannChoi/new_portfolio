"use client";
/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";
import { headerStyles } from "../styles/headerStyles/headerStyles";
import Image from "next/image";
import cd from "@/app/assets/svg/cd.svg";

const Header = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const updateProgress = (): void => {
      const currentScrollPosition = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;
      let progress =
        Number((currentScrollPosition / scrollHeight).toFixed(2)) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", updateProgress);
  }, []);

  return (
    <header css={headerStyles.header}>
      <div css={headerStyles.progress_container}>
        <div css={headerStyles.progress_bar(scrollProgress)}></div>
      </div>
      <div css={headerStyles.inner}>
        <Image src={cd} alt="CD" css={headerStyles.cd} />
        <button
          onClick={() => setIsClicked(!isClicked)}
          css={headerStyles.menu}
        >
          <div css={headerStyles.menubar1(isClicked)} />
        </button>
      </div>
    </header>
  );
};

export default Header;
