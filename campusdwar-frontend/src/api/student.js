import api from "./axios";

// Account info
export const getMyAccountInfo = () => {
  return api.get("/student/me");
};

// Update account info (future use)
export const updateMyAccountInfo = (data) => {
  return api.put("/student/me", data);
};

export const getMyMarks = () => api.get("/student/marks");

export const getMyAttendance = () => {
  return api.get("/student/attendance");
};

export const getMyNotifications = () =>
  api.get("/notifications/me");

// Email Change OTP functions


export const verifyEmailOtp = (data) => {
  return api.post("/student/email/verify-otp", data);
};

export const sendEmailOtp = (newEmail) =>
  api.post("/student/email/send-otp", { newEmail });


export const getAllFaculties = () =>
  api.get("/student/faculties");
