/* eslint-disable */


'use client'

import React, { useState } from 'react';
import Head from 'next/head';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { ThemeProvider } from '@emotion/react';
import getLPTheme from '../theme';
import UserNavbar from '../components/UserNavBar';
import { CssBaseline, PaletteMode, createTheme } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [mode, setMode] = useState<PaletteMode>('light');
  const [showCustomTheme, setShowCustomTheme] = useState(true)
  const LPtheme = createTheme(getLPTheme(mode))
  const defaultTheme = createTheme({ palette: { mode } })

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const toggleCustomTheme = () => {
    setShowCustomTheme((prev) => !prev);
  };

  return (
    <html lang="en">
      <Head>
        <title>Producty</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link type='image/x-icon' href='../public/Diseño sin título.ico' />
      </Head>
      <UserProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <body>
            <ThemeProvider theme={showCustomTheme ? LPtheme : defaultTheme} >
              <CssBaseline />
              <UserNavbar mode={mode} toggleColorMode={toggleColorMode} />
              {children}
            </ThemeProvider>
          </body>
        </LocalizationProvider>

      </UserProvider>
    </html >
  );
};

export default Layout;


