
import "../../styles/assignments.css";

const Assignments = () => {
  return (
    <div className="dashboard">
  

      <div className="assignments-content">
        <h2>Assignments</h2>

        <div className="table-card">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Subject</th>
                <th>Title</th>
                <th>Due Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td>Data Structures</td>
                <td>Linked List</td>
                <td>15 Oct 2025</td>
                <td>
                  <span className="status submitted">Submitted</span>
                </td>
                <td>
                  <button className="btn-view">View</button>
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td>Database Systems</td>
                <td>Normalization</td>
                <td>18 Oct 2025</td>
                <td>
                  <span className="status pending">Pending</span>
                </td>
                <td>
                  <button className="btn-upload">Upload</button>
                </td>
              </tr>

              <tr>
                <td>3</td>
                <td>Web Programming</td>
                <td>React Basics</td>
                <td>20 Oct 2025</td>
                <td>
                  <span className="status late">Late</span>
                </td>
                <td>
                  <button className="btn-upload">Upload</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Assignments;
