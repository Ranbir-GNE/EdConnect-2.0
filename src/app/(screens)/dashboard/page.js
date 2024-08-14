import Navigation from "@/app/components/navbar";
import "../../../../public/sass/dashboard/profile.scss";
import Image from "next/image";
import Sidebar from "@/app/components/sidebar";
import StudentDashboard from "./explore/page";
import NotificationArea from "@/app/components/notification_area";

const Dashboard = () => {
  return (
    <div className="dashboard_section explore_section">
      <Navigation fixed="top" />

      <div className="inner_section">
        <div className="left_section">
          <Sidebar />
        </div>
        <div className="right_section">
          <div className="explore_area">
            <StudentDashboard />
          </div>
          <div className="suggestion_area">
            <NotificationArea />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
