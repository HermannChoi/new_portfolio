"use client";
/** @jsxImportSource @emotion/react */

import { sectionTitleStyle } from "../styles/commonStyles/commonStyles";
import { fourthSectionStyles } from "../styles/mainStyles/fourthSecStyles";
import { projectCovers } from "../constants/projectCovers/projectCovers";
import { useState } from "react";
import Link from "next/link";
import FifthSection from "./FifthSection";
import Left from "./FourthSecComp/Left";
import Right from "./FourthSecComp/Right";
import { projectAtom } from "../atoms/projectAtoms";
import { useRecoilState } from "recoil";
import { ProjectCover } from "../types/projectComponentTypes/projectCover";

const FourthSection = () => {
  const [whichHovered, setWhichHovered] = useState<number | null>(null);

  const [, setClickedProject] = useRecoilState(projectAtom);

  const handleClickProject = (project: ProjectCover) => {
    setClickedProject(project);
  };

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
            onClick={() => handleClickProject(projCov)}
            css={fourthSectionStyles.layout}
          >
            <Left projCov={projCov} />
            <Right projCov={projCov} whichHovered={whichHovered} i={i} />
          </Link>
        );
      })}
      <FifthSection />
    </div>
  );
};

export default FourthSection;
