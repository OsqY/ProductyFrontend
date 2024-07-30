'use client';
import '../../../index.css'

import { Box, Container, Typography, alpha } from "@mui/material";
import { Tldraw } from "tldraw";

const WhiteboardPage = () => {
  return (
    <Box
      id="whiteboard"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
            : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
        }}
      >
        <Typography
          variant="h1"
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignSelf: 'center',
            textAlign: 'center',
            fontSize: 'clamp(3.5rem, 10vw, 4rem)',
          }}
        >
          Whiteboard
        </Typography>

        <Box
          sx={{
            mt: { xs: 8, sm: 10 },
            width: '100%',
            height: '100vh', // Ajusta la altura según sea necesario
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >      <Box
          sx={{
            width: '100%',
            height: '100%',
            borderRadius: '10px',
            boxShadow: '0 0 24px 12px rgba(3, 51, 99, 0.2)', // Ajusta el boxShadow si es necesario
          }}
        >
            <Tldraw
            />
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default WhiteboardPage;

