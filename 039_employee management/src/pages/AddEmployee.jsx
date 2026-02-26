import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaMoneyBillWave, FaBriefcase, FaCalendar } from 'react-icons/fa';

const AddEmployee = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    department: 'IT',
    salary: '',
    joinDate: '',
    status: 'Active'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Employee Data:', formData);
    alert('Employee added successfully!');
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      position: '',
      department: 'IT',
      salary: '',
      joinDate: '',
      status: 'Active'
    });
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Add New Employee</h1>
      
      <div className="bg-white rounded-xl shadow-md p-8 max-w-3xl">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FaUser className="inline mr-2" />
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                required
                className="input-field"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FaEnvelope className="inline mr-2" />
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                required
                className="input-field"
                placeholder="john@company.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FaPhone className="inline mr-2" />
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                required
                className="input-field"
                placeholder="+251 911 234 567"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            {/* Position */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FaBriefcase className="inline mr-2" />
                Position *
              </label>
              <input
                type="text"
                name="position"
                required
                className="input-field"
                placeholder="Software Developer"
                value={formData.position}
                onChange={handleChange}
              />
            </div>

            {/* Department */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Department *
              </label>
              <select
                name="department"
                required
                className="input-field"
                value={formData.department}
                onChange={handleChange}
              >
                <option value="IT">IT</option>
                <option value="Human Resources">Human Resources</option>
                <option value="Sales">Sales</option>
                <option value="Finance">Finance</option>
                <option value="Marketing">Marketing</option>
              </select>
            </div>

            {/* Salary */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FaMoneyBillWave className="inline mr-2" />
                Monthly Salary (ETB) *
              </label>
              <input
                type="number"
                name="salary"
                required
                min="0"
                className="input-field"
                placeholder="25000"
                value={formData.salary}
                onChange={handleChange}
              />
            </div>

            {/* Join Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <FaCalendar className="inline mr-2" />
                Join Date *
              </label>
              <input
                type="date"
                name="joinDate"
                required
                className="input-field"
                value={formData.joinDate}
                onChange={handleChange}
              />
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status *
              </label>
              <select
                name="status"
                required
                className="input-field"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="Active">Active</option>
                <option value="On Leave">On Leave</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8 flex justify-end space-x-4">
            <button type="button" className="btn-secondary">
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              Add Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;