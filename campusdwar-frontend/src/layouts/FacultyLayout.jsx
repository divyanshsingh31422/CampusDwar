import { Outlet } from "react-router-dom";
import FacultySidebar from "../components/sidebar/FacultySidebar";

const FacultyLayout = () => {
  return (
    <div className="dashboard">
      <FacultySidebar />
      <div className="dashboard-content">
        <Outlet />
      </div>
    </div>
  );
};

export default FacultyLayout;
 