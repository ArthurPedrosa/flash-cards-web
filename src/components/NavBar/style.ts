import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(150deg, #ff6200 15%, #fd7f2c);
  padding: 5px;
  width: 100%;

  .logo {
    height: 6rem;
    cursor: pointer;
    &:hover,
    &:focus {
      animation: shake 1s;
      animation-timing-function: linear;
    }
  }

  .menu-list {
    display: flex;
    background: transparent;
  }

  @keyframes shake {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(-3deg);
    }
    20% {
      transform: rotate(3deg);
    }
    30% {
      transform: rotate(0deg);
    }
    40% {
      transform: rotate(3deg);
    }
    50% {
      transform: rotate(-3deg);
    }
    60% {
      transform: rotate(0deg);
    }
    70% {
      transform: rotate(-3deg);
    }
    80% {
      transform: rotate(3deg);
    }
    90% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-3deg);
    }
  }
`;

export const DropdownStyles = styled.div`
  .dropdown-option {
    border: none;
    color: var(--color-title-white);
    background: transparent;
    padding: 2rem 2.5rem;
    font: 1.8rem Archivo;

    transition: opacity 0.2s;

    &:hover,
    &:focus {
      opacity: 0.75;
    }
  }
`;
