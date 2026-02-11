import { NavLink } from "react-router-dom";
import "../../styles/sidebar.css";

const FacultySidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li>
          <NavLink to="/faculty" end>
            👤 Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/faculty/dashboard">📊 Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/faculty/students">👨‍🎓 Students</NavLink>
        </li>
        <li>
          <NavLink to="/faculty/attendance">📝 Attendance</NavLink>
        </li>
        <li>
          <NavLink to="/faculty/marks">📘 Marks</NavLink>
        </li>
        <li>
          <NavLink to="/faculty/assignments">📂 Assignments</NavLink>
        </li>
        <li>
          <NavLink to="/faculty/leave-approval">📄 Leave Approval</NavLink>
        </li>
        <li>
          <NavLink to="/faculty/notifications">🔔 Notifications</NavLink>
        </li>
      </ul>
      <div className="logout-section" style={{ padding: "20px" }}>
        <button
          onClick={() => {
            localStorage.clear();
            window.location.href = "/login";
          }}
          style={{
            width: "100%",
            padding: "10px",
            background: "#dc3545",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold"
          }}
        >
          Logout
        </button>
      </div>
    </aside>
  );
};

export default FacultySidebar;
