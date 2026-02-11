import { NavLink } from "react-router-dom";
import "../../styles/sidebar.css";

const StudentSidebar = () => {
  return (
    <div className="sidebar">

      {/* ===== Sidebar Header ===== */}
      {/* <div className="sidebar-header">
        IACSD
      </div> */}

      <ul>
        <li>
          <NavLink to="/student/account">👤 Account Info</NavLink>
        </li>

        <li>
          <NavLink to="/student/faculty">🧑‍🏫 Faculty Info</NavLink>
        </li>

        <li>
          <NavLink to="/student/marks">📊 Marks</NavLink>
        </li>

        <li>
          <NavLink to="/student/attendance">📅 Attendance</NavLink>
        </li>

        <li>
          <NavLink to="/student/documents">📁 Documents</NavLink>
        </li>

        <li>
          <NavLink to="/student/leave">📝 Leave</NavLink>
        </li>

        <li>
          <NavLink to="/student/schedule">🗓️ Class Schedule</NavLink>
        </li>

        <li>
          <NavLink to="/student/notifications">🔔 Notifications</NavLink>
        </li>

        <li>
          <NavLink to="/student/feedback">💬 Feedback</NavLink>
        </li>

        <li>
          <NavLink to="/student/assignments">📚 Assignments</NavLink>
        </li>

        <li>
          <NavLink to="/student/settings">⚙️ Settings</NavLink>
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
    </div>
  );
};

export default StudentSidebar;
