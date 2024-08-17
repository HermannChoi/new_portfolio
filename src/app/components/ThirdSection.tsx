"use client";
/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import {
  colorRep,
  flexColumnCenter,
  mediaWidths,
  sectionTitleStyle,
} from "../styles/commonStyles/commonStyles";

const ThirdSection = () => {
  return (
    <section className="fade-wrap2" css={[flexColumnCenter]}>
      <h2 css={sectionTitleStyle}>My Objective</h2>
      <p
        css={[
          css`
            font-size: 3rem;
            text-align: center;

            @media (max-width: ${mediaWidths.third}px) {
              font-size: 2rem;
            }
          `,
        ]}
      >
        When designing and implementing the front-end code for a website, my
        goal is to create a <span css={colorRep}>seamless experience</span>{" "}
        where the user feels <span css={colorRep}>fully integrated</span> with
        the service, as if they are one with the site. I focus on the details,
        always thinking about how to enhance{" "}
        <span css={colorRep}>user satisfaction</span>, and craft the code with
        precision to ensure the product itself serves its purpose{" "}
        <span css={colorRep}>effectively</span>.
      </p>
    </section>
  );
};

export default ThirdSection;
