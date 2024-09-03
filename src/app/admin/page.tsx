import AdminNavbar from "@/components/admin/admin_navbar";
import AdminNotifications from "@/components/admin/AdminNotifications";
import AdminSidebar from "@/components/admin/AdminSidebar";
import RegisterForm from "./user-edit/page";

const Dashboard = () => {
  return (
    <div className="h-full w-full">
      <div className="fixed top-0  w-full">
        <AdminNavbar />
      </div>
      <div className="fixed bottom-0 flex h-[90vh] w-full">
        <div className=" fixed left-0 flex h-full w-64">
          <AdminSidebar />
        </div>
        <div className=" fixed right-0 w-[calc(100%_-_260px)]">
          <div className="fixed h-full w-[calc(100%_-_260px)]">
            <RegisterForm />
            <div className="flex justify-center px-1">
              <AdminNotifications />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
