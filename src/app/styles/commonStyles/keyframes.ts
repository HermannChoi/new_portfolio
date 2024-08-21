import { keyframes } from "@emotion/react";

export const fadeIn = keyframes`
from {opacity: 0;}
to {opacity: 1;}
`;

export const showUp = keyframes`
from {transform: translateY(-15px); opacity:0;}
to {transform: translateY(0); opacity:1;}
`;

export const showUp2 = keyframes`
from {transform: translateY(15px); opacity:0;}
to {transform: translateY(0); opacity:1;}
`;

export const firstCoverAni = keyframes`
from {height: 100vh; }
30% {height: 100vh; font-size: 4rem;}
70% {height: 80px; opacity: 1; font-size: 2rem; }
100% {height: 80px; opacity: 0; font-size: 2rem;}
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

export const profileBtnAni = keyframes`
0%{box-shadow: 0 0 0px #fff;}
50%{box-shadow: 0 0 50px #fff;}
100%{box-shadow: 0 0 0px #fff;}
`;

export const gettingBiggerAni = keyframes`
from { transform: translate(-50%, -50%) scale(1); opacity: 1;}
to { transform: translate(-50%, -50%) scale(1.5); opacity: 0;}
`;
