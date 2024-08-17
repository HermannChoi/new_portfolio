"use client";
/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";
import { headerStyles } from "../styles/headerStyles/headerStyles";
import Image from "next/image";
import cd from "@/app/assets/svg/cd.svg";
import { updateProgress } from "../utils/progressBar";
import { useRecoilState } from "recoil";
import { languageAtom } from "../atoms/languageAtoms";
import { social } from "../constants/blogs";
import Link from "next/link";

const Header = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  const [isEnglish, setIsEnglish] = useRecoilState(languageAtom);

  const clickLanguage = () => {
    setIsEnglish(!isEnglish);
    setTimeout(() => {
      setIsClicked(false);
    }, 500);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => updateProgress(setScrollProgress));
    console.log(isEnglish);
  }, []);

  return (
    <header css={headerStyles.header(isClicked)}>
      <div css={headerStyles.progress_container}>
        <div css={headerStyles.progress_bar(scrollProgress)}></div>
      </div>
      <div css={headerStyles.inner}>
        <Image src={cd} alt="CD" css={headerStyles.cd} />
        {isClicked && (
          <div css={headerStyles.contentsContainer}>
            <button
              onClick={() => clickLanguage()}
              css={headerStyles.languageBtn}
            >
              <div css={headerStyles.eng(isEnglish)}>ENG</div>
              <div css={headerStyles.kor(isEnglish)}>KOR</div>
            </button>
            <div css={headerStyles.socialContainer}>
              {social.map((app, i) => {
                return (
                  <Link href={app.href} css={headerStyles.social}>
                    <Image
                      src={require(`@/app/assets/svg/${app.name.toLowerCase()}.svg`)}
                      alt={app.name}
                      width={60}
                      height={60}
                    />
                    {app.name}
                  </Link>
                );
              })}
            </div>
          </div>
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
