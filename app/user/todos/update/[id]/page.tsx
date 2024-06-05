'use client'

import TodoForm from "@/app/components/TodoForm";
import { Box, Container, Typography, alpha } from "@mui/material";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const UpdateTodoPage = () => {
  const pathname = usePathname();

  let pathnameSplitted = pathname.split("/")
  let id = Number.parseInt(pathnameSplitted[4])

  const [todo, setTodo] = useState(null)

  useEffect(() => {
    const fetchTodo = async () => {
      if (!id) return

      try {
        const response = await fetch(`/api/todo/${id}`)

        if (!response.ok) {
          console.error('Failed to fetch todo:', response.statusText)
          return;
        }

        const data = await response.json();
        setTodo(data);
      } catch (error) {
        console.error('Error fetching todo', error);
      }
    };

    fetchTodo();
  }, [id])

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
          Update Todo
        </Typography>
        {todo ? <TodoForm todo={todo} /> : <p>Loading...</p>}
      </Container>
    </Box>

  )
}

export default UpdateTodoPage;
