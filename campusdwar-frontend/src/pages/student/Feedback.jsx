
import "../../styles/feedback.css";

const Feedback = () => {
  return (
    <div className="dashboard">
 
      <div className="feedback-content">
        <h2>Submit Feedback</h2>

        <div className="feedback-card">
          <div className="feedback-row">
            <div className="feedback-field">
              <label>Faculty</label>
              <select>
                <option>Select Faculty</option>
                <option>Dr. Anil Sharma</option>
                <option>Prof. Neha Verma</option>
                <option>Ms. Pooja Jain</option>
              </select>
            </div>

            <div className="feedback-field">
              <label>Subject</label>
              <select>
                <option>Select Subject</option>
                <option>DSA</option>
                <option>WPT</option>
                <option>OS</option>
              </select>
            </div>

            <div className="feedback-field rating-field">
              <label>Rating</label>
              <div className="stars">
                ★ ★ ★ ☆ ☆
              </div>
            </div>
          </div>

          <textarea
            className="feedback-textarea"
            placeholder="Write your feedback here..."
          ></textarea>

          <button className="feedback-btn">Submit Feedback</button>
        </div>

        <h2 className="section-title">My Feedback</h2>

        <div className="table-card">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Faculty</th>
                <th>Subject</th>
                <th>Rating</th>
                <th>Feedback</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td>Dr. Anil Sharma</td>
                <td>DSA</td>
                <td>★★★★★</td>
                <td>Explains concepts very clearly</td>
                <td>10 Oct 2025</td>
              </tr>

              <tr>
                <td>2</td>
                <td>Ms. Pooja Jain</td>
                <td>WPT</td>
                <td>★★★★★</td>
                <td>Good practical examples</td>
                <td>05 Oct 2025</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
