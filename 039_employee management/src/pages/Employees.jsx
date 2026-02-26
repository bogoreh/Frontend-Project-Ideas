import React, { useState } from 'react';
import EmployeeCard from '../components/EmployeeCard';
import { employees } from '../data/mockData';
import { FaSearch, FaFilter } from 'react-icons/fa';

const Employees = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDepartment, setFilterDepartment] = useState('All');

  const filteredEmployees = employees.filter(employee => {
    const matchesSearch = employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         employee.position.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = filterDepartment === 'All' || employee.department === filterDepartment;
    return matchesSearch && matchesDepartment;
  });

  const departments = ['All', ...new Set(employees.map(emp => emp.department))];

  const handleView = (employee) => {
    alert(`Viewing ${employee.name}`);
  };

  const handleEdit = (employee) => {
    alert(`Editing ${employee.name}`);
  };

  const handleDelete = (employee) => {
    if (window.confirm(`Are you sure you want to delete ${employee.name}?`)) {
      alert(`Deleted ${employee.name}`);
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Employees</h1>
        <button className="btn-primary">+ Add New Employee</button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-md p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search employees..."
              className="input-field pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <FaFilter className="text-gray-400" />
            <select
              className="input-field w-auto"
              value={filterDepartment}
              onChange={(e) => setFilterDepartment(e.target.value)}
            >
              {departments.map(dept => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Employee Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredEmployees.map(employee => (
          <EmployeeCard
            key={employee.id}
            employee={employee}
            onView={handleView}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>

      {filteredEmployees.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No employees found</p>
        </div>
      )}
    </div>
  );
};

export default Employees;