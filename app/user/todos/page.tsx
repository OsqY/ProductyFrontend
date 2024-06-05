'use client';

import TodosTable from "@/app/components/TodosTable";
import { Box, Container, Typography, alpha } from "@mui/material";
import Link from "next/link";

const TodosPage = () => {

  return (
    <Box
      id="todos"
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
        {/* <Typography variant="h4" component="h3" marginTop={0}> */}
        {/*   {isLoading && ( */}
        {/*     <div>Loading...</div> */}
        {/*   ) || */}
        {/*     !user && ( */}
        {/*       <div>Redirecting...</div> */}
        {/*     )} */}
        {/* </Typography> */}
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
          Todos
        </Typography>

        <Link href="/user/todos/new" style={{ textDecoration: 'none' }}>

          <Box
            id="image"
            sx={(theme) => ({
              mt: { xs: 8, sm: 10 },
              alignSelf: 'center',
              height: { xs: 250 },
              width: '100%',
              backgroundImage:
                theme.palette.mode === 'light'
                  ? 'url("/static/images/templates/templates-images/hero-light.png")'
                  : 'url("/static/images/templates/templates-images/hero-dark.png")',
              backgroundSize: 'cover',
              borderRadius: '10px',
              outline: '1px solid',
              outlineColor:
                theme.palette.mode === 'light'
                  ? alpha('#BFCCD9', 0.5)
                  : alpha('#9CCCFC', 0.1),
              boxShadow:
                theme.palette.mode === 'light'
                  ? `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`
                  : `0 0 24px 12px ${alpha('#033363', 0.2)}`,
              transition: '500ms',
              paddingX: 10,
              paddingY: 5,
              "&:hover": {
                boxShadow: theme.palette.mode === 'light'
                  ? `0 0 34px 38px ${alpha('#9CCCFC', 0.2)}`
                  : `0 0 44px 32px ${alpha('#033363', 0.2)}`,

              },
            })}
          >
            <Typography
              component="h3"
              variant="h4"
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                alignSelf: 'center',
                textAlign: 'center',
                fontSize: 'clamp(2.5rem, 3vw, 4rem)',
                fontWeight: 'bold'
              }}
            >
              Make a new Todo!
            </Typography>
          </Box>

        </Link>

        <TodosTable />
      </Container>
    </Box >
  )
}

export default TodosPage;
