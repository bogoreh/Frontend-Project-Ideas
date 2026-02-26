import React from 'react';
import StatsCard from '../components/StatsCard';
import EmployeeCard from '../components/EmployeeCard';
import SalaryCard from '../components/SalaryCard';
import { FaUsers, FaMoneyBillWave, FaUserCheck, FaUserClock } from 'react-icons/fa';
import { employees, salaryHistory } from '../data/mockData';
import { formatETB } from '../utils/formatters';

const Dashboard = () => {
  const totalEmployees = employees.length;
  const activeEmployees = employees.filter(emp => emp.status === 'Active').length;
  const totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
  const pendingPayments = salaryHistory.filter(sal => sal.status === 'Pending').length;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatsCard
          title="Total Employees"
          value={totalEmployees}
          icon={<FaUsers className="text-2xl" />}
          change="8%"
          color="blue"
        />
        <StatsCard
          title="Active Employees"
          value={activeEmployees}
          icon={<FaUserCheck className="text-2xl" />}
          change="5%"
          color="green"
        />
        <StatsCard
          title="Monthly Salary"
          value={formatETB(totalSalary)}
          icon={<FaMoneyBillWave className="text-2xl" />}
          color="yellow"
        />
        <StatsCard
          title="Pending Payments"
          value={pendingPayments}
          icon={<FaUserClock className="text-2xl" />}
          color="red"
        />
      </div>

      {/* Recent Employees and Salary */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Employees</h2>
          <div className="space-y-4">
            {employees.slice(0, 3).map(employee => (
              <div key={employee.id} className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg">
                <img src={employee.avatar} alt={employee.name} className="w-10 h-10 rounded-full" />
                <div className="flex-1">
                  <p className="font-medium">{employee.name}</p>
                  <p className="text-sm text-gray-600">{employee.position}</p>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  employee.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {employee.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Salary Payments</h2>
          <div className="space-y-4">
            {salaryHistory.slice(0, 3).map(salary => (
              <SalaryCard key={salary.id} salary={salary} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;