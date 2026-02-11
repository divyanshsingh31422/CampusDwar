import { useEffect, useMemo, useState } from "react";
import { getAllStudents } from "../../api/faculty";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [course, setCourse] = useState("ALL");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllStudents()
      .then(res => {
        console.log("STUDENTS =", res.data);
        setStudents(res.data || []);
      })
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const courses = useMemo(() => {
    const set = new Set();
    students.forEach(s => s.course && set.add(s.course));
    return Array.from(set);
  }, [students]);

  const filteredStudents = useMemo(() => {
    return students.filter(s => {
      const matchCourse =
        course === "ALL" || s.course === course;

      const text = search.toLowerCase();
      const matchSearch =
        s.name?.toLowerCase().includes(text) ||
        s.prn?.toLowerCase().includes(text) ||
        s.rollNo?.toLowerCase().includes(text) ||
        s.email?.toLowerCase().includes(text);

      return matchCourse && matchSearch;
    });
  }, [students, search, course]);

  if (loading) return <p>Loading students...</p>;

  return (
    <div className="faculty-content">
      <h2>Students</h2>

      {/* Filters */}
      <div style={{ display: "flex", gap: "15px", marginBottom: "20px" }}>
        <input
          placeholder="Search name / PRN / roll / email"
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{ flex: 1, padding: "10px" }}
        />

        <select
          value={course}
          onChange={e => setCourse(e.target.value)}
          style={{ padding: "10px" }}
        >
          <option value="ALL">All Courses</option>
          {courses.map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      {/* Table */}
      <div className="table-card">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>PRN</th>
              <th>Roll No</th>
              <th>Course</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>

          <tbody>
            {filteredStudents.length === 0 ? (
              <tr>
                <td colSpan="6">No students found</td>
              </tr>
            ) : (
              filteredStudents.map(s => (
                <tr key={s.studentId}>
                  <td>{s.name}</td>
                  <td>{s.prn}</td>
                  <td>{s.rollNo}</td>
                  <td>{s.course}</td>
                  <td>{s.email}</td>
                  <td>{s.contact}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Students;
