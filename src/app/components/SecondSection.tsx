"use client";
import Image from "next/image";
/** @jsxImportSource @emotion/react */

import { techStacks } from "../constants/techStack/techStack";
import { secondSectionStyles } from "../styles/mainStyles/secondSecStyles";

const SecondSection = () => {
  return (
    <section css={secondSectionStyles.layout}>
      <h2 css={secondSectionStyles.title}>Tech Stacks</h2>
      <div css={secondSectionStyles.main}>
        {techStacks.map((tech, i) => {
          return (
            <div key={i} css={secondSectionStyles.outerContainer}>
              <div css={secondSectionStyles.innerContainer}>
                <p css={secondSectionStyles.techTitle}>{tech.title}</p>
                <div css={secondSectionStyles.techContentLayout}>
                  {tech.contents.map((content, index) => {
                    const imageSrc =
                      content === `Emotion` || content === `Zustand`
                        ? require(`@/app/assets/svg/${content.toLocaleLowerCase()}.png`)
                        : require(`@/app/assets/svg/${content.toLocaleLowerCase()}.svg`);
                    return (
                      <div
                        key={index}
                        css={secondSectionStyles.techContentContainer}
                      >
                        <Image
                          src={imageSrc}
                          alt={content}
                          width={30}
                          height={30}
                        />
                        <p css={secondSectionStyles.techContent}>{content}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SecondSection;
