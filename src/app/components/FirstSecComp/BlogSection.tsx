"use client";
/** @jsxImportSource @emotion/react */

import { blogs } from "@/app/constants/blogs";
import { delayShowUpAni } from "@/app/styles/commonStyles/commonStyles";
import { personalLinks } from "@/app/styles/mainStyles/firstSecStyles";
import Image from "next/image";
import github from "@/app/assets/svg/github.svg";
import velog from "@/app/assets/svg/velog.svg";
import notion from "@/app/assets/svg/notion.svg";
import resume from "@/app/assets/svg/resume.svg";
import Link from "next/link";

const BlogSection = () => {
  const images = [github, velog, notion, resume];

  return (
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
              alt={blog.name + i}
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
          delayShowUpAni(0.5 + 1),
        ]}
      >
        Contact Me
      </button>
    </div>
  );
};

export default BlogSection;
