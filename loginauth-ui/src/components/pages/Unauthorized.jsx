import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center bg-light">
      <div className="card shadow p-4 text-center" style={{ maxWidth: "400px" }}>
        <h1 className="text-danger">403 - Unauthorized</h1>
        <p className="text-muted">You do not have permission to view this page.</p>

        <button
          onClick={() => navigate("/")}
          className="btn btn-primary mt-3 w-100"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default Unauthorized;
