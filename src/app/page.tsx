"use client";
/** @jsxImportSource @emotion/react */

import { mainStyles } from "./styles/mainStyles/mainStyles";
import FirstSection from "./components/FirstSection";
import Header from "./components/Header";
import Background from "./components/Background";
import SecondSection from "./components/SecondSection";
import ThirdSection from "./components/ThirdSection";
import FourthSection from "./components/FourthSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Background />
      <Header />
      <main css={mainStyles.main}>
        <FirstSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
      </main>
      <Footer />
    </>
  );
}
