import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyles = createGlobalStyle`
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
    font-family: 'Open Sans', --apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
  }
  p {
    font-size: 1.6rem;
  }

  #nprogress {
  pointer-events: none;
  }

  #nprogress .bar {
    background: ${(props) => props.theme.colors.blueLight};;
    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;

    width: 100%;
    height: 5px;
  }

  /* Fancy blur effect */
  #nprogress .peg {
    display: block;
    position: absolute;
    right: 0px;
    width: 100px;
    height: 100%;
    box-shadow: 0 0 10px ${(props) => props.theme.colors.blueLight}, 0 0 5px ${(
  props
) => props.theme.colors.blueDark};;
    opacity: 1.0;

    -webkit-transform: rotate(3deg) translate(0px, -4px);
        -ms-transform: rotate(3deg) translate(0px, -4px);
            transform: rotate(3deg) translate(0px, -4px);
  }

  /* Remove these to get rid of the spinner */
  #nprogress .spinner {
    display: block;
    position: fixed;
    z-index: 1031;
    top: 15px;
    right: 15px;
  }

  #nprogress .spinner-icon {
    width: 18px;
    height: 18px;
    box-sizing: border-box;

    border: solid 2px transparent;
    border-top-color: ${(props) => props.theme.colors.blueLight};;
    border-left-color: ${(props) => props.theme.colors.blueLight};;
    border-radius: 50%;

    -webkit-animation: nprogress-spinner 400ms linear infinite;
            animation: nprogress-spinner 400ms linear infinite;
  }

  .nprogress-custom-parent {
    overflow: hidden;
    position: relative;
  }

  .nprogress-custom-parent #nprogress .spinner,
  .nprogress-custom-parent #nprogress .bar {
    position: absolute;
  }

  @-webkit-keyframes nprogress-spinner {
    0%   { -webkit-transform: rotate(0deg); }
    100% { -webkit-transform: rotate(360deg); }
  }
  @keyframes nprogress-spinner {
    0%   { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const theme = {
  colors: {
    blueLight: '#0267D5',
    blueDark: '#284180',
    greenLight: '#D5FEF0',
    greenDark: '#6FA995',
    black: '#1F2839',
    grayPrimary: '#AFAFB1',
  },
  boxShadow: {
    normal: '0px 28px 25px -10px rgba(0, 0, 0, 0.15)',
  },
};
export default function Page({ children }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div>{children}</div>
    </ThemeProvider>
  );
}
