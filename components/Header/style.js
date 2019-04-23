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
`;

export const PointsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  .name {
    margin: 0 7px 0 0;
    color: ${props => props.theme.black};
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
  }
`;
