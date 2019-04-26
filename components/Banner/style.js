import styled from 'styled-components';

export const Content = styled.div`
  min-height: 400px;
  margin: 1rem -1.5rem;
  background-size: cover;
  background-position-y: center;
  background-position-x: right;
  background-image: url('/static/images/header-x2.png');
  background-attachment: fixed;
  display: flex;
  align-items: flex-end;
  position: relative;
  perspective: 1px;

  .title {
    z-index: 2;
    font-size: 2rem;
    font-weight: 1400;
    color: ${props => props.theme.white};
    padding: 0 3rem;
  }

  .overlay {
    z-index: 1;
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: ${props => props.theme.orange};
    opacity: 0.65;
  }

  @media (${props => props.theme.viewport.sm}) {
    min-height: 150px;
    margin: 1rem -0.8rem;

    .title {
      font-size: 1.5rem;
      padding: 0 1.5rem;
    }
  }
`;
