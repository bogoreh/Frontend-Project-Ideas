import React from 'react';
import { formatETB, formatDate } from '../utils/formatters';
import { FaCheckCircle, FaClock } from 'react-icons/fa';

const SalaryCard = ({ salary }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-800">{salary.employeeName}</h3>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
          salary.status === 'Paid' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-yellow-100 text-yellow-800'
        }`}>
          {salary.status === 'Paid' ? <FaCheckCircle className="inline mr-1" /> : <FaClock className="inline mr-1" />}
          {salary.status}
        </span>
      </div>
      
      <div className="space-y-3">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Basic Salary:</span>
          <span className="font-medium">{formatETB(salary.basicSalary)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Allowance:</span>
          <span className="font-medium text-green-600">+{formatETB(salary.allowance)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Deduction:</span>
          <span className="font-medium text-red-600">-{formatETB(salary.deduction)}</span>
        </div>
        <div className="border-t pt-3">
          <div className="flex justify-between font-semibold">
            <span>Net Salary:</span>
            <span className="text-blue-600">{formatETB(salary.netSalary)}</span>
          </div>
        </div>
        
        <div className="text-xs text-gray-500 mt-2">
          {salary.paymentDate ? (
            <p>Paid on: {formatDate(salary.paymentDate)}</p>
          ) : (
            <p>Month: {salary.month} {salary.year}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SalaryCard;