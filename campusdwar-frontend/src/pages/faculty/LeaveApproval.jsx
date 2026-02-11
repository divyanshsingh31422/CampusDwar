import FacultySidebar from "../../components/sidebar/FacultySidebar";
import "../../styles/faculty-leave-approval.css";

const LeaveApproval = () => {
  return (
    <div className="dashboard">
      <FacultySidebar />

      <div className="faculty-content">
        <h2>Student Leave Requests</h2>

        <div className="table-card">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Student Name</th>
                <th>Roll No</th>
                <th>From</th>
                <th>To</th>
                <th>Reason</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td>Rahul Verma</td>
                <td>DAC-034</td>
                <td>12 Oct 2025</td>
                <td>14 Oct 2025</td>
                <td>Medical</td>
                <td>
                  <span className="status pending">PENDING</span>
                </td>
                <td>
                  <button className="btn approve">Approve</button>
                  <button className="btn reject">Reject</button>
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td>Ankit Jain</td>
                <td>DBDA-041</td>
                <td>18 Oct 2025</td>
                <td>19 Oct 2025</td>
                <td>Personal</td>
                <td>
                  <span className="status pending">PENDING</span>
                </td>
                <td>
                  <button className="btn approve">Approve</button>
                  <button className="btn reject">Reject</button>
                </td>
              </tr>

              <tr>
                <td>3</td>
                <td>Pooja Sharma</td>
                <td>DITISS-056</td>
                <td>05 Oct 2025</td>
                <td>06 Oct 2025</td>
                <td>Family Event</td>
                <td>
                  <span className="status approved">APPROVED</span>
                </td>
                <td>
                  <button className="btn approve">Approve</button>
                  <button className="btn reject">Reject</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeaveApproval;
