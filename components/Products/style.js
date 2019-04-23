import styled from 'styled-components';

export const ProductsLayout = styled.div`
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
`;
