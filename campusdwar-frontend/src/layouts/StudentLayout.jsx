import StudentSidebar from "../components/sidebar/StudentSidebar";
import { Outlet } from "react-router-dom";

const StudentLayout = () => {
  return (
    <div className="dashboard">
      <StudentSidebar />
      <div className="dashboard-content">
        <Outlet />
      </div>
    </div>
  );
};

export default StudentLayout;
