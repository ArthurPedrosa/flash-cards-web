import styled from 'styled-components';

export const ContainerDeck = styled.div`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background: var(--color-title-white);
  border-bottom: 2px solid var(--color-primary);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-shadow: 3px 3px 3px #c4c4c4;
  max-width: 15rem;
  min-height: 17rem;
  padding: 1rem;
  border-radius: 0.4rem;
  cursor: pointer;
  opacity: 0.6;
  transition: opacity 0.2s;

  &:hover {
    opacity: 1;
  }

  .image-slot {
    background: #fff;
    border: 1px solid #cdcdcd;
    border-radius: 50%;
    width: 8rem;
    height: 8rem;
  }

  .text {
    font-weight: 600;
    font-size: 1.6rem;
  }

  @media (min-width: 600px) {
    max-width: 25rem;
    min-height: 20rem;
    .image-slot {
      background: #fff;
      border: 1px solid #cdcdcd;
      border-radius: 50%;
      width: 12rem;
      height: 12rem;
    }

    .text {
      font-weight: 600;
      font-size: 1.6rem;
    }
  }
`;
