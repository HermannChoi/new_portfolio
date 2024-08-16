"use client";
/** @jsxImportSource @emotion/react */

import { sectionTitleStyle } from "../styles/commonStyles/commonStyles";
import { fourthSectionStyles } from "../styles/mainStyles/fourthSecStyles";
import { projectCovers } from "../constants/projectCovers/projectCovers";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const FourthSection = () => {
  const [whichHovered, setWhichHovered] = useState<number | null>(null);

  return (
    <div css={fourthSectionStyles.outline}>
      <h2 css={sectionTitleStyle}>Projects</h2>
      {projectCovers.map((projCov, i) => {
        return (
          <Link
            key={i}
            href={projCov.href}
            onMouseEnter={() => setWhichHovered(i)}
            onMouseLeave={() => setWhichHovered(null)}
            css={fourthSectionStyles.layout}
          >
            <div css={fourthSectionStyles.left}>
              <figure css={fourthSectionStyles.imageContainer}>
                <Image
                  src={projCov.src}
                  alt={projCov.title}
                  css={fourthSectionStyles.imageContainer}
                />
              </figure>
              <div css={fourthSectionStyles.stateContainer}>
                {projCov.state?.map((state, i) => {
                  return (
                    <p key={i} css={fourthSectionStyles.state}>
                      {state}
                    </p>
                  );
                })}
              </div>
            </div>
            <div css={fourthSectionStyles.right}>
              <p css={fourthSectionStyles.title(whichHovered, i)}>
                {projCov.title}
              </p>
              <p css={fourthSectionStyles.description}>{projCov.description}</p>
              <p css={fourthSectionStyles.date}>{projCov.period}</p>

              <div css={fourthSectionStyles.stackContainer}>
                {projCov.techStack.map((stack, i) => {
                  return (
                    <p key={i} css={fourthSectionStyles.stack}>
                      {stack}
                    </p>
                  );
                })}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default FourthSection;
