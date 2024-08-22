import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import RecoilRootWrapper from "./utils/RecoilWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "최윤석, 디테일 바라기 개발자",
  description: "프론트엔드 최윤석의 포트폴리오",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Jua&family=New+Amsterdam&display=swap"
          rel="stylesheet preload"
          as="style"
          crossOrigin=""
        />
      </head>
      <body className={inter.className}>
        <RecoilRootWrapper>{children}</RecoilRootWrapper>
      </body>
    </html>
  );
}
