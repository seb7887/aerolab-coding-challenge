import { keyframes } from 'styled-components';

export const flipCoin = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  40% {
    transform: rotateY(720deg);
  }
  100% {
    transform: rotateY(720deg);
  }
`;
