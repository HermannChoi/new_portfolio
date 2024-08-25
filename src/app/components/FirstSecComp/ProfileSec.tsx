"use client";
/** @jsxImportSource @emotion/react */

import { delayShowUpAni } from "@/app/styles/commonStyles/commonStyles";
import { firstSectionStyles } from "@/app/styles/mainStyles/firstSecStyles";
import Image from "next/image";
import profile from "@/app/assets/profile/profile.jpg";
import { useState } from "react";

const ProfileSec = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  return (
    <div css={[firstSectionStyles.flip, delayShowUpAni(2)]}>
      <div css={firstSectionStyles.card(isClicked)}>
        <Image
          src={profile}
          alt="profile"
          loading="lazy"
          css={firstSectionStyles.card_front(isClicked)}
        />
        <button
          onClick={() => setIsClicked(!isClicked)}
          css={firstSectionStyles.profileBtn(isClicked)}
        >
          <Image
            src={profile}
            alt="profile"
            priority={true}
            css={firstSectionStyles.profileImage}
          />
        </button>
      </div>
    </div>
  );
};

export default ProfileSec;
