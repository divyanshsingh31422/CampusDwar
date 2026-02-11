import { useEffect, useState } from "react";
import { getMyFacultyProfile } from "../../api/faculty";
import "../../styles/account.css";

const FacultyProfile = () => {
  const [faculty, setFaculty] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    getMyFacultyProfile()
      .then((res) => {
        console.log("FACULTY PROFILE RESPONSE:", res.data);
        setFaculty(res.data);
      })
      .catch((err) => {
        console.error("FACULTY PROFILE ERROR:", err);
        setError("Failed to load profile");
      });
  }, []);

  if (error) return <p>{error}</p>;
  if (!faculty) return <p>Loading faculty profile...</p>;

  return (
    <div className="account-content">
      <h2>Faculty Profile</h2>

      <div className="info-box">
        <h3>Personal Information</h3>

        <div className="info-grid">
          <div className="info-field">
            <label>Name</label>
            <input value={faculty.name ?? ""} readOnly />
          </div>

          <div className="info-field">
            <label>Email</label>
            <input value={faculty.email ?? ""} readOnly />
          </div>

          <div className="info-field">
            <label>Department</label>
            <input value={faculty.department ?? ""} readOnly />
          </div>

          <div className="info-field">
            <label>Phone No</label>
            <input value={faculty.phoneNo ?? ""} readOnly />
          </div>

          <div className="info-field">
            <label>Gender</label>
            <input value={faculty.gender ?? ""} readOnly />
          </div>

          <div className="info-field">
            <label>Status</label>
            <input value={faculty.status ?? ""} readOnly />
          </div>

          <div className="info-field">
            <label>Address</label>
            <input value={faculty.address ?? ""} readOnly />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyProfile;
