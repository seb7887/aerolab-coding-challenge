import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 1rem;
  padding-bottom: 0.8rem;
  border-bottom: 1px solid ${props => props.theme.grey};

  .sort {
    padding-left: 1rem;
    font-weight: 700;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    flex-grow: 2;
  }

  @media (max-width: 650px) {
    font-size: 0.8rem;
  }

  @media (max-width: 500px) {
    font-size: 0.5rem;
  }
`;
