'use client'
import React, { useMemo, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
import { darkTheme, lightTheme } from './theme';
import { Button } from '@mui/material';
import { DarkMode, LightMode } from '@mui/icons-material';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [darkMode, setDarkMode] = useState(true)

  const theme = useMemo(() => (darkMode ? darkTheme : lightTheme), [darkMode]);

  return (
    <html lang="en">
      <Head>
        <title>Productivity App</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Button variant='contained' onClick={() => setDarkMode(!darkMode)} sx={{ mx: 'auto', mt: 6, display: 'flex', flexDirection: 'row', justifySelf: 'right', alignSelf: 'right' }} startIcon={darkMode ? (<DarkMode />) : (<LightMode />)}>
            Toggle Theme
          </Button>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default Layout;

