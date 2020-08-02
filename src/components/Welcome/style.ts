import styled from 'styled-components';

export const Container = styled.div`
  /* background-image: linear-gradient(#ff9d2f, #ff6126);
  transform: skewY(-6deg);
  transform-origin: top left; */
  width: 100%;
  display: flex;
  justify-content: center;
  .content {
    max-width: 1080px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title {
      display: flex;
      flex-direction: column;
      width: 50%;
      color: white;
      text-align: center;
      .text-title {
        text-align: center;
        font-size: 2.5rem;
        font-weight: bolder;
        margin-bottom: 20px;
      }
    }
    .cardMenu {
      position: relative;
      top: 3%
    }
  }
`;
