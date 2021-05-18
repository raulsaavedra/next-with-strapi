import styled, { createGlobalStyle } from 'styled-components';
import { SSNProgress } from './vendor/NProgress';

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
    --black: #172331;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-family: 'Open Sans', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    padding: 0;
    margin: 0;
    line-height:2;
  }
  h1, h2, h3, h4, p, a {
    margin: 0;
  }
  a {
    text-decoration: none;
  }
  
  button {
    font-family: 'Open Sans', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue';
    cursor: pointer;
  }
  p {
    font-size: 1.6rem;
  }

  ${SSNProgress}

`;
