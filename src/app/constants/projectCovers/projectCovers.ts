import { ProjectCover } from "@/app/types/projectComponentTypes/projectCover";
import image0 from "@/app/assets/projectImages/takemedicineImg.png";
import image1 from "@/app/assets/projectImages/myportfolioImg.png";
import image2 from "@/app/assets/projectImages/paletteImg.png";
import image3 from "@/app/assets/projectImages/earthidenImg.png";
import image4 from "@/app/assets/projectImages/githubfinderImg.png";

export const projectCovers: ProjectCover[] = [
  {
    src: image0,
    href: `https://take-medicine.vercel.app/`,
    title: "Take Medicine",
    period: "2024.09.10 ~ 2024.10.02 (23D)",
    techStack: [
      "Next.js",
      "TypeScript",
      "Emotion",
      "Zustand",
      "Github Actions",
    ],
    state: ["deployed"],
    descriptionEng:
      "I have implemented a service to prevent confusion about whether I have taken my medication today. The service allows you to store medications based on time slots and activate them with a toggle button, which records the date and time. Additionally, you can set the intake cycle so that once the day has passed, the medication status automatically deactivates.",
    descriptionKor:
      "오늘 먹을 약을 먹었나 헷갈리는 것을 방지하기 위해 만든 서비스입니다. 시간대에 맞춰 약을 저장하고 토글버튼으로 활성화를 할 수 있고 이때 날짜와 시간이 저장됩니다. 또한 먹는 주기를 설정해서 그 날이 지나면 자동으로 약의 복용여부가 비활성화 되게 구현하였습니다.",
  },
  {
    src: image1,
    href: `https://my-portfolio-snowy-tau.vercel.app/`,
    title: "My Portfolio v 1.0",
    period: "2024.05.02 ~ 2024.05.12 (11D)",
    techStack: ["Next.js", "TypeScript", "Emotion", "Github Actions"],
    state: ["deployed"],
    descriptionEng:
      "My first portfolio website. On the first page, I've implemented links to my blog posts, the tech stack I can work with, and image links that lead to my projects.",
    descriptionKor:
      "저의 첫번째 포트폴리오 사이트입니다. 첫번째 페이지에 저의 블로그들과 제가 사용할 수 있는 기술스택, 그리고 저의 프로젝트들을 보러 갈 수 있게 해주는 사진링크를 구현하였습니다.",
  },
  {
    src: image2,
    href: `https://github.com/Happiness-Meta/final-front`,
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
    state: ["deployed"],
    descriptionEng:
      "This is a service for job-seeking developers. It provides users with resume and portfolio templates, along with guided messages for each section to make the writing process easier. Additionally, company members can view these completed resumes and portfolios and hire candidates through a coffee chat service.",
    descriptionKor:
      "구직중인 개발자들을 위한 서비스입니다. 이용자에게 이력서와 포트폴리오의 템플릿을 제공하고 한 섹션마다 가이드 메세지를 보여줘 보다 쉽게 작성할 수 있게 만들수 있도록 디자인하였습니다. 또한 기업 회원은 이렇게 만들어진 이력서 및 포트폴리오를 보고 커피챗을 통해 고용할 수 있는 서비스입니다.",
  },
  {
    src: image3,
    href: `https://github.com/Happiness-Meta/web-ide-front`,
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
    descriptionEng:
      "This is a web-based integrated development service. After logging in, users can CRUD their personal projects and access code file templates that include easy-to-understand code and explanations, designed for beginners. Within the project, users can create files and directories, as well as write and execute code directly in the code editor.",
    descriptionKor:
      "웹 기반 통합 개발 서비스입니다. 로그인을 통해 개인 프로젝트를 CRUD할 수 있고 또한 초심자를 위해 이해하기 쉬운 코드 및 설명이 첨부된 코드파일 템플릿도 제공하고 있습니다. 프로젝트 안에서 파일 및 디렉토리 생성, 그리고 코드 에디터 안에서 코드를 구현 및 실행할 수 있게 구현하였습니다.",
  },
  {
    src: image4,
    href: `https://github.com/HermannChoi/GR3`,
    title: "GitHub Finder",
    period: "2023.10.27 ~ 2023.10.31 (5D)",
    techStack: ["HTML", "CSS", " JavaScript"],
    descriptionEng:
      "This is a service that allows users to search for GitHub profiles and display their information. Various animations have been added to make the experience more engaging. Using the GitHub API, the service displays user information such as name, number of repositories, and contribution frequency on the screen.",
    descriptionKor:
      "깃헙 유저를 검색하여 정보를 보여주는 서비스입니다. 여러가지 애니메이션을 추가해 이용자의 재미를 붙였고, GitHub API를 이용해서 이름, 레포지토리 수, 기여 빈도 수 등 유저의 정보들을 불러와 화면에 띄워지게 구현하였습니다.",
  },
];
