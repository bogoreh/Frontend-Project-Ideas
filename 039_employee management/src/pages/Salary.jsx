import React, { useState } from 'react';
import SalaryCard from '../components/SalaryCard';
import { salaryHistory, employees } from '../data/mockData';
import { formatETB } from '../utils/formatters';
import { FaDownload, FaFilter } from 'react-icons/fa';

const Salary = () => {
  const [selectedMonth, setSelectedMonth] = useState('February');
  const [selectedYear, setSelectedYear] = useState('2025');

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                  'July', 'August', 'September', 'October', 'November', 'December'];
  const years = ['2025', '2024', '2023'];

  const filteredSalaries = salaryHistory.filter(
    salary => salary.month === selectedMonth && salary.year.toString() === selectedYear
  );

  const totalPaid = filteredSalaries
    .filter(s => s.status === 'Paid')
    .reduce((sum, s) => sum + s.netSalary, 0);
  
  const totalPending = filteredSalaries
    .filter(s => s.status === 'Pending')
    .reduce((sum, s) => sum + s.netSalary, 0);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Salary Management</h1>
        <button className="btn-primary flex items-center">
          <FaDownload className="mr-2" />
          Export Report
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-md p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <div className="flex items-center gap-2">
            <FaFilter className="text-gray-400" />
            <span className="text-sm font-medium">Filter by:</span>
          </div>
          <select
            className="input-field w-auto"
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            {months.map(month => (
              <option key={month} value={month}>{month}</option>
            ))}
          </select>
          <select
            className="input-field w-auto"
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
          >
            {years.map(year => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-green-50 rounded-xl p-6 border border-green-200">
          <p className="text-sm text-green-600 font-medium">Total Paid</p>
          <p className="text-3xl font-bold text-green-700">{formatETB(totalPaid)}</p>
          <p className="text-xs text-green-600 mt-2">For {selectedMonth} {selectedYear}</p>
        </div>
        <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
          <p className="text-sm text-yellow-600 font-medium">Total Pending</p>
          <p className="text-3xl font-bold text-yellow-700">{formatETB(totalPending)}</p>
          <p className="text-xs text-yellow-600 mt-2">For {selectedMonth} {selectedYear}</p>
        </div>
      </div>

      {/* Salary Cards */}
      <h2 className="text-xl font-semibold mb-4">Salary Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSalaries.map(salary => (
          <SalaryCard key={salary.id} salary={salary} />
        ))}
      </div>

      {filteredSalaries.length === 0 && (
        <div className="text-center py-12 bg-white rounded-xl">
          <p className="text-gray-500 text-lg">No salary records found for this period</p>
        </div>
      )}
    </div>
  );
};

export default Salary;