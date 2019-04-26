import styled from 'styled-components';

export const Grid = styled.div`
  padding: 1.5rem;
  display: grid;
  grid-template-columns: repeat(4, auto);
  grid-column-gap: 1.5rem;
  grid-row-gap: 2.5rem;

  @media (${props => props.theme.viewport.md}) {
    grid-template-columns: repeat(2, auto);
  }

  @media (${props => props.theme.viewport.sm}) {
    display: flex;
    flex-direction: column;
  }
`;
