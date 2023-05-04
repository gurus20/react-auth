import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Data from './pages/Data';
import DataShow from './pages/DataShow';

import { AuthProvider } from './auth/AuthProvider';

export default function App() {
  const theme = localStorage.getItem('dark-theme');
  
  console.log(theme)
  if (theme === "true") {
    document.body.classList.toggle('dark-theme');
  }

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/data" element={<Data />} />
          <Route path="/datashow" element={<DataShow />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}