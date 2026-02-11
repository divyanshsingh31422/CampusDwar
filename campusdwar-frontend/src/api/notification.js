import api from "./axios";

// STUDENT / FACULTY
export const getMyNotifications = () =>
  api.get("/notifications/me");

export const clearMyNotifications = () =>
  api.delete("/notifications/me");

// ADMIN ONLY
export const sendBroadcastNotification = (message) =>
  api.post("/admin/notifications/broadcast", { message });
