import { useEffect, useState } from "react";
import { getMyMarks } from "../../api/student";
import "../../styles/marks.css";

const Marks = () => {
  const [marks, setMarks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getMyMarks()
      .then(res => {
        console.log("MARKS API RESPONSE =", res.data);
        setMarks(res.data || []);
      })
      .catch(err => {
        console.error("MARKS API ERROR =", err);
        setMarks([]);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p style={{ padding: "20px" }}>Loading marks...</p>;
  }

  return (
    <div className="dashboard">


      <div className="marks-content">
        <h2>Marks</h2>

        <div className="table-card">
          <table>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Internal</th>
                <th>External</th>
                <th>Total</th>
                <th>Grade</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {marks.length === 0 ? (
                <tr>
                  <td colSpan="6">No marks available</td>
                </tr>
              ) : (
                marks.map(m => (
                  <tr key={m.marksId}>
                    <td>{m.subject?.subjectName || "-"}</td>
                    <td>{m.internalMarks ?? "-"}</td>
                    <td>{m.externalMarks ?? "-"}</td>
                    <td>{m.total ?? "-"}</td>
                    <td>
                      {m.total >= 85 ? "A" :
                       m.total >= 70 ? "B" :
                       m.total >= 50 ? "C" : "F"}
                    </td>
                    <td>
                      <span className={`status ${m.total >= 40 ? "pass" : "fail"}`}>
                        {m.total >= 40 ? "Pass" : "Fail"}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
};

export default Marks;
