import { useState } from "react";
import { sendBroadcastNotification } from "../../api/notification";
import "../../styles/admin-notification.css";

const FacultyNotification = () => {
  const [message, setMessage] = useState("");

  const send = async () => {
    if (!message.trim()) {
      alert("Message cannot be empty");
      return;
    }

    await sendBroadcastNotification(message);
    alert("Notification sent to Faculty & Students");
    setMessage("");
  };

  return (
    <div className="notification-container">
      <h2>Send Notification</h2>

      <textarea
        className="notification-textarea"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Enter notification message"
      />

      <button className="send-btn" onClick={send}>
        Send
      </button>
    </div>
  );
};

export default FacultyNotification;
