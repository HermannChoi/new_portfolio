"use client";
/** @jsxImportSource @emotion/react */

import { blogs } from "@/app/constants/blogs";
import { personalLinks } from "@/app/styles/mainStyles/firstSecStyles";
import Image from "next/image";
import github from "@/app/assets/svg/github.svg";
import velog from "@/app/assets/svg/velog.svg";
import resume from "@/app/assets/svg/resume.svg";
import copy from "@/app/assets/svg/copy.svg";
import Link from "next/link";
import { clickCopyBtn } from "@/app/utils/clickCopyEmail";
import { useRecoilValue } from "recoil";
import { languageAtom } from "@/app/atoms/languageAtoms";

const BlogSection = () => {
  const isEnglish = useRecoilValue(languageAtom);

  const images = [github, velog, resume];

  return (
    <div css={personalLinks.container}>
      {blogs.map((blog, i) => {
        return (
          <Link
            key={i}
            href={blog.href}
            target="_blank"
            rel="noopener noreferrer"
            css={[personalLinks.layout]}
          >
            <Image
              src={images[i]}
              alt={blog.name + i}
              css={personalLinks.image}
            ></Image>
            <p css={personalLinks.name}>{blog.name}</p>
          </Link>
        );
      })}
      <button
        onClick={() => clickCopyBtn(isEnglish)}
        css={[personalLinks.layout, personalLinks.name]}
      >
        <Image src={copy} alt="copy" loading="lazy" width={25} height={25} />
        <p css={personalLinks.name}>Contact Me</p>
      </button>
    </div>
  );
};

export default BlogSection;
