import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Register from './pages/Register';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import ForgotPassword from './pages/ForgotPassword';
import ProtectedRoute from './components/ProtectedRoute';
import './app.css';
import Navbar from './components/Navbar';
import Statistics from './pages/Statistics';

const MainApp = () => {
  const location = useLocation();
  const showNavbar = !(location.pathname === '/' || location.pathname === '/register' || location.pathname === '/forgot');

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route 
          path="/home" 
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/stats" 
          element={
            <ProtectedRoute>
              <Statistics/>
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/about" 
          element={
              <About />

          } 
        />
      </Routes>
    </>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <MainApp />
    </BrowserRouter>
  );
};

export default App;