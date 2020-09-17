import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  background: var(--color-title-white);
  padding: 5px;
  width: 100%;
  max-width: 1080px;

  .logo {
    height: 3.2rem;
    cursor: pointer;
    display: flex;
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

export const Menu = styled.div`
  .link {
    border: none;
    background: transparent;
    padding: 1rem;
    font: 1.6rem Archivo;
    color: #000;
    font-weight: bolder;
    text-decoration: none;
    opacity: 0.4;
    transition: opacity 0.6s;

    &:hover {
      opacity: 1;
      border-bottom: 2px solid var(--color-primary);
    }
  }

  @media (min-width: 1100px) {
    .link {
      padding: 1rem 3rem;
    }
  }
`;
