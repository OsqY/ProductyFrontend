
import React from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import Link from "next/link";

export default function Login() {
  return (
    <Container maxWidth='md'>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          textAlign: 'center',
          backgroundColor: '#FFFFFF'
        }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Username
        </Typography>
        <TextField id="filled" label="Username" required={true} />
        <Typography variant="h2" component="h1" gutterBottom>
          Password
        </Typography>
        <TextField id="filled" label="Username" required={true} type="password" />
        <Box sx={{ mt: 4 }}>
          <Button variant="contained" color="primary" sx={{ mr: 2 }}>
            Log In
          </Button>
          <Link href="/signup" passHref>
            Don't have an account? Sign Up here.
          </Link>
        </Box>
      </Box>
    </Container>
  );
}
