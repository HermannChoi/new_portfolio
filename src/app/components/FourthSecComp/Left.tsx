"use client";
/** @jsxImportSource @emotion/react */

import { fourthSectionStyles } from "@/app/styles/mainStyles/fourthSecStyles";
import { ProjectCover } from "@/app/types/projectComponentTypes/projectCover";
import Image from "next/image";
import React from "react";

interface LeftProps {
  projCov: ProjectCover;
}

const Left: React.FC<LeftProps> = ({ projCov }) => {
  return (
    <div css={fourthSectionStyles.left}>
      <figure css={fourthSectionStyles.imageContainer}>
        <Image
          src={projCov.src}
          alt={projCov.title}
          loading="lazy"
          placeholder={"empty"}
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
  );
};

export default Left;
