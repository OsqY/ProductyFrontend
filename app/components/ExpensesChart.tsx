import { PieChart } from "@mui/x-charts";
import { useEffect, useState } from "react";


const ExpensesChart = () => {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    const fetchExpenses = async () => {
      const response = await fetch('/api/expense');
      const data = await response.json();
      const mappedExpenses = data?.data?.map((e, index) => ({
        id: e.id,
        value: e.spentMoney,
        label: e.name,
      }));
      setExpenses(mappedExpenses);
    };

    fetchExpenses();
  }, []);

  return (
    <>
      <PieChart series={[{
        data: [...expenses], innerRadius: 30,
        outerRadius: 100,
        paddingAngle: 5,
        cornerRadius: 5,
        startAngle: -90,
        endAngle: 180,
        cx: 150,
        cy: 150,
      }]} width={400} height={200} margin={{ top: 5 }} />

    </>
  )
}

export default ExpensesChart;
