import React from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/login'); // Redirect to login after logout
  };

  return (
    <button
      onClick={handleLogout}
      className="btn btn-danger"
    >
      Logout
    </button>
  );
};

export default LogoutButton;
