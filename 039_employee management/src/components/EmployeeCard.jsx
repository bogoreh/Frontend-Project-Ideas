import React from 'react';
import { FaEdit, FaTrash, FaEye } from 'react-icons/fa';
import { formatETB } from '../utils/formatters';

const EmployeeCard = ({ employee, onView, onEdit, onDelete }) => {
  const statusColors = {
    'Active': 'bg-green-100 text-green-800',
    'On Leave': 'bg-yellow-100 text-yellow-800',
    'Inactive': 'bg-red-100 text-red-800'
  };

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <div className="p-6">
        <div className="flex items-center space-x-4">
          <img
            src={employee.avatar}
            alt={employee.name}
            className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
          />
          <div className="flex-1">
            <h3 className="font-semibold text-lg text-gray-800">{employee.name}</h3>
            <p className="text-sm text-gray-600">{employee.position}</p>
            <span className={`inline-block px-2 py-1 text-xs rounded-full mt-2 ${statusColors[employee.status]}`}>
              {employee.status}
            </span>
          </div>
        </div>
        
        <div className="mt-4 space-y-2">
          <p className="text-sm text-gray-600">
            <span className="font-medium">Department:</span> {employee.department}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium">Email:</span> {employee.email}
          </p>
          <p className="text-sm text-gray-600">
            <span className="font-medium">Salary:</span> {formatETB(employee.salary)}
          </p>
        </div>
        
        <div className="mt-4 flex justify-end space-x-2">
          <button
            onClick={() => onView(employee)}
            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
          >
            <FaEye />
          </button>
          <button
            onClick={() => onEdit(employee)}
            className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition"
          >
            <FaEdit />
          </button>
          <button
            onClick={() => onDelete(employee)}
            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;