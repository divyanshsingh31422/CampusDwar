import { useEffect, useState } from "react";
import { createUser, getAllUsers, deleteUser } from "../../api/admin";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({});

  const load = () => {
    getAllUsers()
      .then(res => setUsers(res.data || []))
      .catch(err => console.error("Error loading users:", err));
  };

  useEffect(() => {
    load();
  }, []);

  const [message, setMessage] = useState("");

  const submit = () => {
    if (!form.username || !form.email || !form.password || !form.roleName) {
      alert("Please fill all fields");
      return;
    }

    const payload = { ...form };
    
    
    createUser(payload)
      .then(() => {
        alert("User added successfully!");
        setForm({});
        load();
      })
      .catch(err => {
        console.error("Error creating user:", err);
        alert("Failed to create user. Check console for details.");
      });
  };

  return (
    <div className="main-content">
      <div className="admin-header">
        <h2>Manage Users</h2>
      </div>

      <div className="admin-card">
        <h4>Add New User</h4>
        <div className="admin-form-grid">
          <div className="admin-form-group">
            <label>Username</label>
            <input 
              className="admin-input" 
              placeholder="Enter Username" 
              value={form.username || ""} 
              onChange={e => setForm({ ...form, username: e.target.value })} 
            />
          </div>
          <div className="admin-form-group">
            <label>Email</label>
            <input 
              className="admin-input" 
              placeholder="Enter Email" 
              value={form.email || ""} 
              onChange={e => setForm({ ...form, email: e.target.value })} 
            />
          </div>
          <div className="admin-form-group">
            <label>Password</label>
            <input 
              className="admin-input" 
              placeholder="Enter Password" 
              value={form.password || ""} 
              onChange={e => setForm({ ...form, password: e.target.value })} 
            />
          </div>
          <div className="admin-form-group">
            <label>Role</label>
            <select 
              className="admin-input" 
              value={form.roleName || ""} 
              onChange={e => setForm({ ...form, roleName: e.target.value })}
            >
              <option value="">Select Role</option>
              <option value="ROLE_ADMIN">ADMIN</option>
              <option value="ROLE_FACULTY">FACULTY</option>
              <option value="ROLE_STUDENT">STUDENT</option>
            </select>
          </div>
        </div>
        <button className="admin-btn" onClick={submit}>
          + Add User
        </button>
      </div>

      <div className="admin-card">
        <h4>User List</h4>
        <div className="admin-table-container">
          <table>
            <thead>
              <tr><th>Email</th><th>Role</th><th>Action</th></tr>
            </thead>
            <tbody>
              {users.map(u => (
                <tr key={u.userId}>
                  <td>{u.email}</td>
                  <td>{u.role?.roleName}</td>
                  <td>
                    <button className="admin-btn-danger" onClick={() => deleteUser(u.userId).then(load)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Users;
