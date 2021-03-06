import styled from 'styled-components';

export const Navbar = styled.nav`
  display: flex;
  flex-direction: column;

  .top-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .bottom-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    margin-top: 0.8rem;
  }

  @media (${props => props.theme.sm}) {
    .bottom-container {
      margin-top: 0.2rem;
    }
  }
`;

export const PointsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  .name {
    margin: 0 7px 0 0;
    color: ${props => props.theme.secondary};
  }

  .touchable {
    letter-spacing: 1px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    text-align: center;
    padding: 8px 8px;
    border-radius: 20px;
    background-color: ${props => props.theme.bg};

    h2 {
      margin: 0 5px 0 0;
    }

    @media (${props => props.theme.sm}) {
      padding: 4px 4px;

      h2 {
        margin: 0 2px 0 0;
      }
    }
  }
`;
