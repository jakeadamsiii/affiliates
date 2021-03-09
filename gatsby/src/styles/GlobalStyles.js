import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

:root {
    --primary: #FF4949;
    --secondary: #ffc600;
    --tertiary: #ffc600;
    --white: #fff;
    --black: #050505;
    --grey: #efefef;
    --drkGrey: #989898;
  }

  html {
    background: var(--grey);
    font-size: 16px;
  }

  body {
    font-size: 1rem;
    font-family: Arial, Helvetica, sans-serif;
  }

  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  img {
    max-width: 100%;
  }

  /* container styles*/

  .container {
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    box-sizing: border-box;
  }

  .pad {
    padding: 0 1rem;
  }

  /* desktop */ 

  @media only screen and (min-width: 1024px) {
    .container {
        max-width: 80rem; /*1280px*/
    }
  }
  
  `;

  export default GlobalStyles;
