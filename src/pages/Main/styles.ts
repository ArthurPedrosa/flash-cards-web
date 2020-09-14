import styled from 'styled-components';

export const MainStyle = styled.div`
  .img-background {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    margin-top: 0.5rem 0;
    .logo {
      width: 50rem;
      position: absolute;
      z-index: -1;
      opacity: 0.3;
    }
  }

  @media (min-width: 1100px) {
    .img-background .logo {
      width: 60rem;
    }
  }
`;

export const SubTitle = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  margin-bottom: 5rem 0;

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
      font-size: 2rem;
      max-width: 1080px;
    }
  }
`;

export const PrimaryDeck = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30vh;

  .mg {
    margin: 0 1rem;
  }

  @media (min-width: 1100px) {
    .mg {
      margin: 0 2rem;
    }
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
