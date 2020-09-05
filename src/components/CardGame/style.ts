import styled from 'styled-components';

export const CardGameStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 4.5rem;
  padding-top: 2rem;
  justify-self: center;
  height: 40rem;
  width: 30rem;
  box-shadow: 3px 3px 3px #c4c4c4;
  border-radius: 2rem;
  background-color: #f9f9f9;

  .logo {
    width: 15rem;
    height: 15rem;
  }

  .question {
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
    border-bottom: 2px solid var(--color-primary);
  }

  @media (min-width: 1500px) {
    width: 35rem;
    height: 75%;
    .logo {
      width: 50%;
      height: 26%;
    }
  }
`;
