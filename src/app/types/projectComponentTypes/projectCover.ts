import { StaticImageData } from "next/image";

export interface ProjectCover {
  src: StaticImageData;
  title: string;
  period: string;
  techStack: string[];
  state?: string[];
  description: string;
}
