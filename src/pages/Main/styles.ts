import styled from 'styled-components';

export const MainStyle = styled.div``;

export const SubTitle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  margin: 3rem 0;

  .title {
    font-size: 4rem;
    font-weight: 600;
  }

  .text {
    align-self: center;
    max-width: 400px;
  }

  @media (min-width: 1100px) {
    font-size: 1.7rem;

    .text {
      align-self: center;
      max-width: 1080px;
    }
  }
`;

export const PrimaryDeck = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 5rem;
  .mg {
    margin: 0 2rem;
  }
`;

export const FinalText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  margin: 5rem 0;
  .title {
    margin-bottom: 1rem;
    font-size: 4rem;
    font-weight: 600;
  }

  .text {
    align-self: center;
    max-width: 400px;
  }

  @media (min-width: 1100px) {
    font-size: 1.7rem;

    .text {
      align-self: center;
      max-width: 1080px;
    }
  }
`;
