import styled from 'styled-components';

export const Container = styled.div`
  text-align: center;
  box-shadow: ${props => props.theme.productShadow};
  min-height: 150px;
  min-width: 200px;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-1rem);
  }
`;

export const NeedCoins = styled.div`
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-align: center;
  padding: 8px 11px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  background-color: ${props => props.theme.secondaryBg};
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const OverlayBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RedeemButton = styled.a`
  margin: 1rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-align: center;
  padding: 9px 12px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;
  background-color: ${props => props.theme.bg};
  cursor: pointer;
`;

export const Content = styled.div`
  position: relative;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  letter-spacing: 1px;
  transition: all 0.5s;

  .buy {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }

  .description {
    display: flex;
    flex-direction: column;
    border-top: 1px solid ${props => props.theme.grey};
    padding-top: 1rem;

    .name {
      font-weight: 600;
    }
  }

  .overlay {
    display: none;
    margin: -1.5rem;
    padding: 1.35rem 1.2rem;
    z-index: 2;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 111, 5, 0.8);
    transition: all 0.5s;
  }

  &:hover {
    .overlay {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .cost-block {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        .cost {
          font-size: 2rem;
          font-weight: bold;
          color: ${props => props.theme.white};
          margin-right: 0.5rem;
        }
      }
    }
  }
`;
