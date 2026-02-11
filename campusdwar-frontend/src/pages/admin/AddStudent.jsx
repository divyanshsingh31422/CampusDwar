import { useEffect, useState } from "react";
import {
  getAllStudents,
  createStudent,
  deleteStudent,
  getAllUsers
} from "../../api/admin";

const AddStudent = () => {
  const [students, setStudents] = useState([]);
  const [users, setUsers] = useState([]);

  const [form, setForm] = useState({
    userId: "",
    name: "",
    course: "",
    rollNo: "",
    department: "",
    semester: "",
    prn: "",
    email: ""
  });

  const load = () => {
    getAllStudents().then(res => setStudents(res.data || []));
    getAllUsers().then(res => {
      console.log("USERS =", res.data);
      setUsers(res.data || []);
    });
  };

  useEffect(load, []);

  const handleUserSelect = (e) => {
    const selectedId = e.target.value;
    const selectedUser = users.find(u => u.userId.toString() === selectedId);
    
    console.log("Selected User ID:", selectedId);
    console.log("Found User:", selectedUser);

    if (selectedUser) {
      console.log("Setting Email to:", selectedUser.email);
      if (!selectedUser.email) {
        alert("Warning: This user account has no email set! Creation may fail.");
      }
    }

    setForm({
      ...form,
      userId: selectedId,
      email: selectedUser ? selectedUser.email : ""
    });
  };
  
  const submit = () => {
    // Basic validation
    if (!form.userId || !form.name || !form.email) {
      alert("User, Name, and Email are required");
      return;
    }

    const payload = {
      userId: Number(form.userId),
      name: form.name,
      course: form.course,
      rollNo: form.rollNo,
      department: form.department,
      semester: Number(form.semester),
      prn: form.prn,
      email: form.email
    };

    console.log("Submitting Student:", payload);

    createStudent(payload).then(() => {
      alert("Student added successfully");
      setForm({
        userId: "",
        name: "",
        course: "",
        rollNo: "",
        department: "",
        semester: "",
        prn: "",
        email: ""
      });
      load();
    }).catch(err => {
      console.error("Error adding student:", err);
      alert("Failed to add student. Check console for details.");
    });
  };

  return (
    <div className="main-content">
      <div className="admin-header">
        <h2>Manage Students</h2>
      </div>

      <div className="admin-card">
        <h4>Add New Student</h4>
        <div className="admin-form-grid">
          <div className="admin-form-group">
            <label>Select User Association</label>
            <select
              className="admin-input"
              value={form.userId}
              onChange={handleUserSelect}
            >
              <option value="">Select User</option>
              {users.map(u => (
                <option key={u.userId} value={u.userId}>
                  {u.email} ({u.role?.roleName || u.role})
                </option>
              ))}
            </select>
            <small style={{ color: "gray" }}>Select the user account for this student</small>
          </div>

          <div className="admin-form-group">
            <label>Email (Auto-filled)</label>
            <input
              className="admin-input"
              value={form.email}
              readOnly
              placeholder="Email will appear here"
              style={{ backgroundColor: "#f1f5f9", cursor: "not-allowed", color: "#64748b" }}
            />
          </div>

          <div className="admin-form-group">
            <label>Name</label>
            <input
              className="admin-input"
              placeholder="Enter Name"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
            />
          </div>

          <div className="admin-form-group">
            <label>PRN</label>
            <input
              className="admin-input"
              placeholder="Enter PRN"
              value={form.prn || ""}
              onChange={e => setForm({ ...form, prn: e.target.value })}
            />
          </div>

          <div className="admin-form-group">
            <label>Course</label>
            <input
              className="admin-input"
              placeholder="Enter Course"
              value={form.course}
              onChange={e => setForm({ ...form, course: e.target.value })}
            />
          </div>

          <div className="admin-form-group">
            <label>Roll No</label>
            <input
              className="admin-input"
              placeholder="Enter Roll No"
              value={form.rollNo}
              onChange={e => setForm({ ...form, rollNo: e.target.value })}
            />
          </div>

          <div className="admin-form-group">
            <label>Department</label>
            <input
              className="admin-input"
              placeholder="Enter Department"
              value={form.department}
              onChange={e => setForm({ ...form, department: e.target.value })}
            />
          </div>

          <div className="admin-form-group">
            <label>Semester</label>
            <input
              type="number"
              className="admin-input"
              placeholder="Enter Semester"
              value={form.semester}
              onChange={e => setForm({ ...form, semester: e.target.value })}
            />
          </div>
        </div>

        <button className="admin-btn" onClick={submit}>
          + Add Student
        </button>
      </div>

      <div className="admin-card">
        <h4>Student List</h4>
        <div className="admin-table-container">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Course</th>
                <th>Semester</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map(s => (
                <tr key={s.studentId}>
                  <td>{s.name}</td>
                  <td>{s.course}</td>
                  <td>{s.semester}</td>
                  <td>
                    <button className="admin-btn-danger" onClick={() => deleteStudent(s.studentId).then(load)}>
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

export default AddStudent;
