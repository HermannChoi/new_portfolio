"use client";
/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { flexCenterX2 } from "./styles/commonStyles/commonStyles";

export default function Home() {
  return (
    <>
      <header
        css={[
          css`
            width: 100%;
            height: 50px;
            background-color: #00674e;
          `,
        ]}
      >
        <nav></nav>
      </header>

      <main
        css={[
          css`
            width: 100%;
            padding: 50px;
          `,
        ]}
      >
        <section
          css={[
            css`
              display: flex;
              gap: 20px;
            `,
          ]}
        >
          <div
            css={[
              css`
                flex: 1.5;
                display: flex;
                flex-direction: column;
              `,
            ]}
          >
            <div
              css={[
                flexCenterX2,
                css`
                  width: fit-content;
                  padding: 5px 10px;
                  border-radius: 5px;
                  margin-bottom: 10px;
                  background-color: #0cd5a490;
                `,
              ]}
            >
              <div
                css={[
                  css`
                    font-size: 1.5rem;
                    margin-right: 10px;
                  `,
                ]}
              >
                ✌️
              </div>
              <p
                css={[
                  css`
                    font-size: 1.2rem;
                    font-family: monospace;
                  `,
                ]}
              >{`Pick me up`}</p>
            </div>
            <p
              css={[
                css`
                  font-size: 3rem;
                `,
              ]}
            >
              Hello, this is the{" "}
              <span
                css={[
                  css`
                    color: #00674e;
                  `,
                ]}
              >
                detail-oriented
              </span>{" "}
              frontend developer,{" "}
              <span
                css={[
                  css`
                    color: #00674e;
                  `,
                ]}
              >
                Yunseok Choi
              </span>
            </p>
            <p>
              When designing and implementing the front-end code for a website,
              my goal is to create a seamless experience where the user feels
              fully integrated with the service, as if they are one with the
              site. I focus on the details, always thinking about how to enhance
              user satisfaction, and craft the code with precision to ensure the
              product itself serves its purpose effectively.
            </p>
          </div>
          <div
            css={[
              css`
                flex: 1;
              `,
            ]}
          >
            d
          </div>
        </section>
      </main>
    </>
  );
}
