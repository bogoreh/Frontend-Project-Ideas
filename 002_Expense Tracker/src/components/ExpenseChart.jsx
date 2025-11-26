import { Pie, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

export default function ExpenseChart({ transactions }) {
  const getCategoryData = () => {
    const expenseData = {};
    const incomeData = {};

    transactions.forEach(transaction => {
      if (transaction.type === 'expense') {
        expenseData[transaction.category] = 
          (expenseData[transaction.category] || 0) + transaction.amount;
      } else {
        incomeData[transaction.category] = 
          (incomeData[transaction.category] || 0) + transaction.amount;
      }
    });

    return { expenseData, incomeData };
  };

  const { expenseData, incomeData } = getCategoryData();

  const expenseChartData = {
    labels: Object.keys(expenseData),
    datasets: [
      {
        label: 'Expenses by Category',
        data: Object.values(expenseData),
        backgroundColor: [
          '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0',
          '#9966FF', '#FF9F40', '#FF6384', '#C9CBCF'
        ],
        borderWidth: 2,
        borderColor: '#fff'
      }
    ]
  };

  const incomeChartData = {
    labels: Object.keys(incomeData),
    datasets: [
      {
        label: 'Income by Category',
        data: Object.values(incomeData),
        backgroundColor: [
          '#4BC0C0', '#36A2EB', '#FFCE56', '#FF6384',
          '#9966FF', '#FF9F40', '#C9CBCF'
        ],
        borderWidth: 2,
        borderColor: '#fff'
      }
    ]
  };

  const monthlyData = () => {
    const monthly = {};
    
    transactions.forEach(transaction => {
      const month = transaction.date.substring(0, 7); // YYYY-MM
      if (!monthly[month]) {
        monthly[month] = { income: 0, expense: 0 };
      }
      monthly[month][transaction.type] += transaction.amount;
    });

    const months = Object.keys(monthly).sort();
    
    return {
      labels: months,
      datasets: [
        {
          label: 'Income',
          data: months.map(month => monthly[month].income),
          backgroundColor: '#4BC0C0',
        },
        {
          label: 'Expenses',
          data: months.map(month => monthly[month].expense),
          backgroundColor: '#FF6384',
        }
      ]
    };
  };

  const barChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly Income vs Expenses',
      },
    },
  };

  const pieChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  return (
    <div className="charts">
      <h2>Financial Overview</h2>
      
      <div className="chart-grid">
        <div className="chart-container">
          <h3>Monthly Overview</h3>
          <Bar data={monthlyData()} options={barChartOptions} />
        </div>
        
        <div className="chart-container">
          <h3>Expense Distribution</h3>
          {Object.keys(expenseData).length > 0 ? (
            <Pie data={expenseChartData} options={pieChartOptions} />
          ) : (
            <p className="no-data">No expense data available</p>
          )}
        </div>
        
        <div className="chart-container">
          <h3>Income Distribution</h3>
          {Object.keys(incomeData).length > 0 ? (
            <Pie data={incomeChartData} options={pieChartOptions} />
          ) : (
            <p className="no-data">No income data available</p>
          )}
        </div>
      </div>
    </div>
  );
}