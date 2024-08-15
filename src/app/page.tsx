"use client";
/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { mainStyles } from "./styles/mainStyles/mainStyles";
import FirstSection from "./components/FirstSection";
import Header from "./components/Header";
import Background from "./components/Background";
import SecondSection from "./components/SecondSection";

export default function Home() {
  return (
    <>
      <Background />
      <Header />
      <main css={mainStyles.main}>
        <FirstSection />
        <SecondSection />
        <section
          css={css`
            height: 70vh;
          `}
        >
          <p
            css={[
              css`
                font-size: 3rem;
              `,
            ]}
          >
            When designing and implementing the front-end code for a website, my
            goal is to create a seamless experience where the user feels fully
            integrated with the service, as if they are one with the site. I
            focus on the details, always thinking about how to enhance user
            satisfaction, and craft the code with precision to ensure the
            product itself serves its purpose effectively.
          </p>
        </section>
      </main>
    </>
  );
}
