"use client";
/** @jsxImportSource @emotion/react */

import Image from "next/image";
import github from "@/app/assets/svg/github.svg";
import velog from "@/app/assets/svg/velog.svg";
import notion from "@/app/assets/svg/notion.svg";
import profile from "@/app/assets/profile/profile.jpg";

import { colorRep, delayShowUpAni } from "../styles/commonStyles/commonStyles";
import {
  firstSectionStyles,
  FSmessageStyles,
  personalLinks,
} from "../styles/mainStyles/firstSecStyles";
import Link from "next/link";
import { blogs } from "../constants/blogs";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { languageAtom } from "../atoms/languageAtoms";

const FirstSection = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const isEnglish = useRecoilValue(languageAtom);

  const images = [github, velog, notion];

  return (
    <section className="fade-wrap" css={firstSectionStyles.layout}>
      <div css={firstSectionStyles.left}>
        <div css={FSmessageStyles.layout}>
          <div css={FSmessageStyles.emoji}>✌️</div>
          <p css={FSmessageStyles.message}>Open to work</p>
        </div>

        {isEnglish ? (
          <h1 css={firstSectionStyles.h1}>
            Hello, this is the <span css={colorRep}>detail-oriented</span>{" "}
            frontend developer, <span css={colorRep}>Yunseok Choi</span>
          </h1>
        ) : (
          <h1 css={firstSectionStyles.h1}>
            안녕하세요, <span css={colorRep}>디테일 바라기</span> 프론트엔드
            개발자, <span css={colorRep}>최윤석</span>입니다.
          </h1>
        )}

        <div css={personalLinks.container}>
          {blogs.map((blog, i) => {
            return (
              <Link
                key={i}
                href={blog.href}
                target="_blank"
                rel="noopener noreferrer"
                css={[personalLinks.layout, delayShowUpAni(i / 8 + 1)]}
              >
                <Image
                  src={images[i]}
                  alt={blog.name}
                  css={personalLinks.image}
                ></Image>
                <p css={personalLinks.name}>{blog.name}</p>
              </Link>
            );
          })}
          <button
            onClick={() =>
              (window.location.href = `mailto: hiyunseok347@gmail.com`)
            }
            css={[
              personalLinks.layout,
              personalLinks.name,
              `min-width: 115px;`,
              delayShowUpAni(1.38),
            ]}
          >
            Contact Me
          </button>
        </div>
      </div>
      <div css={firstSectionStyles.right}>
        <div css={firstSectionStyles.flip}>
          <div css={firstSectionStyles.card(isClicked)}>
            <Image
              src={profile}
              alt="profile"
              priority={true}
              css={firstSectionStyles.card_front(isClicked)}
            />
            <button
              onClick={() => setIsClicked(!isClicked)}
              css={firstSectionStyles.profileBtn(isClicked)}
            >
              <Image
                src={profile}
                alt="profile"
                priority={true}
                css={firstSectionStyles.profileImage}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
