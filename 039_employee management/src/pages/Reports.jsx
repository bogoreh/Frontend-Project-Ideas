import React from 'react';
import { FaDownload, FaFilePdf, FaFileExcel, FaChartBar } from 'react-icons/fa';
import { employees, salaryHistory } from '../data/mockData';
import { formatETB } from '../utils/formatters';

const Reports = () => {
  const totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
  const avgSalary = totalSalary / employees.length;
  
  const departmentStats = employees.reduce((acc, emp) => {
    if (!acc[emp.department]) {
      acc[emp.department] = { count: 0, salary: 0 };
    }
    acc[emp.department].count++;
    acc[emp.department].salary += emp.salary;
    return acc;
  }, {});

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Reports</h1>

      {/* Report Actions */}
      <div className="flex flex-wrap gap-4 mb-6">
        <button className="btn-primary flex items-center">
          <FaFilePdf className="mr-2" />
          Export as PDF
        </button>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition flex items-center">
          <FaFileExcel className="mr-2" />
          Export as Excel
        </button>
      </div>

      {/* Summary Reports */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Salary Summary */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <FaChartBar className="mr-2 text-blue-600" />
            Salary Summary
          </h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-600">Total Employees</span>
              <span className="font-bold text-lg">{employees.length}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-600">Total Monthly Salary</span>
              <span className="font-bold text-lg text-blue-600">{formatETB(totalSalary)}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-600">Average Salary</span>
              <span className="font-bold text-lg text-green-600">{formatETB(avgSalary)}</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
              <span className="text-gray-600">Highest Salary</span>
              <span className="font-bold text-lg text-purple-600">
                {formatETB(Math.max(...employees.map(e => e.salary)))}
              </span>
            </div>
          </div>
        </div>

        {/* Department Summary */}
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Department Summary</h2>
          <div className="space-y-4">
            {Object.entries(departmentStats).map(([dept, stats]) => (
              <div key={dept} className="border-b pb-3 last:border-b-0">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">{dept}</span>
                  <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    {stats.count} employees
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Total Salary:</span>
                  <span className="font-medium">{formatETB(stats.salary)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Average:</span>
                  <span className="font-medium">{formatETB(stats.salary / stats.count)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Payments */}
        <div className="bg-white rounded-xl shadow-md p-6 lg:col-span-2">
          <h2 className="text-xl font-semibold mb-4">Recent Payment History</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Employee</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Month</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Basic Salary</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Net Salary</th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {salaryHistory.map(salary => (
                  <tr key={salary.id} className="hover:bg-gray-50">
                    <td className="px-4 py-3">{salary.employeeName}</td>
                    <td className="px-4 py-3">{salary.month} {salary.year}</td>
                    <td className="px-4 py-3">{formatETB(salary.basicSalary)}</td>
                    <td className="px-4 py-3 font-medium">{formatETB(salary.netSalary)}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        salary.status === 'Paid' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {salary.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;