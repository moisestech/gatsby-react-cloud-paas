import { createGlobalStyle } from 'styled-components';
// import bg from '../assets/images/bg.svg';
// import stripes from '../assets/images/stripes.svg';
// html // background-image: url(${bg});

const GlobalStyles = createGlobalStyle`
  :root {
    --blue: blue;
    --pastelblue: #8ECDEA;
    --darkblue: #00295d;
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #fff;
    --grey: #efefef;
    --gray: #62738d;
    --bordergray: #eef1f6;
  }
  html {
    background-size: 450px;
    background-attachment: fixed;
    font-size: 10px;
  }

  body {
    font-size: 2rem;
    overflow-x: hidden;
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  button {
    font-size: 13px;
    line-height: 22px;
    height: 32px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 4px 15px;
    font-weight: 600;
    white-space: nowrap;
    cursor: pointer;
    text-decoration: none;
    box-sizing: border-box;
    background-clip: border-box !important;
    background-origin: border-box !important;
    color: var(--blue);
    background: #fff;
    border-radius: 4px;
    border: 1px solid var(--blue);
  }

  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }
  html {
    scrollbar-width: thin;
    scrollbar-color: var(--blue) var(--white);
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }
  body::-webkit-scrollbar-thumb {
    background-color: var(--red) ;
    border-radius: 6px;
    border: 3px solid var(--white);
  }

  hr {
    border: 0;
    height: 8px;
    background-size: 1500px;
  }

  img {
    max-width: 100%;
  }

  .tilt {
    transform: rotate(-2deg);
    position: relative;
    display: inline-block;
  }

`;

export default GlobalStyles;
