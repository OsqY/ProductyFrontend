import { PieChart } from "@mui/x-charts";
import { useEffect, useState } from "react";


const IncomesChart = ({ initialIncomes }) => {
  const [incomes, setIncomes] = useState([]);


  useEffect(() => {
    if (initialIncomes) {
      const mappedIncomes = initialIncomes.map((e, index) => ({
        id: e.id,
        value: e.earnedMoney,
        label: e.name,
      }));
      setIncomes(mappedIncomes)
    }

  }, [initialIncomes]);

  console.log(incomes)
  return (
    <>
      <PieChart series={[{
        data: [...incomes], innerRadius: 30,
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

export default IncomesChart;

