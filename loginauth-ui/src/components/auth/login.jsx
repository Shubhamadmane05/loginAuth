import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [photo, setPhoto]=useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLoginSuccess = (role) => {
    console.log("User Role:", role);
    if (role === "ROLE_ADMIN") {
      navigate("/admin");
    } else if (role === "ROLE_STUDENT") {
      navigate("/student");
    } else {
      console.error("Unknown role:", role);
      setErrorMessage("Role is not recognized.");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // clear previous error
  
    try {
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
  
      let data;
      const contentType = response.headers.get("content-type");
  
      // Check if the response is JSON or plain text
      if (contentType && contentType.includes("application/json")) {
        data = await response.json();
      } else {
        const text = await response.text();
        data = { message: text }; // wrap plain string in object
      }
  
      console.log("Backend Response:", data);
  
      if (response.ok && data.token && data.userData) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.userData);
        localStorage.setItem("username", username);
        localStorage.setItem("photo", photo);
        handleLoginSuccess(data.userData);
      } else if (response.status === 403 || response.status === 401) {
     
        setErrorMessage(data.message || "Invalid username or password.");
      } else {
        // Other errors
        setErrorMessage(data.message || "Something went wrong. Please try again.");
      }
  
    } catch (error) {
      console.error("Login Error:", error);
      setErrorMessage("Server error. Please try again later.");
    }
  };
  
  
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <button
          onClick={() => navigate('/')}
          className="btn-close position-absolute top-0 end-0 m-3"
          aria-label="Close"
        ></button>

        <h2 className="text-center mb-4">Login</h2>

        {errorMessage && (
          <div className="alert alert-danger text-center" role="alert">
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              id="username"
              className="form-control"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Login
          </button>
        </form>

        <div className="text-center mt-3">
          <span>Don't have an account? </span>
          <button className="btn btn-link p-0" onClick={() => navigate('/signup')}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
