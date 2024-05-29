import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffadad',
    },
    secondary: {
      main: '#FFFFFF',
    },
    background: {
      default: '#121212',
      paper: '#1D1D1D',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B3B3B3',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
  },
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#4f33ff ',  // Verde similar a Vercel
    },
    secondary: {
      main: '#000000',  // Negro para los elementos secundarios
    },
    background: {
      default: '#F5F5F5',  // Fondo claro
      paper: '#FFFFFF',    // Fondo de los contenedores claros
    },
    text: {
      primary: '#000000',  // Texto principal en negro
      secondary: '#555555',  // Texto secundario en gris oscuro
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
  },
});

export { darkTheme, lightTheme };

