import styled from 'styled-components';

export const Container = styled.div`
  padding: 1.5rem;
  text-align: center;
  box-shadow: ${props => props.theme.productShadow};
  min-height: 200px;
  min-width: 200px;
  transition: all 0.3s;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  letter-spacing: 1px;

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
`;
