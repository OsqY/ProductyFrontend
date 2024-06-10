
import { Box, Button, Container, Grid, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ExpenseForm = ({ expense }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    spentMoney: 0
  })

  useEffect(() => {
    if (expense)
      setFormData(expense)
  }, [expense])

  const handleSubmit = async (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    const { name, category, spentMoney } = formData;

    const method = expense ? 'PUT' : 'POST';
    const url = expense ? `/api/expense/${expense.id}` : '/api/expense';

    try {
      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, category, spentMoney })
      })

      if (!response.ok) {
        console.error('Error:', response.statusText);
        return;
      }

      router.push('/user/balance/expenses')

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
              <TextField fullWidth autoComplete="given-name" name="name" required id="todoTitle" label="Title" autoFocus value={formData.name} onChange={handleChange} style={{ padding: '5px' }} />
            </Grid>

            <Grid item md={18} xs={12} sm={6}>
              <TextField fullWidth type="number" id="spentMoney" label="spentMoney" required name="spentMoney" autoComplete="family-name" value={formData.spentMoney} onChange={handleChange} />
            </Grid>


          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {expense ? 'Update expense' : 'Create expense'}
          </Button>
        </Box>
      </Box>
    </Container>

  )
}
export default ExpenseForm;
