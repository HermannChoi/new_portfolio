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
import { useEffect, useState } from "react";
import { observer1, observer2 } from "./utils/observers";
import FirstCover from "./components/FirstCover";

export default function Home() {
  const [isCovered, setIsCovered] = useState<boolean>(true);

  useEffect(() => {
    observer1();
    observer2();
    setTimeout(() => {
      setIsCovered(false);
    }, 6000);
  }, []);

  return (
    <>
      {isCovered && <FirstCover />}
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
