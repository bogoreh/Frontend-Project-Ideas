import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Employees from './pages/Employees';
import AddEmployee from './pages/AddEmployee';
import Salary from './pages/Salary';
import Reports from './pages/Reports';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 ml-64">
          <Header />
          <main className="pt-16 min-h-screen">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/employees" element={<Employees />} />
              <Route path="/add-employee" element={<AddEmployee />} />
              <Route path="/salary" element={<Salary />} />
              <Route path="/reports" element={<Reports />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;