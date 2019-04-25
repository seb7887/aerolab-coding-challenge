import styled from 'styled-components';

export const Container = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  font-size: 1rem;
  box-shadow: ${props => props.theme.productShadow};
  min-height: 250px;
  min-width: 200px;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-1rem);
  }

  .description {
    display: flex;
    flex-direction: column;

    .name {
      font-weight: 600;
    }
  }
`;

export const Img = styled.img`
  width: 70%;
  height: 70%;
  object-fit: cover;
`;
