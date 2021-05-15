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