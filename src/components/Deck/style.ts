import styled from 'styled-components';

export const ContainerDeck = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  max-width: 18rem;
  min-height: 20rem;
  padding: 2rem 2rem;
  border-radius: 0.4rem;
  cursor: pointer;

  .image-slot {
    background: #fff;
    border: 1px solid #cdcdcd;
    border-radius: 50%;
    width: 10rem;
    height: 10rem;
  }

  .text {
    font-weight: 600;
    font-size: 1.6rem;
  }
`;
