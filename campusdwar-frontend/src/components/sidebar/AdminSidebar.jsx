import { NavLink } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className="sidebar">
      <h3>Admin Panel</h3>
      <ul>
        <li>
          <NavLink to="/admin/students">Students</NavLink>
        </li>
        <li>
          <NavLink to="/admin/faculty">Faculty</NavLink>
        </li>
        <li>
          <NavLink to="/admin/subjects">Subjects</NavLink>
        </li>
        <li>
          <NavLink to="/admin/users">Users</NavLink>
        </li>
        <li>
          <NavLink to="/admin/notifications">Notifications</NavLink>
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

export default AdminSidebar;
