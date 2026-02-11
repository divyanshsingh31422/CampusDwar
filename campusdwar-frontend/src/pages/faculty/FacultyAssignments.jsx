import FacultySidebar from "../../components/sidebar/FacultySidebar";

const FacultyAssignments = () => {
  return (
    <div className="dashboard">
      <FacultySidebar />

      <div className="main-content">
        <h2>Assignments</h2>

        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Assignment Title</th>
              <th>Due Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>DBMS</td>
              <td>Normalization</td>
              <td>15 Feb 2026</td>
            </tr>
            <tr>
              <td>Operating Systems</td>
              <td>CPU Scheduling</td>
              <td>18 Feb 2026</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FacultyAssignments;
