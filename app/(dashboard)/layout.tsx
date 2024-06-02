'use client'
import React from 'react';
import Head from 'next/head';
import Navbar from '../components/NavBar';
import ThemeContextProvider from '../theme-context';
import { UserProvider } from '@auth0/nextjs-auth0/client';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {

  return (
    <html lang="en">
      <Head>
        <title>Producty</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link ref="icon" type='image/x-icon' href='../public/Diseño sin título.ico' />
      </Head>
      <UserProvider>
        <body>
          <ThemeContextProvider>
            <Navbar />
            {children}
          </ThemeContextProvider>
        </body>
      </UserProvider>
    </html>
  );
};

export default Layout;

