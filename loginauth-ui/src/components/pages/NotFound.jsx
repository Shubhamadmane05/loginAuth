import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center min-vh-100 text-center">
      <h1 className="display-1 text-danger fw-bold">404</h1>
      <p className="fs-4">Oops! The page you're looking for doesn't exist.</p>
      <button
        className="btn btn-primary mt-3"
        onClick={() => navigate('/')}
      >
        Go Back Home
      </button>
    </div>
  );
};

export default NotFound;
