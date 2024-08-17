"use client";
/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";
import {
  flexColumnCenter,
  mediaWidths,
  sectionTitleStyle,
} from "../styles/commonStyles/commonStyles";
import { fifthSectionStyles } from "../styles/mainStyles/fifthSecStyles";
import { projectFullArchive } from "../constants/projectFullArchive/projectFullArchive";
import { fourthSectionStyles } from "../styles/mainStyles/fourthSecStyles";
import Link from "next/link";

const FifthSection = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const [isSmaller, setIsSmaller] = useState<boolean>(false);

  let thData = isSmaller
    ? ["Year", "Project", "Link"]
    : ["Year", "Project", "Personnel", "Built with", "Link"];

  useEffect(() => {
    const sizeObserver = () => {
      if (window.innerWidth < mediaWidths.fifth) setIsSmaller(true);
      else setIsSmaller(false);
    };
    window.addEventListener("resize", sizeObserver);
  }, []);

  return (
    <div css={flexColumnCenter}>
      {isClicked && (
        <>
          <h2 css={sectionTitleStyle}>All Projects</h2>
          <table>
            <thead css={fifthSectionStyles.thead}>
              <tr css={fifthSectionStyles.tr}>
                {thData.map((title, i) => {
                  return (
                    <th key={i} css={fifthSectionStyles.th}>
                      {title}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {projectFullArchive.map((proj, i) => {
                return (
                  <tr key={i} css={fifthSectionStyles.tr}>
                    <td css={fifthSectionStyles.tdYear}>{proj.year}</td>
                    <td css={fifthSectionStyles.tdName}>{proj.name}</td>
                    {!isSmaller && (
                      <td css={fifthSectionStyles.tdYear}>{proj.personnel}</td>
                    )}
                    {!isSmaller && (
                      <td
                        css={[
                          fourthSectionStyles.stackContainer,
                          fifthSectionStyles.tdBuiltWith,
                        ]}
                      >
                        {proj.techStack.map((stack, i) => {
                          return (
                            <div key={i} css={fourthSectionStyles.stack}>
                              {stack}
                            </div>
                          );
                        })}
                      </td>
                    )}
                    <td css={fifthSectionStyles.tdLink}>
                      <Link href={proj.link} css={fifthSectionStyles.link}>
                        {proj.link}
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      )}
      <button
        onClick={() => setIsClicked(!isClicked)}
        css={fifthSectionStyles.switchBtn}
      >
        {isClicked ? `Minimize` : `View Full Project Archive`}
      </button>
    </div>
  );
};

export default FifthSection;
