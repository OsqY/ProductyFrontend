'use client'

import { useUser } from "@auth0/nextjs-auth0/client"
import { useTheme } from "@emotion/react";
import { Box, Container, Typography } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const UserPage = () => {
  const theme = useTheme();
  const { user, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.push('/api/auth/login');
    }
  }, [user, isLoading, router]);

  return (
    <Container maxWidth="xs">
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
        backgroundColor: theme.palette.background.default
      }}
      >
        <Typography variant="h4" component="h3">
          {isLoading && (
            <div>Cargando...</div>
          ) ||
            !user && (
              <div>Redirigiendo...</div>
            )}
          Welcome {user?.name}
        </Typography>
      </Box >
    </Container >
  )
}

export default UserPage;

