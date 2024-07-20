import { PieChart } from "@mui/x-charts";
import { useEffect, useState } from "react";

const UserBalanceChart = () => {
  const [incomes, setIncomes] = useState([])
  const [expenses, setExpenses] = useState([])

  useEffect(() => {
    const fetchIncomes = async () => {

      const response = await fetch('/api/income');
      const data = await response.json();
      const convertedData = data?.data?.map((income, index) => ({
        value: income.earnedMoney,
        label: `Income ${index + 1}`
      }))
      setIncomes(convertedData);
    }

    const fetchExpenses = async () => {
      const response = await fetch('/api/expense');
      const data = await response.json();
      const convertedData = data?.data?.map((expense, index) => ({
        value: expense.spentMoney,
        label: `Expense ${index + 1}`
      }));
      setExpenses(convertedData);
    }

    fetchIncomes();
    fetchExpenses();
  }, [])


  const series = [
    {
      innerRadius: 0,
      outerRadius: 80,
      id: 'series-1',
      data: incomes,
    },
    {
      innerRadius: 100,
      outerRadius: 120,
      id: 'series-2',
      data: expenses,
    },
  ];


  return (
    <>
      <PieChart series={series} width={400} height={300} />
    </>
  )
}

export default UserBalanceChart;
