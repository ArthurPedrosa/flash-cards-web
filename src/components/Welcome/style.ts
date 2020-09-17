import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  .content {
    margin-top: 3rem;
    .lamp {
      margin: 0 auto;
      display: flex;
      height: 10rem;
    }
    .title {
      display: flex;
      flex-direction: column;
      text-align: center;
      justify-content: center;
      margin: 1rem 0;

      .text-title {
        text-align: center;
        font-size: 2.5rem;
        font-weight: bolder;
        align-self: center;
        width: fit-content;
        margin-bottom: 1rem;
        border-bottom: 2px solid var(--color-primary);
      }

      .text {
        margin: 1rem 4rem;
        color: #666;
        font-weight: 500;
        font-size: 1.8rem;
      }
    }

    .button-start {
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0.3rem 0.3rem 0.5rem #a0a0a0;
      cursor: pointer;
      padding: 0.8rem 2rem 0.8rem 1.5rem;
      font-weight: bolder;
      width: fit-content;
      margin: 0 auto;
      background: var(--color-success);
      color: var(--color-title-white);
      border: 2px solid var(--color-success);
      border-radius: 0.4rem;
      font: 500 Archivo;
      font-size: 1.7rem;
      transition: 0.3s;
      text-decoration: none;

      .play {
        margin-right: 2rem;
        fill: #fff;
        height: 2rem;
      }

      &:hover {
        background: var(--color-success-dark);
        border: 2px solid var(--color-success-dark);
      }
    }
  }

  @media (min-width: 1100px) {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;

    .content {
      display: flex;
      flex-direction: column;
      align-items: center;

      .lamp {
        height: 13rem;
      }

      .title {
        max-width: 70%;
      }
    }
  }
`;
