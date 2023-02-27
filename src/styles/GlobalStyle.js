import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root {
    --c-navy: rgb(49, 53, 82);
    --c-green: rgb(46, 176, 134);
    --c-white: rgb(238, 230, 206);
    --c-red: rgb(184, 64, 94);

    --ff-text: 'Roboto Condensed', sans-serif;
    --fw-light: 300;
    --fw-normal: 400;
    --fw-bold: 700;
  }

  *,
  ::before,
  ::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: var(--ff-text);
    font-weight: 300;
  }

  ul {
    list-style: none;
  }
`
