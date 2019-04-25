import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Inter-UI-Light';
    font-weight: normal;
    font-style: normal;
    src: url('/static/fonts/Inter-Light-BETA.woff2') format('woff2');
  }

  * {
    box-sizing: border-box;
    transition: all .2s, color .1s;
  }

  body {
    margin: 0;
    padding: 25px;
    background-color: ${props => props.theme.bg};
    font-family: 'Inter-UI-Light', sans-serif;
    font-size: 0.8rem;
    letter-spacing: 1.5px;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    color: ${props => props.theme.primary};

    @media (max-width: 770px) {
      padding: 0;
    }
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.primary};
  }

  hr {
    margin-top: 1rem;
    border: 0;
    border-top: 1px solid ${props => props.theme.grey};
  }
`;

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.2rem 1.5rem;
  background-color: ${props => props.theme.containerBg};
  box-shadow: ${props => props.theme.boxShadow};
`;
