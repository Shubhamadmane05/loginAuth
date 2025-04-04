import { Routes, Route } from 'react-router-dom';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Admin from './components/pages/admin';
import Student from './components/pages/student';
import Login from './components/auth/login';
import Unauthorized from './components/pages/unauthorized';
import RegisterForm from './components/pages/studentRegister';
import './index.css';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path='/signup' element={<RegisterForm />} />
      
      {/* Admin can access both routes */}
      <Route 
        path="/admin" 
        element={
          <ProtectedRoute allowedRoles={['ROLE_ADMIN']}>
            <Admin />
          </ProtectedRoute>
        } 
      />
      <Route 
        path="/student" 
        element={
          <ProtectedRoute allowedRoles={['ROLE_ADMIN', 'ROLE_STUDENT']}>
            <Student />
          </ProtectedRoute>
        } 
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
