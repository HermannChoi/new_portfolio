"use client";
/** @jsxImportSource @emotion/react */

import { sectionTitleStyle } from "../styles/commonStyles/commonStyles";
import { fourthSectionStyles } from "../styles/mainStyles/fourthSecStyles";
import { projectCovers } from "../constants/projectCovers/projectCovers";
import Image from "next/image";

const FourthSection = () => {
  return (
    <div css={fourthSectionStyles.outline}>
      <h2 css={sectionTitleStyle}>Projects</h2>
      {projectCovers.map((projCov, i) => {
        return (
          <div key={i} css={fourthSectionStyles.layout}>
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
              <p css={fourthSectionStyles.title}>{projCov.title}</p>
              <p css={fourthSectionStyles.description}>{projCov.description}</p>
              <p css={fourthSectionStyles.date}>{projCov.period}</p>

              <div css={fourthSectionStyles.stackContainer}>
                {projCov.techStack.map((stack) => {
                  return <p css={fourthSectionStyles.stack}>{stack}</p>;
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FourthSection;
