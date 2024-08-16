import { keyframes } from "@emotion/react";

export const fadeIn = keyframes`
from {opacity: 0;}
to {opacity: 1;}
`;

export const fadeIn2 = keyframes`
from {opacity: 0; transform: translateY(-20px)}
to {opacity: 1;}
`;

export const fadeOut = keyframes`
from {opacity:1;} 
to {opacity:0; display:none;}
`;

export const showUp = keyframes`
from {transform: translateY(-15px); opacity:0;}
to {transform: translateY(0); opacity:1;}
`;

export const showUp2 = keyframes`
from {transform: translateY(15px); opacity:0;}
to {transform: translateY(0); opacity:1;}
`;

export const firSecLeftAni = keyframes`
from {opacity: 0; transform: translateX(-50%)}
to {opacity: 1; transform: translateX(0%)}
`;

export const firSecRightAni = keyframes`
from {opacity: 0; transform: translateX(50%)}
to {opacity: 1; transform: translateX(0%)}
`;

export const rotate360 = keyframes`
  0% { 
    transform: rotate(0deg) scale(1);
  }
  40% { 
    transform: rotate(144deg) scale(1);
  }
  
  /* 첫 번째 진동 */
  43% { 
    transform: rotate(154.8deg) scale(1.05);
  }
  45% { 
    transform: rotate(162deg) scale(1.1);
  }
  50% { 
    transform: rotate(180deg) scale(1);
  }
  /* 두 번째 진동 */
  73% { 
    transform: rotate(262.8deg) scale(1.05);
  }
  75% { 
    transform: rotate(270deg) scale(1.1);
  }
  80% { 
    transform: rotate(288deg) scale(1);
  }
  100% { 
    transform: rotate(360deg) scale(1);
  }
`;

export const emojiAni = keyframes`
30% {transform: scale(1.2)}
40% {transform: scale(1.2)}
55% {transform: scale(1.2) rotate(30deg)}
70% {transform: scale(1.2) rotate(-30deg)}
100% {transform: scale(1)}
`;
