import styled from 'styled-components';

export const ContainerDeck = styled.div`
  display: flex;
  flex-direction: column; justify-content: space-around; align-items: center;
  max-width: 18rem;
  min-height: 20rem;
  padding: 2rem 2rem;
  background: #eee;
  border-radius: 0.4rem;
  border: 1px solid #cdcdcd;

  .image-slot {
    background: #fff;
    border: 1px solid #cdcdcd;
    border-radius: 0.2rem;
    width: 13rem;
    height: 8rem;
  }

  .text {
    font-weight: 600;
    font-size: 1.6rem;
  }
`;
