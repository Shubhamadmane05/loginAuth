import React, { useEffect, useState } from 'react';
import LogoutButton from './Logout';

const Admin = () => {
 const [username, setUsername] = useState('');
  useEffect(() => {
      const storedUsername = localStorage.getItem("username");
      if (storedUsername) {
        setUsername(storedUsername);
      }
    }, []);
  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100">
      <h1 className="text-primary mb-4">Welcome,{username || "Admin"}</h1>
      <LogoutButton />
    </div>
  );
};

export default Admin;
