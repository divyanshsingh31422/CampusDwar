import { useEffect, useMemo, useState } from "react";

import { getMyAttendance } from "../../api/student";
import "../../styles/attendance.css";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Cell,
  LabelList,
} from "recharts";


const Attendance = () => {
  const [attendance, setAttendance] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSubject, setSelectedSubject] = useState("ALL");

  useEffect(() => {
    getMyAttendance()
      .then((res) => {
        console.log("ATTENDANCE RESPONSE =", res.data);
        setAttendance(res.data || []);
      })
      .catch((err) => {
        console.error("ATTENDANCE ERROR =", err);
        setAttendance([]);
      })
      .finally(() => setLoading(false));
  }, []);

  /* 
     SUBJECT LIST (DROPDOWN)
*/
  const subjects = useMemo(() => {
    const map = new Map();
    attendance.forEach((a) => {
      if (a.subject) {
        map.set(a.subject.subjectId, a.subject.subjectName);
      }
    });
    return Array.from(map, ([id, name]) => ({ id, name }));
  }, [attendance]);

  /* 
     FILTER BY SUBJECT
   */
  const filteredAttendance = useMemo(() => {
    if (selectedSubject === "ALL") return attendance;
    return attendance.filter(
      (a) => a.subject?.subjectId === Number(selectedSubject)
    );
  }, [attendance, selectedSubject]);

  /* 
     BAR GRAPH DATA
   */
  const chartData = useMemo(() => {
    const map = {};

    attendance.forEach((a) => {
      const subjectName = a.subject?.subjectName;
      if (!subjectName) return;

      if (!map[subjectName]) {
        map[subjectName] = {
          subject: subjectName,
          total: 0,
          present: 0,
        };
      }

      map[subjectName].total += 1;

      if (
        a.status &&
        a.status.toString().trim().toUpperCase() === "PRESENT"
      ) {
        map[subjectName].present += 1;
      }
    });

    return Object.values(map).map((item) => ({
      subject: item.subject,
      percentage: Math.round((item.present / item.total) * 100),
    }));
  }, [attendance]);

  if (loading) {
    return <p style={{ padding: "20px" }}>Loading attendance...</p>;
  }

  return (
    <div className="dashboard">
 

      <div className="attendance-content">
        <h2>Attendance</h2>

        {/*
            SUBJECT DROPDOWN
           */}
        <div style={{ marginBottom: "15px" }}>
          <label>
            <strong>Select Subject:</strong>
          </label>
          <select
            value={selectedSubject}
            onChange={(e) => setSelectedSubject(e.target.value)}
          >
            <option value="ALL">All Subjects</option>
            {subjects.map((s) => (
              <option key={s.id} value={s.id}>
                {s.name}
              </option>
            ))}
          </select>
        </div>

        {/* 
            BAR GRAPH
          */}
<div className="chart-card">
  <h3>Subject-wise Attendance (%)</h3>

  {chartData.length === 0 ? (
    <p>No attendance data</p>
  ) : (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart
        data={chartData}
        margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
        barCategoryGap="30%"
      >
        <CartesianGrid strokeDasharray="3 3" vertical={false} />

        <XAxis
          dataKey="subject"
          interval={0}
          tick={{ fontSize: 12 }}
        />

        <YAxis
          domain={[0, 100]}
          tickFormatter={(v) => `${v}%`}
        />

        <Tooltip
          formatter={(value) => [`${value}%`, "Attendance"]}
        />

        <Bar
          dataKey="percentage"
          radius={[10, 10, 0, 0]}
        >
          <LabelList
            dataKey="percentage"
            position="top"
            formatter={(v) => `${v}%`}
          />

          {chartData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={
                entry.percentage >= 75
                  ? "#4CAF50"   // Green
                  : entry.percentage >= 60
                  ? "#FFC107"   // Amber
                  : "#F44336"   // Red
              }
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )}
</div>



        {/* 
            ATTENDANCE TABLE
           */}
        <div className="table-card">
          <table>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {filteredAttendance.length === 0 ? (
                <tr>
                  <td colSpan="3">No attendance available</td>
                </tr>
              ) : (
                filteredAttendance.map((a) => {
                  const isPresent =
                    a.status &&
                    a.status.toString().trim().toUpperCase() === "PRESENT";

                  return (
                    <tr key={a.attendanceId}>
                      <td>{a.subject?.subjectName}</td>
                      <td>{a.date}</td>
                      <td>
                        <span
                          className={`status ${
                            isPresent ? "present" : "absent"
                          }`}
                        >
                          {isPresent ? "Present" : "Absent"}
                        </span>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
