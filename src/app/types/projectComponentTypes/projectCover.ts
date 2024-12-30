import { StaticImageData } from "next/image";

export interface ProjectCover {
  src?: StaticImageData;
  href: string;
  github?: string;
  velog?: string;
  title: string;
  period: string;
  techStack: string[];
  state?: string[];
  descriptionEng: string;
  descriptionKor: string;
  performance?: string;
  troubleshooting?: Troubleshooting[];
}

interface Troubleshooting {
  problem: string;
  solution: string;
}
