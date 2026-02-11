
import "../../styles/class-schedule.css";

const ClassSchedule = () => {
  return (
    <div className="dashboard">
      

      <div className="schedule-content">
        <h2>Class Schedule</h2>

        <div className="table-card">
          <table>
            <thead>
              <tr>
                <th>Day</th>
                <th>Time</th>
                <th>Subject</th>
                <th>Faculty</th>
                <th>Room</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Monday</td>
                <td>09:00 – 10:00</td>
                <td>Data Structures</td>
                <td>Dr. Anil Sharma</td>
                <td>C-201</td>
              </tr>

              <tr>
                <td>Monday</td>
                <td>10:00 – 11:00</td>
                <td>Database Systems</td>
                <td>Prof. Neha Verma</td>
                <td>C-204</td>
              </tr>

              <tr>
                <td>Tuesday</td>
                <td>09:00 – 10:00</td>
                <td>Operating Systems</td>
                <td>Dr. Rakesh Mehta</td>
                <td>C-301</td>
              </tr>

              <tr>
                <td>Wednesday</td>
                <td>11:00 – 12:00</td>
                <td>Web Programming</td>
                <td>Ms. Pooja Jain</td>
                <td>Lab-2</td>
              </tr>

              <tr>
                <td>Thursday</td>
                <td>10:00 – 11:00</td>
                <td>Computer Networks</td>
                <td>Dr. Anil Sharma</td>
                <td>C-105</td>
              </tr>

              <tr>
                <td>Friday</td>
                <td>09:00 – 10:00</td>
                <td>Software Engineering</td>
                <td>Prof. Neha Verma</td>
                <td>C-210</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ClassSchedule;
