import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  .content {
    margin: 0 20px;

    .title {
      display: flex;
      flex-direction: column;
      color: white;
      text-align: center;
      justify-content: center;
      margin: 20px 0;

      .text-title {
        text-align: center;
        font-size: 2.5rem;
        font-weight: bolder;
        margin-bottom: 20px;
      }
    }
  }

  @media (min-width: 1100px) {
    display: flex; justify-content: center; align-items: center;
    font-size: 2rem;

    .content {
      display: flex; justify-content: space-between; align-items: center;
      max-width: 980px;

      .title {
        max-width: 60%;
      }

      .card-menu {
        position: relative;
        top: 20px;
      }
    }
  }
`;
