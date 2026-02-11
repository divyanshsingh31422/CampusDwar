import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080",
});

/* Attach JWT */
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export const getMyFacultyProfile = () => {
  return API.get("/faculty/profile");
};


export const getAllStudents = () =>
  API.get("/faculty/students");

export const getCourses = () =>
  API.get("/faculty/attendance/courses");

export const getSubjects = () =>
  API.get("/faculty/attendance/subjects");

export const getAttendanceStudents = (course, subjectId, date) =>
  API.get("/faculty/attendance/students", {
    params: { course, subjectId, date }
  });

export const saveAttendance = (data) =>
  API.post("/faculty/attendance", data);

export const getMarksStudents = (course, subjectId) =>
  API.get("/faculty/marks/students", {
    params: { course, subjectId }
  });

export const saveMarks = (data) =>
  API.post("/faculty/marks", data);

export const getFacultyDashboard = () =>
  API.get("/faculty/dashboard");
