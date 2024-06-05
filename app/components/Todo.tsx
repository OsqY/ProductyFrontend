import { useTheme } from "@emotion/react"
import { Box, Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";

interface Todo {
  name: string,
  description: string,
  startTime: Date,
  deadLine: Date,
}

const Todo = (todo) => {
  const theme = useTheme();

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
        <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flexGrow: 1, p: 1 }}>
          <CardContent>
            <Typography variant="h3" color="text.secondary" style={{ fontWeight: 'bold' }}>
              {todo.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {todo.description}
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', pr: 2 }} >
              <CardHeader titleTypographyProps={todo.startTime} />
            </Box>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Todo;
