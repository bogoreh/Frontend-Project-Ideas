export const courses = [
  {
    id: 1,
    title: "Introduction to React",
    description: "Learn the fundamentals of React including components, props, and state.",
    instructor: "Sarah Johnson",
    duration: "8 hours",
    level: "Beginner",
    progress: 65,
    category: "Frontend",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 2,
    title: "JavaScript Fundamentals",
    description: "Master the core concepts of JavaScript programming.",
    instructor: "Michael Chen",
    duration: "12 hours",
    level: "Beginner",
    progress: 30,
    category: "Programming",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 3,
    title: "Advanced CSS Techniques",
    description: "Take your CSS skills to the next level with modern techniques.",
    instructor: "Alexis Williams",
    duration: "10 hours",
    level: "Intermediate",
    progress: 0,
    category: "Frontend",
    image: "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 4,
    title: "Node.js Backend Development",
    description: "Build scalable server-side applications with Node.js.",
    instructor: "David Miller",
    duration: "15 hours",
    level: "Intermediate",
    progress: 10,
    category: "Backend",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 5,
    title: "UI/UX Design Principles",
    description: "Learn the core principles of user interface and experience design.",
    instructor: "Emma Davis",
    duration: "6 hours",
    level: "Beginner",
    progress: 0,
    category: "Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: 6,
    title: "Python for Data Science",
    description: "Use Python for data analysis, visualization, and machine learning.",
    instructor: "Robert Kim",
    duration: "20 hours",
    level: "Advanced",
    progress: 0,
    category: "Data Science",
    image: "https://images.unsplash.com/photo-1526379879527-8559ecfcaec5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
  }
];

export const lessons = [
  { id: 1, title: "Components and Props", duration: "45 min", completed: true },
  { id: 2, title: "State and Lifecycle", duration: "60 min", completed: true },
  { id: 3, title: "Hooks in Depth", duration: "75 min", completed: false },
  { id: 4, title: "Context API", duration: "50 min", completed: false },
  { id: 5, title: "React Router", duration: "65 min", completed: false }
];

export const categories = ["All", "Frontend", "Backend", "Programming", "Design", "Data Science"];