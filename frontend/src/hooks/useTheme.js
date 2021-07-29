import React from 'react';

export default function useTheme() {
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
      light: '0px 10px 15px 0px rgba(0, 0, 0, 0.10)',
      normal: '0px 28px 25px -10px rgba(0, 0, 0, 0.15)',
      buttonBlue: '0px 28px 25px -10px rgba(2, 103, 213, 0.15)',
    },
  };

  return theme;
}
