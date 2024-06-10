'use client'

import ExpensesChart from "@/app/components/ExpensesChart";
import ExpensesTable from "@/app/components/ExpensesTable";
import { Box, Container, Typography, alpha } from "@mui/material";
import { useEffect, useState } from "react";

const ExpensesPage = () => {
  const [expenses, setExpenses] = useState([]);
  useEffect(() => {
    const fetchExpenses = async () => {
      const response = await fetch('/api/expense');
      const data = await response.json();
      setExpenses(data);
    };

    fetchExpenses();
  }, []);

  return (

    <Box
      id="expenses"
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
          User Expenses
        </Typography>
        <ExpensesTable initialExpenses={expenses} />
        <ExpensesChart />
      </Container>
    </Box>
  )
}

export default ExpensesPage;
