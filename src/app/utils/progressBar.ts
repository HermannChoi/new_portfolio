import { Dispatch, SetStateAction } from "react";

export const updateProgress = (
  setState: Dispatch<SetStateAction<number>>
): void => {
  const currentScrollPosition = window.scrollY;
  const scrollHeight = document.body.scrollHeight - window.innerHeight;
  let progress =
    Number((currentScrollPosition / scrollHeight).toFixed(2)) * 100;
  setState(progress);
};
