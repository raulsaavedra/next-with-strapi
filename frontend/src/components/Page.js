import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

import useTheme from '../hooks/useTheme';
import { GlobalStyles } from './styles/base/GlobalStyles';

export default function Page({ children }) {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div>{children}</div>
    </ThemeProvider>
  );
}
