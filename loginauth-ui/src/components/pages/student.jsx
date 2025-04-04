import React from 'react';
import LogoutButton from './Logout';

const Student = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
      <h1 className="text-success fw-bold mb-4">Welcome, Student!</h1>
      <LogoutButton />
    </div>
  );
};

export default Student;
