import styled from 'styled-components';

export const MainStyle = styled.div`
  display: grid;
  grid-template-rows: 8% auto;
  height: 100%;

  .game-area {
    margin: 0 auto;
    margin-top: 2rem;
    width: 95%;
    height: 95%;
    border-radius: 0.4rem;
  }

  @media (min-width: 1500px) {
    grid-template-rows: 8% auto 10%;
  }
`;
