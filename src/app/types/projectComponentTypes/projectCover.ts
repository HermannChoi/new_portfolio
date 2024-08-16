import { StaticImageData } from "next/image";

export interface ProjectCover {
  src: StaticImageData;
  href: string;
  title: string;
  period: string;
  techStack: string[];
  state?: string[];
  description: string;
}
