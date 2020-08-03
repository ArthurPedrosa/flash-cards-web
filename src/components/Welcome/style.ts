import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  .content {
    max-width: 980px;
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
    .card-menu {
      position: relative;
      top: 3%
    }
  }
`;
