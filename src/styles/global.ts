import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    font-size: 60%;

    --color-background: #F0F0F7;
    --color-success: #41A662;
    --color-danger: #CA0E0A;
    --color-success-dark: #3B9A58;
    --color-primary-light: #ff9d2f;
    --color-primary: #ff6126;
    --color-title-white: #FFFFFF;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100vh;
  }

  body {
    font-size: 1.6rem;
    background-color: var(--color-background);
  }

  body,
  input,
  button,
  textarea {
    font: 500 1.6rem Poppins;
    color: -color-text-base;
  }

  li {
    list-style: none;
  }

  .container {
    width: 90vw;
    max-width: 700px;
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
`;
