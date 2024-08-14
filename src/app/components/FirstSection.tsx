"use client";
/** @jsxImportSource @emotion/react */

import Image from "next/image";
import github from "@/app/assets/svg/github.svg";
import velog from "@/app/assets/svg/velog.svg";
import notion from "@/app/assets/svg/notion.svg";

import { colorRep } from "../styles/commonStyles/commonStyles";
import {
  firstSectionStyles,
  FSmessageStyles,
  personalLinks,
} from "../styles/mainStyles/firstSecStyles";
import Link from "next/link";
import { blogs } from "../constants/blogs";

const FirstSection = () => {
  const images = [github, velog, notion];

  return (
    <section css={firstSectionStyles.layout}>
      <div css={firstSectionStyles.left}>
        <div css={FSmessageStyles.layout}>
          <div css={FSmessageStyles.emoji}>✌️</div>
          <p css={FSmessageStyles.message}>Open to work</p>
        </div>
        <h1 css={firstSectionStyles.h1}>
          Hello, this is the <span css={colorRep}>detail-oriented</span>{" "}
          frontend developer, <span css={colorRep}>Yunseok Choi</span>
        </h1>
        <div css={personalLinks.container}>
          {blogs.map((blog, i) => {
            return (
              <Link
                key={i}
                href={blog.href}
                target="_blank"
                rel="noopener noreferrer"
                css={personalLinks.layout}
              >
                <Image
                  src={images[i]}
                  alt="github"
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
            css={[personalLinks.layout, personalLinks.name]}
          >
            Contact Me
          </button>
        </div>
      </div>
      <div css={firstSectionStyles.right}>image</div>
    </section>
  );
};

export default FirstSection;
