import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Data from './pages/Data';
import DataShow from './pages/DataShow';
import Form from './pages/Form';

import { AuthProvider } from './auth/AuthProvider';

export default function App() {
  const theme = localStorage.getItem('dark-theme');
  
  if (theme === "true") {
    document.body.classList.add('dark-theme');
  }
  else {
    document.body.classList.remove('dark-theme');
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
          <Route path="/form" element={<Form />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}