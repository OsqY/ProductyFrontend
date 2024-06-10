import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, TextField } from '@mui/material';
import { useRouter } from 'next/navigation';

const ExpensesTable = ({ initialExpenses }) => {
  const router = useRouter();
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState({ name: '', spentMoney: 0, category: '' });
  const [expenseToEdit, setExpenseToEdit] = useState(null);

  useEffect(() => {
    if (initialExpenses) setExpenses(initialExpenses);
  }, [initialExpenses]);

  const handleEdit = (params) => {
    const expense = params.row;
    setExpenseToEdit(expense);
  };

  const handleAddExpense = async () => {
    const response = await fetch('/api/expense', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newExpense),
    });

    if (response.status === 201) {
      setNewExpense({ name: '', spentMoney: 0, category: '' });
      router.refresh();
    }
  };

  const handleEditExpense = async () => {
    const response = await fetch(`/api/expense/${expenseToEdit.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(expenseToEdit),
    });

    if (response.ok) {
      const updatedExpense = await response.json();
      setExpenses(expenses.map((expense) => (expense.id === updatedExpense.id ? updatedExpense : expense)));
      setExpenseToEdit(null);
    }
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this expense?")) {
      await fetch(`/api/expense/${id}`, {
        method: 'DELETE',
      });
      setExpenses(expenses.filter((expense) => expense.id !== id));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewExpense((prev) => ({ ...prev, [name]: value }));
  };

  const handleChangeOnEdit = (e) => {
    const { name, value } = e.target;
    setExpenseToEdit((prev) => ({ ...prev, [name]: value }));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'spentMoney', headerName: 'Amount', width: 150 },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 200,
      renderCell: (params) => (
        <Box>
          <Button
            variant="contained"
            color="primary"
            size="small"
            style={{ marginRight: 8 }}
            onClick={() => handleEdit(params)}
          >
            Edit
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={() => handleDelete(params.row.id)}
          >
            Delete
          </Button>
        </Box>
      ),
    },
  ];

  return (
    <Box sx={{ marginY: '20px' }}>
      <Box
        component="form"
        onSubmit={(e) => {
          e.preventDefault();
          expenseToEdit ? handleEditExpense() : handleAddExpense();
        }}
        sx={{ display: 'flex', gap: 2, mb: 2 }}
      >
        <TextField
          label="Name"
          name="name"
          value={expenseToEdit ? expenseToEdit.name : newExpense.name}
          onChange={expenseToEdit ? handleChangeOnEdit : handleChange}
          required
        />
        <TextField
          label="Amount"
          name="spentMoney"
          value={expenseToEdit ? expenseToEdit.spentMoney : newExpense.spentMoney}
          onChange={expenseToEdit ? handleChangeOnEdit : handleChange}
          type="number"
          required
        />
        <Button type="submit" variant="contained" color="primary">
          {expenseToEdit ? 'Update Expense' : 'Add Expense'}
        </Button>
      </Box>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={expenses} columns={columns} pageSize={5} />
      </div>
    </Box>
  );
};

export default ExpensesTable;

