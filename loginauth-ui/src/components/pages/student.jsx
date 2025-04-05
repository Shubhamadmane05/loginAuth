import React, { useEffect, useState } from 'react';
import LogoutButton from './Logout';

const Student = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
      <h1 className="text-success fw-bold mb-2">Welcome, {username || 'Student'}!</h1>
      <LogoutButton />
    </div>
  );
};

export default Student;
