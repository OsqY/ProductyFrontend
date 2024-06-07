import { Box, Button, Container, Grid, TextField } from "@mui/material";
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const JournalForm = ({ journal }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    description: ''
  })

  useEffect(() => {
    if (journal)
      setFormData(journal)
  }, [journal])

  const handleSubmit = async (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    const { name, description } = formData;

    const method = journal ? 'PUT' : 'POST';
    const url = journal ? `/api/journalEntry/${journal.id}` : '/api/journalEntry';

    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, description }),
      })

      if (!response.ok) {
        console.error('Error:', response.statusText);
        return;
      }

      router.push('/user/journal')

    } catch (error) {
      console.error('Error', error)
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
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
              <TextField fullWidth multiline maxRows={40} id="description" label="Description" required name="description" autoComplete="family-name" value={formData.description} onChange={handleChange} />
            </Grid>

          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {journal ? 'Update entry' : 'Create entry'}
          </Button>
        </Box>
      </Box>
    </Container>

  )
}

export default JournalForm;
