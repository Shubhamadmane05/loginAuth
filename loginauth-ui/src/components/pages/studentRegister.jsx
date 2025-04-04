import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password: "",
    email: "",
    mobile: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/student/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setErrorMessage("");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        const data = await response.json();
        setErrorMessage(data.message || "Registration failed.");
      }
    } catch (error) {
      setErrorMessage("Server error. Please try again.");
      console.error(error);
    }
  };

  return (
    <div className="container d-flex vh-100 justify-content-center align-items-center">
      <div className="card shadow-lg p-4 w-50">
        <h2 className="text-center mb-4">Student Registration</h2>

        {success && (
          <div className="alert alert-success text-center">
            Registered successfully! Redirecting to login...
          </div>
        )}
        {errorMessage && <div className="alert alert-danger text-center">{errorMessage}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              type="text"
              name="fullName"
              className="form-control"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="number"
              name="mobile"
              className="form-control"
              placeholder="Mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>
        </form>

        <div className="text-center mt-3">
          <p>
            Already have an account?{" "}
            <button onClick={() => navigate("/login")} className="btn btn-link">
              Login
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
