import { useEffect, useState } from "react";
import { getAllSubjects, createSubject, deleteSubject, getAllFaculty } from "../../api/admin";

const AddSubject = () => {
  const [subjects, setSubjects] = useState([]);
  const [facultyList, setFacultyList] = useState([]);
  
  const [form, setForm] = useState({
    subjectName: "",
    semester: 1,
    facultyId: ""
  });

  const load = () => {
    getAllSubjects()
      .then(res => setSubjects(res.data || []))
      .catch(err => console.error("Error loading subjects:", err));
      
    getAllFaculty()
      .then(res => setFacultyList(res.data || []))
      .catch(err => console.error("Error loading faculty:", err));
  };

  useEffect(() => {
    load();
  }, []);

  const submit = () => {
    if (!form.subjectName || !form.facultyId) {
      alert("Please fill Subject Name and Select Faculty");
      return;
    }

    createSubject(form)
      .then(() => {
        alert("Subject Added!");
        setForm({ subjectName: "", semester: 1, facultyId: "" });
        load();
      })
      .catch(err => {
        console.error("Error creating subject:", err);
        alert("Failed to add subject");
      });
  };

  return (
    <div className="main-content">
      <div className="admin-header">
        <h2>Manage Subjects</h2>
      </div>

      <div className="admin-card">
        <h4>Add New Subject</h4>
        <div className="admin-form-grid">
          <div className="admin-form-group">
            <label>Subject Name</label>
            <input
              className="admin-input"
              placeholder="Enter Subject Name"
              value={form.subjectName}
              onChange={e => setForm({ ...form, subjectName: e.target.value })}
            />
          </div>

          <div className="admin-form-group">
            <label>Semester</label>
            <input
              type="number"
              className="admin-input"
              value={form.semester}
              min="1"
              max="8"
              onChange={e => setForm({ ...form, semester: e.target.value })}
            />
          </div>

          <div className="admin-form-group">
            <label>Assign Faculty</label>
            <select
              className="admin-input"
              value={form.facultyId}
              onChange={e => setForm({ ...form, facultyId: e.target.value })}
            >
              <option value="">Select Faculty</option>
              {facultyList.map(f => (
                <option key={f.facultyId} value={f.facultyId}>
                  {f.name} ({f.department})
                </option>
              ))}
            </select>
          </div>
        </div>
        <button className="admin-btn" onClick={submit}>
          + Add Subject
        </button>
      </div>

      <div className="admin-card">
        <h4>Subject List</h4>
        <div className="admin-table-container">
          <table>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Semester</th>
                <th>Assigned Faculty</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {subjects.map(s => (
                <tr key={s.subjectId}>
                  <td>{s.subjectName}</td>
                  <td>{s.semester}</td>
                  <td>{s.faculty ? s.faculty.name : "N/A"}</td>
                  <td>
                    <button className="admin-btn-danger" onClick={() => deleteSubject(s.subjectId).then(load)}>
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

export default AddSubject;
