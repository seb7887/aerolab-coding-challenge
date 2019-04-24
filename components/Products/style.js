import styled from 'styled-components';

export const ProductsLayout = styled.div`
  padding: 1.5rem;
  display: grid;
  grid-template-areas:
    'top top'
    'filters grid'
    'bottom bottom';

  #top {
    grid-area: top;
  }

  #filters {
    grid-area: filters;
  }

  #grid {
    grid-area: grid;
  }

  #bottom {
    grid-area: bottom;
  }

  @media (max-width: 770px) {
    padding: 1rem;
  }

  @media (max-width: 650px) {
    padding: 0.5rem;
  }
`;
