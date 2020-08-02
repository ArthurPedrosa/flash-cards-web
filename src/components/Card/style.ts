import styled from 'styled-components';

export const ContainerCard = styled.div`
  display: flex; align-items: center; justify-content: center;
  min-width: 25rem; min-height: 35rem;
  border-radius: 0.8rem;
  box-shadow: 5px 5px 5px #c4c4c4;
  background: white;

  .card {
    display: flex; flex-direction: column; align-items: center; justify-content: space-around;
    color: #FD7F2C;
    min-height: 35rem;
    .titleCard {
      font-weight: bolder;
      font-size: 2.5rem;
    }

    .logo {
      width: 11rem; height: 11rem;
    }

    .buttonStart {
      padding: .8rem 2rem;
      font-weight: bolder;
      color: #FD7F2C;
      border: 2px solid #FD7F2C;
      border-radius: 0.4rem;

      &:hover {
        background: #FD7F2C;
        color: #fff;
        transition: 0.5s;
        box-shadow: inset 6.5em 0 0 0 var(--hover);
      }
    }
  }
`;
