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

  @media (${props => props.theme.md}) {
    font-size: 0.8rem;
  }

  @media (${props => props.theme.sm}) {
    font-size: 0.5rem;

    .sort {
      justify-content: flex-start;
      padding-left: 0;
    }
  }
`;
