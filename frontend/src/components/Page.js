import Head from 'next/head';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

import useTheme from '../hooks/useTheme';
import { GlobalStyles } from './styles/base/GlobalStyles';

export default function Page({ children }) {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyles />
      <div>{children}</div>
    </ThemeProvider>
  );
}
