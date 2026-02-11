
import "../../styles/leave.css";

const Leave = () => {
  return (
    <div className="dashboard">
     
      <div className="leave-content">
        <h2>Apply for Leave</h2>

        <div className="leave-card">
          <div className="leave-row">
            <div className="leave-field">
              <label>From Date</label>
              <input type="date" />
            </div>

            <div className="leave-field">
              <label>To Date</label>
              <input type="date" />
            </div>

            <div className="leave-field">
              <label>Leave Type</label>
              <select>
                <option>Select Leave Type</option>
                <option>Sick Leave</option>
                <option>Annual Leave</option>
                <option>WFH Leave</option>
              </select>
            </div>
          </div>

          <div className="leave-textarea">
            <textarea placeholder="Reason for leave"></textarea>
          </div>

          <button className="leave-btn">Submit Leave Request</button>
        </div>

        <h2 className="section-title">Leave Requests</h2>

        <div className="table-card">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Person</th>
                <th>Date</th>
                <th>Duration</th>
                <th>Type</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>13</td>
                <td>Dianne Russell</td>
                <td>22 – 28 Aug 2024</td>
                <td>7 days</td>
                <td>WFH Leave</td>
                <td>
                  <span className="status approved">Approved</span>
                </td>
                <td>-</td>
              </tr>

              <tr>
                <td>14</td>
                <td>Jane Cooper</td>
                <td>12 – 16 Aug 2024</td>
                <td>5 days</td>
                <td>Sick Leave</td>
                <td>
                  <span className="status pending">Pending</span>
                </td>
                <td>
                  <button className="btn-approve">Approve</button>
                  <button className="btn-reject">Reject</button>
                </td>
              </tr>

              <tr>
                <td>15</td>
                <td>Kristin Watson</td>
                <td>1 – 3 Aug 2024</td>
                <td>3 days</td>
                <td>Annual Leave</td>
                <td>
                  <span className="status rejected">Rejected</span>
                </td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leave;
