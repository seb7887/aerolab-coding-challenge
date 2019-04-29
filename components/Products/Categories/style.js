import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;

  h3 {
    color: ${props => props.theme.secondary};
  }

  a {
    margin-bottom: 1rem;
    text-transform: capitalize;
    font-size: 1rem;
    transition: all 0.5s;

    &.current {
      font-weight: bold;
      text-decoration: underline;
    }

    &:hover {
      text-decoration: underline;
    }
  }

  @media (${props => props.theme.sm}) {
    display: none;
  }
`;
