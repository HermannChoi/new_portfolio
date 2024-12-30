"use client";

/** @jsxImportSource @emotion/react */

import Background from "../components/Background";
import { useRouter } from "next/navigation";
import { useRecoilValue } from "recoil";
import { projectAtom } from "../atoms/projectAtoms";
import { useEffect } from "react";
import { projectPageStyles } from "../styles/projectPageStyles/projectPageStyles";
import { fourthSectionStyles } from "../styles/mainStyles/fourthSecStyles";
import Link from "next/link";
import { css } from "@emotion/react";

const ProjectPage = () => {
  const router = useRouter();

  const project = useRecoilValue(projectAtom);

  useEffect(() => {
    if (project.title === "") router.push("/");
  }, []);

  return (
    <div>
      <div css={projectPageStyles.header}>
        <Link href={"/"} css={projectPageStyles.backButton}>
          {"<"}
        </Link>
      </div>
      <div css={projectPageStyles.layout}>
        <div css={projectPageStyles.firstInfoLayout}>
          <div css={projectPageStyles.left}>
            <p css={projectPageStyles.title}>{project.title}</p>
            <p css={projectPageStyles.date}>{project.period}</p>
            <div css={fourthSectionStyles.stackContainer}>
              {project.techStack.map((tech) => {
                return (
                  <p key={tech} css={fourthSectionStyles.stack}>
                    {tech}
                  </p>
                );
              })}
            </div>
            <p css={projectPageStyles.description}>{project.descriptionKor}</p>
            <p>
              Github :{" "}
              {project.github !== undefined && (
                <Link
                  href={project.github}
                  css={[
                    css`
                      font-family: none;
                      text-decoration: underline;
                    `,
                  ]}
                >
                  {project.github}
                </Link>
              )}
            </p>
          </div>
          {/* <div css={projectPageStyles.right}>
            {project.src !== undefined && (
              <Image
                src={project.src!}
                alt="projectPicture"
                css={projectPageStyles.image}
              />
            )}
          </div> */}
        </div>
        <div css={projectPageStyles.TS_InnerLayout}>
          <p css={projectPageStyles.TS_left}>Performance</p>
          <p css={projectPageStyles.TS_right}>{project.performance}</p>
        </div>
        {project.troubleshooting?.map((troubleshooting, i) => {
          return (
            <div key={i} css={projectPageStyles.troubleshootingLayout}>
              <div css={projectPageStyles.TS_InnerLayout}>
                <p css={projectPageStyles.TS_left}>Problem {i + 1}</p>
                <p css={projectPageStyles.TS_right}>
                  {troubleshooting.problem}
                </p>
              </div>
              <div css={projectPageStyles.TS_InnerLayout}>
                <p css={projectPageStyles.TS_left}>Solution</p>
                <p css={projectPageStyles.TS_right}>
                  {troubleshooting.solution}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <Background />
    </div>
  );
};

export default ProjectPage;
