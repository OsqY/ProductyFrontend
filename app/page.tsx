import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import Link from 'next/link';

export default function Home() {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          textAlign: 'center',
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Welcome to producty
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          Organize your life here!
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Link href="/login" passHref>
            <Button variant="contained" color="primary" sx={{ mr: 2 }}>
              Log In
            </Button>
          </Link>
          <Link href="/signup" passHref>
            <Button variant="outlined" color="primary">
              Sign Up
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
}

