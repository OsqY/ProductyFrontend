import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  }, palette: {
    mode: 'dark',
    primary: {
      main: '#ffc300',
      contrastText: '#fefcfb',
    },
    secondary: {
      main: '#ffd60a',
    },
    background: {
      default: '#000814',
      paper: '#001d3d',
    },
    text: {
      primary: '#ffffff',
    },
  },
});

const lightTheme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#056A2F',
      contrastText: '#fefcfb',
    },
    secondary: {
      main: '#058C42',
    },
    background: {
      default: '#ffffff',
    },
    text: {
      primary: '#020202',
    },
  },
});

export { darkTheme, lightTheme };

