import React from 'react';
import LogoutButton from './Logout';

const Admin = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100">
      <h1 className="text-primary mb-4">Welcome, Admin!</h1>
      <LogoutButton />
    </div>
  );
};

export default Admin;
