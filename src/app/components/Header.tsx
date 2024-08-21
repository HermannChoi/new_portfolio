/* eslint-disable react-hooks/exhaustive-deps */
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
import { useCookies } from "react-cookie";

const Header = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  const [isEnglish, setIsEnglish] = useRecoilState(languageAtom);

  const [cookies, setCookie] = useCookies(["isEnglish"]);

  const clickLanguage = () => {
    setIsEnglish(!isEnglish);
    setCookie("isEnglish", !isEnglish, {
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
    });
    setTimeout(() => {
      setIsClicked(false);
    }, 500);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => updateProgress(setScrollProgress));
    if (cookies.isEnglish) {
      setIsEnglish(true);
    } else {
      setIsEnglish(false);
    }
  }, []);

  return (
    <header css={headerStyles.header(isClicked)}>
      <div css={headerStyles.progress_container}>
        <div css={headerStyles.progress_bar(scrollProgress)}></div>
      </div>
      <div css={headerStyles.inner}>
        <Image src={cd} alt="CD" priority={true} css={headerStyles.cd} />
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
                  <Link
                    key={i}
                    href={app.href}
                    css={headerStyles.social(app.color)}
                  >
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
