
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Head from 'next/head';
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter'

export default function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <AppCacheProvider {...pageProps}>
        <Head>
          <title>Productivity App</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <CssBaseline />
        <Component {...pageProps} />
      </AppCacheProvider>
    </React.Fragment>
  );
}

