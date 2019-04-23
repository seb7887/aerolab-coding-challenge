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

export const bounce = keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1.0);
  }
`;
