
import "../../styles/documents.css";

const Documents = () => {
  return (
    <div className="dashboard">

      <div className="documents-content">
        <h2>Upload Document</h2>

        <div className="upload-card">
          <div className="upload-row">
            <div className="upload-field">
              <label>Document Type</label>
              <select>
                <option>Select Document</option>
                <option>Aadhaar Card</option>
                <option>10th Marksheet</option>
                <option>12th Marksheet</option>
                <option>Transfer Certificate</option>
              </select>
            </div>

            <div className="upload-field">
              <label>Select File</label>
              <input type="file" />
            </div>
          </div>

          <button className="upload-btn">Upload Document</button>
        </div>

        <h2 className="section-title">My Documents</h2>

        <div className="table-card">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Document Name</th>
                <th>Uploaded On</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td>Aadhaar Card</td>
                <td>01 Aug 2025</td>
                <td>
                  <span className="status verified">Verified</span>
                </td>
                <td>
                  <button className="btn-view">View</button>
                </td>
              </tr>

              <tr>
                <td>2</td>
                <td>10th Marksheet</td>
                <td>03 Aug 2025</td>
                <td>
                  <span className="status uploaded">Uploaded</span>
                </td>
                <td>
                  <button className="btn-view">View</button>
                </td>
              </tr>

              <tr>
                <td>3</td>
                <td>12th Marksheet</td>
                <td>-</td>
                <td>
                  <span className="status pending">Pending</span>
                </td>
                <td>
                  <button className="btn-upload">Upload</button>
                </td>
              </tr>

              <tr>
                <td>4</td>
                <td>Transfer Certificate</td>
                <td>05 Aug 2025</td>
                <td>
                  <span className="status uploaded">Uploaded</span>
                </td>
                <td>
                  <button className="btn-view">View</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Documents;
