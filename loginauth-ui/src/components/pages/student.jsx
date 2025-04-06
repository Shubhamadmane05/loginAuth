import React, { useEffect, useState } from "react";
import LogoutButton from "./Logout";

const Student = () => {
  const [profile, setProfile] = useState(null);
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await fetch("http://localhost:8080/student/profile", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        setProfile(data);
      } catch (err) {
        console.error("Error loading profile:", err);
      }
    };

    const fetchExams = async () => {
      try {
        const res = await fetch("http://localhost:8080/moderator/exams/all", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        setExams(data);
      } catch (err) {
        console.error("Error loading exams:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
    fetchExams();
  }, [token]);

  if (loading) return <div className="text-center mt-5">Loading...</div>;

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4 mb-4">
        <div className="d-flex align-items-center">
          <img
            src={profile?.photo}
            alt="Photo"
            className="rounded-circle me-4"
            style={{ width: "120px", height: "120px", objectFit: "cover" }}
          />

          <div>
            <h3 className="fw-bold">{profile?.fullName}</h3>
            <p className="mb-0">Username: {profile?.username}</p>
            <p className="mb-0">Email: {profile?.email}</p>
            <p className="mb-0">Mobile: {profile?.mobile}</p>
          </div>
        </div>
      </div>

      <div className="card shadow-sm p-4 mb-4">
        <h4 className="mb-3">Available Exams</h4>
        {exams.length === 0 ? (
          <p>No available exams at the moment.</p>
        ) : (
          <ul className="list-group">
            {exams.map((exam) => (
              <li key={exam.id} className="list-group-item">
              <div className="d-flex flex-column">
                <strong>Title:</strong> {exam.title}
                <strong>Description:</strong> {exam.description}
                <strong>Duration (minutes):</strong> {exam.durationMinutes}
              </div>
              <div className="mt-2">
                <button className="btn btn-primary btn-sm">Start Exam</button>
              </div>
            </li>
            
            ))}
          </ul>
        )}
      </div>

      <div className="text-center">
        <LogoutButton />
      </div>
    </div>
  );
};

export default Student;










// import React, { useEffect, useState } from 'react';
// import LogoutButton from './Logout';

// const Student = () => {
//   const [username, setUsername] = useState('');

//   useEffect(() => {
//     const storedUsername = localStorage.getItem("username");
//     if (storedUsername) {
//       setUsername(storedUsername);
//     }
//   }, []);

//   return (
//     <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
//       <h1 className="text-success fw-bold mb-2">Welcome, {username || 'Student'}!</h1>
//       <LogoutButton />
//     </div>
//   );
// };

// export default Student;
