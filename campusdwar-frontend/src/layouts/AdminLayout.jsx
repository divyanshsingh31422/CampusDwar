import { Outlet } from "react-router-dom";
import AdminSidebar from "../components/sidebar/AdminSidebar";

const AdminLayout = () => {
  return (
    <div className="dashboard">
      <AdminSidebar />
      <div className="dashboard-content">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
