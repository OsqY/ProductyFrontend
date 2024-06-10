import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box, Button, TextField } from '@mui/material';
import { useRouter } from 'next/navigation';

const IncomesTable = ({ initialIncomes }) => {
  const router = useRouter();
  const [incomes, setIncomes] = useState([]);
  const [newIncome, setNewIncome] = useState({ name: '', earnedMoney: 0, category: '' });
  const [incomeToEdit, setIncomeToEdit] = useState(null);

  useEffect(() => {
    if (initialIncomes) setIncomes(initialIncomes);
  }, [initialIncomes]);

  const handleEdit = (params) => {
    const income = params.row;
    setIncomeToEdit(income);
  };

  const handleAddIncome = async () => {
    const response = await fetch('/api/income', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newIncome),
    });

    if (response.status === 201) {
      setNewIncome({ name: '', earnedMoney: 0, category: '' });
      router.refresh();
    }
  };

  const handleEditIncome = async () => {
    const response = await fetch(`/api/income/${incomeToEdit.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(incomeToEdit),
    });

    if (response.ok) {
      const updatedIncome = await response.json();
      setIncomes(incomes.map((income) => (income.id === updatedIncome.id ? updatedIncome : income)));
      setIncomeToEdit(null);
    }
  };

  const handleDelete = async (id) => {
    if (confirm("Are you sure you want to delete this income?")) {
      await fetch(`/api/income/${id}`, {
        method: 'DELETE',
      });
      setIncomes(incomes.filter((expense) => expense.id !== id));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewIncome((prev) => ({ ...prev, [name]: value }));
  };

  const handleChangeOnEdit = (e) => {
    const { name, value } = e.target;
    setIncomeToEdit((prev) => ({ ...prev, [name]: value }));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'earnedMoney', headerName: 'Amount', width: 150 },
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
          incomeToEdit ? handleEditIncome() : handleAddIncome();
        }}
        sx={{ display: 'flex', gap: 2, mb: 2 }}
      >
        <TextField
          label="Name"
          name="name"
          value={incomeToEdit ? incomeToEdit.name : newIncome.name}
          onChange={incomeToEdit ? handleChangeOnEdit : handleChange}
          required
        />
        <TextField
          label="Amount"
          name="earnedMoney"
          value={incomeToEdit ? incomeToEdit.earnedMoney : newIncome.earnedMoney}
          onChange={incomeToEdit ? handleChangeOnEdit : handleChange}
          type="number"
          required
        />
        <Button type="submit" variant="contained" color="primary">
          {incomeToEdit ? 'Update Income' : 'Add Income'}
        </Button>
      </Box>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid rows={incomes} columns={columns} pageSize={5} />
      </div>
    </Box>
  );
};

export default IncomesTable;

