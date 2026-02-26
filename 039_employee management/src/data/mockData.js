export const employees = [
  {
    id: 1,
    name: 'Abebe Kebede',
    position: 'Software Developer',
    department: 'IT',
    email: 'abebe.kebede@company.com',
    phone: '+251 911 123 456',
    joinDate: '2023-01-15',
    salary: 25000,
    status: 'Active',
    avatar: 'https://i.pravatar.cc/150?img=1'
  },
  {
    id: 2,
    name: 'Sara Hailu',
    position: 'HR Manager',
    department: 'Human Resources',
    email: 'sara.hailu@company.com',
    phone: '+251 922 234 567',
    joinDate: '2022-06-20',
    salary: 35000,
    status: 'Active',
    avatar: 'https://i.pravatar.cc/150?img=2'
  },
  {
    id: 3,
    name: 'Tekle Berhan',
    position: 'Sales Executive',
    department: 'Sales',
    email: 'tekle.berhan@company.com',
    phone: '+251 933 345 678',
    joinDate: '2023-03-10',
    salary: 18000,
    status: 'Active',
    avatar: 'https://i.pravatar.cc/150?img=3'
  },
  {
    id: 4,
    name: 'Meron Alemu',
    position: 'Accountant',
    department: 'Finance',
    email: 'meron.alemu@company.com',
    phone: '+251 944 456 789',
    joinDate: '2022-11-05',
    salary: 28000,
    status: 'Active',
    avatar: 'https://i.pravatar.cc/150?img=4'
  },
  {
    id: 5,
    name: 'Dawit Tesfaye',
    position: 'Marketing Specialist',
    department: 'Marketing',
    email: 'dawit.tesfaye@company.com',
    phone: '+251 955 567 890',
    joinDate: '2023-08-22',
    salary: 22000,
    status: 'On Leave',
    avatar: 'https://i.pravatar.cc/150?img=5'
  }
];

export const salaryHistory = [
  {
    id: 1,
    employeeId: 1,
    employeeName: 'Abebe Kebede',
    month: 'February',
    year: 2025,
    basicSalary: 25000,
    allowance: 3000,
    deduction: 500,
    netSalary: 27500,
    status: 'Paid',
    paymentDate: '2025-02-28'
  },
  {
    id: 2,
    employeeId: 2,
    employeeName: 'Sara Hailu',
    month: 'February',
    year: 2025,
    basicSalary: 35000,
    allowance: 4000,
    deduction: 600,
    netSalary: 38400,
    status: 'Paid',
    paymentDate: '2025-02-28'
  },
  {
    id: 3,
    employeeId: 3,
    employeeName: 'Tekle Berhan',
    month: 'February',
    year: 2025,
    basicSalary: 18000,
    allowance: 2000,
    deduction: 300,
    netSalary: 19700,
    status: 'Pending',
    paymentDate: null
  }
];

export const departments = [
  { id: 1, name: 'IT', employeeCount: 12 },
  { id: 2, name: 'Human Resources', employeeCount: 5 },
  { id: 3, name: 'Sales', employeeCount: 8 },
  { id: 4, name: 'Finance', employeeCount: 6 },
  { id: 5, name: 'Marketing', employeeCount: 7 }
];