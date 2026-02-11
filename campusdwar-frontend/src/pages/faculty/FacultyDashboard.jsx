import { useEffect, useState } from "react";
import { getFacultyDashboard } from "../../api/faculty";
import "../../styles/facultyDashboard.css";
import { useNavigate } from "react-router-dom";

const FacultyDashboard = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    getFacultyDashboard()
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  if (!data) return <p>Loading dashboard...</p>;

  return (
    <div className="faculty-dashboard">
      <h2>Faculty Dashboard</h2>

      {/* ===== STATS ===== */}
      <div className="dashboard-cards">
        <div className="card">
          <h3>{data.totalStudents}</h3>
          <p>Total Students</p>
        </div>

        <div className="card">
          <h3>{data.totalCourses}</h3>
          <p>Total Courses</p>
        </div>

        <div className="card">
          <h3>{data.totalSubjects}</h3>
          <p>Total Subjects</p>
        </div>

        <div className={`card ${data.attendanceTakenToday ? "success" : "warning"}`}>
          <h3>
            {data.attendanceTakenToday ? "Done" : "Pending"}
          </h3>
          <p>Today’s Attendance</p>
        </div>
      </div>

      {/* ===== QUICK ACTIONS ===== */}
      <div className="dashboard-actions">
        <button onClick={() => navigate("/faculty/attendance")}>
          Take Attendance
        </button>

        <button onClick={() => navigate("/faculty/marks")}>
          Update Marks
        </button>

        <button onClick={() => navigate("/faculty/students")}>
          View Students
        </button>
      </div>
    </div>
  );
};

export default FacultyDashboard;
