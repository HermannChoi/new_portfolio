import { myEmail } from "../constants/personalInfo";

export const clickCopyBtn = (isEnglish: boolean) => {
  navigator.clipboard.writeText(myEmail).then(() => {
    alert(
      isEnglish
        ? "You have successfully copied my email!"
        : "이메일이 복사되었습니다."
    );
  });
};
