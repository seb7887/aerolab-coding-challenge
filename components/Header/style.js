import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const PointsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  .name {
    margin: 0 5px 0 0;
  }

  .touchable {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    text-align: center;
    padding: 8px 6px;
    border-radius: 30%;
    background-color: ${props => props.theme.bg};

    h2 {
      margin: 0 5px 0 0;
    }
  }
`;
