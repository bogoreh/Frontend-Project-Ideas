import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaTachometerAlt, FaUsers, FaMoneyBillWave, FaFileAlt, FaCog, FaPlusCircle } from 'react-icons/fa';

const Sidebar = () => {
  const menuItems = [
    { path: '/', icon: <FaTachometerAlt />, name: 'Dashboard' },
    { path: '/employees', icon: <FaUsers />, name: 'Employees' },
    { path: '/add-employee', icon: <FaPlusCircle />, name: 'Add Employee' },
    { path: '/salary', icon: <FaMoneyBillWave />, name: 'Salary' },
    { path: '/reports', icon: <FaFileAlt />, name: 'Reports' },
    { path: '/settings', icon: <FaCog />, name: 'Settings' },
  ];

  return (
    <aside className="bg-gradient-to-b from-blue-800 to-blue-900 text-white w-64 fixed h-full">
      <div className="p-6">
        <h1 className="text-2xl font-bold flex items-center">
          <FaUsers className="mr-2" />
          EMS
        </h1>
        <p className="text-xs text-blue-200 mt-1">Employee Management System</p>
      </div>
      
      <nav className="mt-8">
        {menuItems.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center px-6 py-3 text-sm transition duration-200 ${
                isActive
                  ? 'bg-blue-700 border-l-4 border-white'
                  : 'hover:bg-blue-700'
              }`
            }
          >
            <span className="mr-3">{item.icon}</span>
            {item.name}
          </NavLink>
        ))}
      </nav>
      
      <div className="absolute bottom-0 w-full p-6">
        <div className="bg-blue-700 rounded-lg p-4">
          <p className="text-sm font-medium">Total Employees</p>
          <p className="text-2xl font-bold">156</p>
          <p className="text-xs text-blue-200 mt-1">+12 this month</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;