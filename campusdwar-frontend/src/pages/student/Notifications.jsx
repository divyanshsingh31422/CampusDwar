import { useEffect, useState } from "react";
import {
  getMyNotifications,
  clearMyNotifications
} from "../../api/notification";

import "../../styles/notifications.css";

const Notifications = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    load();
  }, []);

  const load = () => {
    getMyNotifications().then(res => setList(res.data));
  };

  const clearAll = async () => {
    if (window.confirm("Are you sure you want to clear all notifications?")) {
      await clearMyNotifications();
      setList([]);
    }
  };

  return (
    <div className="notifications-content">
      <div className="notifications-header">
        <h2>Notifications</h2>
        {list.length > 0 && (
          <button className="clear-btn" onClick={clearAll}>
            Clear All
          </button>
        )}
      </div>

      {list.length === 0 ? (
        <div className="empty-state">
          <p>No new notifications</p>
        </div>
      ) : (
        <div className="notifications-list">
          {list.map(n => (
            <div key={n.notificationId} className="notification-card">
              <div className="notification-icon">
                📢
              </div>
              <div className="notification-details">
                <p className="notification-message">{n.message}</p>
                <small className="notification-time">
                  {new Date(n.createdAt).toLocaleString()}
                </small>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Notifications;
