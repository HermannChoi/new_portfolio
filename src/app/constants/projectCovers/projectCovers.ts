import { ProjectCover } from "@/app/types/projectComponentTypes/projectCover";
import image1 from "@/app/assets/projectImages/myPortfolio/image1.png";
import image2 from "@/app/assets/projectImages/palette/image1.png";
import image3 from "@/app/assets/projectImages/earthIdeN/image1.png";
import image4 from "@/app/assets/projectImages/githubFinder/image1.png";

export const projectCovers: ProjectCover[] = [
  {
    src: image1,
    title: "My Portfolio v 1.0",
    period: "2024.05.02 ~ 2024.05.12 (11D)",
    techStack: ["Next.js", "TypeScript", "Emotion", "GitHub Actions"],
    state: ["deployed", "server alive"],
    description:
      "저의 첫번째 포트폴리오 사이트입니다. 첫번째 페이지에 저의 블로그들과 제가 사용할 수 있는 기술스택, 그리고 저의 프로젝트들을 보러 갈 수 있게 해주는 사진링크를 구현하였습니다.",
  },
  {
    src: image2,
    title: "Palette*",
    period: "2024.03.04 ~ 2024.04.22 (49D)",
    techStack: [
      "Next.js",
      "TypeScript",
      "Emotion",
      "React-query",
      "Zustand",
      "Github Actions",
    ],
    state: ["deployed", "server alive"],
    description:
      "구직중인 개발자들을 위한 서비스입니다. 이용자들의 이력서와 포트폴리오의 템플릿 제공 및 한 섹션마다 가이드 메세지를 통해 보다 쉽게 작성할 수 있게 만들었습니다. 또한 기업 회원은 이렇게 만들어진 이력서 및 포트폴리오를 보고 커피챗을 통해 고용할 수 있는 서비스입니다.",
  },
  {
    src: image3,
    title: "Earth-IDE-N",
    period: "2024.01.28 ~ 2024.02.28 (32D)",
    techStack: [
      "React",
      "vite",
      "TypeScript",
      "SCSS",
      "Zustand",
      "React-query",
    ],
    state: ["deployed"],
    description:
      "웹 기반 통합 개발 서비스입니다. 로그인을 통해 개인 프로젝트를 CRUD할 수 있고 또한 초심자를 위해 이해하기 쉬운 코드 및 설명이 첨부된 코드파일 템플릿도 제공하고 있습니다. 프로젝트 안에서 파일 및 디렉토리 생성, 그리고 코드 에디터 안에서 코드를 구현 및 실행할 수 있게 구현하였습니다.",
  },
  {
    src: image4,
    title: "GitHub Finder",
    period: "2023.10.27 ~ 2023.10.31 (5D)",
    techStack: ["HTML", "CSS", " JavaScript"],
    description:
      "깃헙 유저를 검색하여 정보를 보여주는 서비스입니다. 여러가지 애니메이션을 추가해 이용자의 재미를 붙였고, GitHub API를 이용해서 이름, 레포지토리 수, 기여 빈도 수 등 유저의 정보들을 불러와 화면에 띄워지게 구현하였습니다.",
  },
];
