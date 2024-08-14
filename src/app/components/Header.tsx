"use client";
/** @jsxImportSource @emotion/react */

import React, { useEffect, useState } from "react";
import { headerStyles } from "../styles/headerStyles/headerStyles";

const Header = () => {
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const updateProgress = (): void => {
      const currentScrollPosition = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight + 30;
      let progress =
        Number((currentScrollPosition / scrollHeight).toFixed(2)) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", updateProgress);
  }, []);

  return (
    <header css={headerStyles.header}>
      <nav></nav>
      <div css={headerStyles.progress_container}>
        <div css={headerStyles.progress_bar(scrollProgress)}></div>
      </div>
    </header>
  );
};

export default Header;
