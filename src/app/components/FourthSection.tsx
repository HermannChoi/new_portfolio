"use client";
/** @jsxImportSource @emotion/react */

import {
  commonColors,
  sectionTitleStyle,
} from "../styles/commonStyles/commonStyles";
import { fourthSectionStyles } from "../styles/mainStyles/fourthSecStyles";
import { projectCovers } from "../constants/projectCovers/projectCovers";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import FifthSection from "./FifthSection";
import { useRecoilValue } from "recoil";
import { languageAtom } from "../atoms/languageAtoms";

const FourthSection = () => {
  const [whichHovered, setWhichHovered] = useState<number | null>(null);

  const isEnglish = useRecoilValue(languageAtom);

  return (
    <div css={fourthSectionStyles.outline}>
      <h2 css={sectionTitleStyle}>Projects</h2>
      {projectCovers.map((projCov, i) => {
        return (
          <Link
            key={i}
            className="fade-wrap"
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
                <svg
                  css={fourthSectionStyles.directionImg(whichHovered, i)}
                  width="25px"
                  height="25px"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M18.9762 5.5914L14.6089 18.6932C14.4726 19.1023 13.8939 19.1023 13.7575 18.6932L11.7868 12.7808C11.6974 12.5129 11.4871 12.3026 11.2192 12.2132L5.30683 10.2425C4.89772 10.1061 4.89772 9.52743 5.30683 9.39106L18.4086 5.0238C18.7594 4.90687 19.0931 5.24061 18.9762 5.5914Z"
                    stroke={whichHovered === i ? commonColors.rep : "#ffffff"}
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </p>
              <p css={fourthSectionStyles.description}>
                {isEnglish ? projCov.descriptionEng : projCov.descriptionKor}
              </p>
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
      <FifthSection />
    </div>
  );
};

export default FourthSection;
