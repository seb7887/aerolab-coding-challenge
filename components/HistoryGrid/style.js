import styled from 'styled-components';

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 1.5rem;
  grid-row-gap: 2.5rem;
  padding: 1.5rem;

  @media (${props => props.theme.md}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (${props => props.theme.sm}) {
    display: flex;
    flex-direction: column;
  }
`;
