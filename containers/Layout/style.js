import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    transition: all .2s, color .1s;
  }

  body {
    margin: 0;
    padding: 25px;
    background-color: ${props => props.theme.bg};
    font-family: 'Segoe UI', sans-serif;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  a {
    text-decoration: none;
  }

  hr {
    margin: 0;
    border: 0;
    border-top: 1px solid ${props => props.theme.grey};
  }
`;

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.5rem 2.5rem;
  background-color: ${props => props.theme.white};
  box-shadow: ${props => props.theme.boxShadow};
`;
