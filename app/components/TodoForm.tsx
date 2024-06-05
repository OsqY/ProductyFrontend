import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import { StaticDateTimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useEffect, useState } from "react";

const TodoForm = ({ todo }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    startTime: '',
    deadLine: '',
    isCompleted: false,
  });

  useEffect(() => {
    if (todo) {
      setFormData(todo);
    }
  }, [todo])

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { name, description, startTime, deadLine, isCompleted } = formData;

    const method = todo ? 'PUT' : 'POST';
    const url = todo ? `/api/todo/${todo.id}` : '/api/todo'
    console.log(JSON.stringify({ name, description, startTime, deadLine, isCompleted }))

    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, description, startTime, deadLine, isCompleted }),
      });

      if (!response.ok) {
        console.error('Error:', response.statusText);
        return;
      }

    } catch (error) {
      console.error('Error', error)
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  }

  return (

    <Container maxWidth="md">
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={6}>

            <Grid item md={18} xs={12} sm={6}>
              <TextField fullWidth multiline maxRows={3} autoComplete="given-name" name="name" required id="todoTitle" label="Title" autoFocus value={formData.name} onChange={handleChange} />
            </Grid>

            <Grid item md={18} xs={12} sm={6}>
              <TextField fullWidth multiline maxRows={10} id="description" label="Description" name="description" autoComplete="family-name" value={formData.description} onChange={handleChange} />
            </Grid>

            <Grid item xs={12} >

              <Typography component="h4" variant="h4" style={{ fontWeight: 'bold', margin: 5 }}>
                Start Time of Todo
              </Typography>
              <StaticDateTimePicker value={dayjs(formData.startTime)} onChange={(newDate) => setFormData({ ...formData, startTime: newDate })} />

            </Grid>

            <Grid item xs={12} >

              <Typography component="h5" variant="h4" style={{ fontWeight: 'bold', margin: 5 }}>
                Deadline of Todo
              </Typography>
              <StaticDateTimePicker value={dayjs(formData.deadLine)} onChange={(newDate) => setFormData({ ...formData, deadLine: newDate })} />

            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {todo ? 'Update Todo' : 'Create Todo'}
          </Button>
        </Box>
      </Box>
    </Container>
  )

}

export default TodoForm;
