import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-info text-white text-center position-relative">
      <div className="px-4">
        <h1 className="display-3 fw-bold mb-4">
          Welcome to <span className="text-black">Our Platform</span>
        </h1>
        <p className="lead mb-4 text-black">
          Unlock seamless authentication and role-based access with a modern,
          intuitive experience.
        </p>
        

        <div className="d-flex gap-3 justify-content-center">
          <button
            onClick={() => navigate("/login")}
            className="btn btn-primary fw-semibold px-4"
          >
            Get Started
          </button>
          <button className="btn btn-light text-primary fw-semibold px-4">
            Explore More
          </button>
        </div>
      </div>

      {/* Background Overlay (optional) */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25"
        style={{ zIndex: -1 }}
      ></div>
    </div>
  );
};

export default Home;
