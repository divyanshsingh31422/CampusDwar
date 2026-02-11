import { Routes, Route } from "react-router-dom";

/* Auth */
import Login from "../pages/auth/Login";
import ForgotPassword from "../pages/auth/ForgotPassword";

/* Layout */
import AdminLayout from "../layouts/AdminLayout";
import StudentLayout from "../layouts/StudentLayout";
import FacultyLayout from "../layouts/FacultyLayout";

/* Student Pages */
import Attendance from "../pages/student/Attendance";
import Assignments from "../pages/student/Assignments";
import Marks from "../pages/student/Marks";
import Leave from "../pages/student/Leave";
import Notifications from "../pages/student/Notifications";
import AccountInfo from "../pages/student/AccountInfo";
import FacultyInfo from "../pages/student/FacultyInfo";
import ClassSchedule from "../pages/student/ClassSchedule";
import Documents from "../pages/student/Documents";
import Feedback from "../pages/student/Feedback";

/* Admin Pages */
import AddStudent from "../pages/admin/AddStudent";
import AddFaculty from "../pages/admin/AddFaculty";
import AddSubject from "../pages/admin/AddSubject";
import FacultyNotification from "../pages/admin/FacultyNotification";
import Users from "../pages/admin/Users";

import FacultyProfile from "../pages/faculty/FacultyProfile";
import FacultyDashboard from "../pages/faculty/FacultyDashboard";
import Students from "../pages/faculty/Students";
import FacultyAttendance from "../pages/faculty/FacultyAttendance";
import FacultyMarks from "../pages/faculty/facultyMarks";
import FacultyNotifications from "../pages/faculty/Notifications";
// import Users from "../pages/admin/Users";
// import FacultyAssignments from "../pages/faculty/FacultyAssignments";
// import LeaveApproval from "../pages/faculty/LeaveApproval";

const AppRoutes = () => {
  return (
    <Routes>
      {/* ================= AUTH ================= */}
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* ================= STUDENT ================= */}
      <Route path="/student" element={<StudentLayout />}>
        {/* default page → Account Info */}
        <Route index element={<AccountInfo />} />

        <Route path="account" element={<AccountInfo />} />
        <Route path="attendance" element={<Attendance />} />
        <Route path="assignments" element={<Assignments />} />
        <Route path="marks" element={<Marks />} />
        <Route path="leave" element={<Leave />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="faculty" element={<FacultyInfo />} />
        <Route path="schedule" element={<ClassSchedule />} />
        <Route path="documents" element={<Documents />} />
        <Route path="feedback" element={<Feedback />} />
      </Route>

      {/* ================= FACULTY ================= */}
      <Route path="/faculty" element={<FacultyLayout />}>
        <Route index element={<FacultyProfile />} />
        <Route path="profile" element={<FacultyProfile />} />
        <Route path="students" element={<Students />} />
        <Route path="attendance" element={<FacultyAttendance />} />
        <Route path="marks" element={<FacultyMarks />} />
        <Route path="dashboard" element={<FacultyDashboard />} />
        <Route path="notifications" element={<FacultyNotifications />} />
        {/* <Route path="assignments" element={<FacultyAssignments />} />
        <Route path="leave-approval" element={<LeaveApproval />} /> */}
      </Route>

           <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<AddStudent />} />
        <Route path="students" element={<AddStudent />} />
        <Route path="faculty" element={<AddFaculty />} />
        <Route path="subjects" element={<AddSubject />} />
        <Route path="notifications" element={<FacultyNotification />} />
       <Route path="users" element={<Users />} />
      </Route>

    </Routes>
  );
};

export default AppRoutes;
