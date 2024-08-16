"use client";
import Image from "next/image";
/** @jsxImportSource @emotion/react */

import { techStacks } from "../constants/techStack/techStack";
import { secondSectionStyles } from "../styles/mainStyles/secondSecStyles";
import Link from "next/link";

const SecondSection = () => {
  return (
    <section css={secondSectionStyles.layout}>
      <h2 css={secondSectionStyles.title}>Tech Stacks</h2>
      <div css={secondSectionStyles.main}>
        <div css={secondSectionStyles.outerContainer}>
          {techStacks.map((tech, i) => {
            return (
              <div key={i} css={secondSectionStyles.innerContainer}>
                <p css={secondSectionStyles.techTitle}>{tech.title}</p>
                <div css={secondSectionStyles.techContentLayout}>
                  {tech.contents.map((content, index) => {
                    const imageSrc =
                      content.name === `Emotion` || content.name === `Zustand`
                        ? require(`@/app/assets/svg/${content.name.toLocaleLowerCase()}.png`)
                        : require(`@/app/assets/svg/${content.name.toLocaleLowerCase()}.svg`);
                    return (
                      <Link
                        key={index}
                        href={content.link}
                        css={secondSectionStyles.techContentContainer}
                      >
                        <Image
                          src={imageSrc}
                          alt={content.link + ` stack`}
                          css={secondSectionStyles.techImage}
                        />
                        <p css={secondSectionStyles.techContent}>
                          {content.name}
                        </p>
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
