import API from "./axios";

/* USERS */
export const createUser = (data) => API.post("/admin/users", data);
export const getAllUsers = () => API.get("/admin/users");
export const deleteUser = (id) => API.delete(`/admin/users/${id}`);

/* STUDENTS */
export const getAllStudents = () => API.get("/admin/students");
export const createStudent = (data) => API.post("/admin/students", data);
export const deleteStudent = (id) => API.delete(`/admin/students/${id}`);

/* FACULTY */
export const getAllFaculty = () => API.get("/admin/faculty");
export const createFaculty = (data) => API.post("/admin/faculty", data);
export const deleteFaculty = (id) => API.delete(`/admin/faculty/${id}`);

/* SUBJECTS */
export const getAllSubjects = () => API.get("/admin/subjects");
export const createSubject = (data) => API.post("/admin/subjects", data);
export const deleteSubject = (id) => API.delete(`/admin/subjects/${id}`);



// export const sendFacultyNotification = (data) =>
//   API.post("/admin/notifications", data);

// export const getAllNotifications = () =>
//   API.get("/admin/notifications");

/* ================= NOTIFICATIONS ================= */

export const sendBroadcastNotification = (data) =>
  API.post("/admin/notifications", data);
