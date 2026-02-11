import { useEffect, useState } from "react";
import { getAllFaculty, createFaculty, deleteFaculty } from "../../api/admin";

const AddFaculty = () => {
  const [faculty, setFaculty] = useState([]);
  const [form, setForm] = useState({});

  const load = () => {
    getAllFaculty()
      .then(res => setFaculty(res.data || []))
      .catch(err => console.error("Error loading faculty:", err));
  };

  useEffect(() => {
    load();
  }, []);

  const submit = () => {
    createFaculty(form).then(() => {
      setForm({});
      load();
    });
  };

  return (
    <div className="main-content">
      <div className="admin-header">
        <h2>Manage Faculty</h2>
      </div>

      <div className="admin-card">
        <h4>Add New Faculty</h4>
        <div className="admin-form-grid">
          <div className="admin-form-group">
            <label>Name</label>
            <input className="admin-input" placeholder="Enter Name" onChange={e => setForm({ ...form, name: e.target.value })} />
          </div>
          <div className="admin-form-group">
            <label>Email</label>
            <input className="admin-input" placeholder="Enter Email" onChange={e => setForm({ ...form, email: e.target.value })} />
          </div>
          <div className="admin-form-group">
            <label>Department</label>
            <input className="admin-input" placeholder="Enter Department" onChange={e => setForm({ ...form, department: e.target.value })} />
          </div>
        </div>
        <button className="admin-btn" onClick={submit}>
          + Add Faculty
        </button>
      </div>

      <div className="admin-card">
        <h4>Faculty List</h4>
        <div className="admin-table-container">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Department</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {faculty.map(f => (
                <tr key={f.facultyId}>
                  <td>{f.name}</td>
                  <td>{f.department}</td>
                  <td>
                    <button className="admin-btn-danger" onClick={() => deleteFaculty(f.facultyId).then(load)}>
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

export default AddFaculty;
