import { useEffect, useState } from "react";
import {
  getCourses,
  getSubjects,
  getMarksStudents,
  saveMarks,
} from "../../api/faculty";
import "../../styles/facultyMarks.css";

const FacultyMarks = () => {
  const [course, setCourse] = useState("");
  const [subjectId, setSubjectId] = useState("");
  const [courses, setCourses] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [students, setStudents] = useState([]);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    getCourses().then((res) => setCourses(res.data || []));
    getSubjects().then((res) => setSubjects(res.data || []));
  }, []);

  const load = () => {
    if (!course || !subjectId) return;
    getMarksStudents(course, subjectId).then((res) =>
      setStudents(res.data || []),
    );
  };

  const update = (id, field, value) => {
    setStudents(
      students.map((s) => (s.studentId === id ? { ...s, [field]: value } : s)),
    );
  };

const submit = () => {
  const invalid = students.some(
    s =>
      (s.internalMarks ?? 0) > 20 ||
      (s.externalMarks ?? 0) > 80
  );

  if (invalid) {
    setError("Fix marks limits before saving");
    return;
  }

  saveMarks({
    subjectId,
    students: students.map(s => ({
      studentId: s.studentId,
      internalMarks: Number(s.internalMarks || 0),
      externalMarks: Number(s.externalMarks || 0)
    }))
  }).then(() => {
    setMessage("Marks updated!!");
    setError("");
    setTimeout(() => setMessage(""), 3000);
  });
};


  return (
    <div className="faculty-marks">
      <h2>Marks</h2>

      {message && <div className="marks-message">{message}</div>}
      {error && (
  <div className="marks-error">
    {error}
  </div>
)}


      <div className="marks-filters">
        <select onChange={(e) => setCourse(e.target.value)}>
          <option value="">Select Course</option>
          {courses.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <select onChange={(e) => setSubjectId(e.target.value)}>
          <option value="">Select Subject</option>
          {subjects.map((s) => (
            <option key={s.subjectId} value={s.subjectId}>
              {s.subjectName}
            </option>
          ))}
        </select>

        <button onClick={load}>Load</button>
      </div>

      {students.length > 0 && (
        <>
          <table className="marks-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>PRN</th>
                <th>Roll No</th>
                <th>Internal</th>
                <th>External</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>
              {students.map((s) => (
                <tr key={s.studentId}>
                  <td>{s.name}</td>
                  <td>{s.prn}</td>
                  <td>{s.rollNo}</td>
                  <td>
                    <input
                      type="number"
                      min="0"
                      max="20"
                      value={s.internalMarks ?? ""}
                      onChange={(e) => {
                        const val = Number(e.target.value);
                        if (val <= 20) {
                          update(s.studentId, "internalMarks", val);
                          setError("");
                        } else {
                          setError("Internal marks must be ≤ 20");
                        }
                      }}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      min="0"
                      max="80"
                      value={s.externalMarks ?? ""}
                      onChange={(e) => {
                        const val = Number(e.target.value);
                        if (val <= 80) {
                          update(s.studentId, "externalMarks", val);
                          setError("");
                        } else {
                          setError("External marks must be ≤ 80");
                        }
                      }}
                    />
                  </td>
                  <td>
                    {Number(s.internalMarks || 0) +
                      Number(s.externalMarks || 0)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button className="save-btn" onClick={submit}>
            Save Marks
          </button>
        </>
      )}
    </div>
  );
};

export default FacultyMarks;
