import styled from 'styled-components';

export const ContainerCard = styled.div`
  display: flex; align-items: center; justify-content: center;
  border-radius: 0.8rem;

  .card {
    margin-bottom: 20px;

    .title-card {
      display: none;
    }

    .logo {
      display: none;
    }

    .button-start {
      display: flex; justify-content: space-between; align-items: center;
      cursor: pointer;
      padding: .8rem 2rem .8rem 1.5rem;
      font-weight: bolder;
      background: var(--color-success);
      color: var(--color-title-white);
      border: 2px solid var(--color-success);
      border-radius: 0.4rem;
      font: 1.8rem 500 Archivo;
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
    min-width: 25rem; min-height: 35rem;
    border: 1px solid #cdcdcd;
    box-shadow: 5px 5px 5px #c4c4c4;
    background: #e4e9f4;

    .card {
      display: flex; flex-direction: column; align-items: center; justify-content: space-around;
      min-height: 35rem;

      .title-card {
        margin-top: 2.5rem;
        display: block;
        color: #333;
        font-weight: 600;
        font-size: 3rem;
        font-family: Archivo;
        border-bottom: 2px solid var(--color-primary);
      }

      .logo {
        display: block;
        width: 25rem; height: 25rem;
      }
    }
  }
`;
