import { useEffect, useState } from "react";
import {
  getCourses,
  getSubjects,
  getAttendanceStudents,
  saveAttendance,
} from "../../api/faculty";
import "../../styles/facultyAttendance.css";

const FacultyAttendance = () => {
  const [date, setDate] = useState("");
  const [course, setCourse] = useState("");
  const [subjectId, setSubjectId] = useState("");
  const [courses, setCourses] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [students, setStudents] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    getCourses().then((res) => setCourses(res.data || []));
    getSubjects().then((res) => setSubjects(res.data || []));
  }, []);

  const load = () => {
    if (!date || !course || !subjectId) return;
    getAttendanceStudents(course, subjectId, date).then((res) => {
      setStudents(res.data || []);
      setSelectAll(false);
    });
  };

  const toggleAll = (checked) => {
    setSelectAll(checked);
    setStudents(students.map((s) => ({ ...s, present: checked })));
  };

  const toggleOne = (id) => {
    setStudents(
      students.map((s) =>
        s.studentId === id ? { ...s, present: !s.present } : s,
      ),
    );
  };

  const submit = () => {
    saveAttendance({
      date,
      subjectId,
      students: students.map((s) => ({
        studentId: s.studentId,
        present: s.present,
      })),
    }).then(() => {
      setMessage("Attendance updated!!");

      // auto-hide message after 3 seconds
      setTimeout(() => {
        setMessage("");
      }, 3000);
    });
  };

  return (
    <div className="faculty-attendance">
      <h2>Attendance</h2>
      {message && <div className="attendance-message">{message}</div>}

      <div className="attendance-filters">
        <input type="date" onChange={(e) => setDate(e.target.value)} />

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
          <table className="attendance-table">
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    checked={selectAll}
                    onChange={(e) => toggleAll(e.target.checked)}
                  />
                </th>
                <th>Name</th>
                <th>PRN</th>
                <th>Roll No</th>
              </tr>
            </thead>

            <tbody>
              {students.map((s) => (
                <tr key={s.studentId}>
                  <td>
                    <input
                      type="checkbox"
                      checked={s.present}
                      onChange={() => toggleOne(s.studentId)}
                    />
                  </td>
                  <td>{s.name}</td>
                  <td>{s.prn}</td>
                  <td>{s.rollNo}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <button className="save-btn" onClick={submit}>
            Save Attendance
          </button>
        </>
      )}
    </div>
  );
};

export default FacultyAttendance;
