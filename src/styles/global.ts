import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html {
    font-family: 'Roboto', --apple-system, system-ui, sans-serif;
    /* na fonte a cada 1 rem será cosinderado 10px */
    font-size: 62.5%;
    background-color: #fafafa;
    color: #333;
  }

  body {
    font-size: 1.6rem;
    line-height: 2.6rem;
  }

  input, button {
    background: none;
  }

  ul {
    list-style: none;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
