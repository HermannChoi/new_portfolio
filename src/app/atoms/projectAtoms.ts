import { atom } from "recoil";
import { ProjectCover } from "../types/projectComponentTypes/projectCover";

export const projectAtom = atom<ProjectCover>({
  key: "projectAtom",
  default: {
    href: "",
    title: "",
    period: "",
    techStack: [],
    state: [],
    descriptionEng: "",
    descriptionKor: "",
    troubleshooting: [{ problem: "", solution: "" }],
  },
});
