import styled from 'styled-components';

export const GameStyle = styled.div`
  padding: 4.5rem;
  height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;

  .question {
    text-align: center;
    font-size: 1.8rem;
  }

  .answers {
    margin-top: 2.5rem;
    align-self: center;
  }

  @media (min-width: 1500px) {
    grid-template-columns: 1fr 1.5fr;
  }
`;
