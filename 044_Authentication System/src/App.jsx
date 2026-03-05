import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Home from './pages/Home';
import Welcome from './pages/Welcome';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="/" element={<Welcome />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;