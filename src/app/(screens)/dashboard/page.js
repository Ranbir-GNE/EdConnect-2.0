import Navigation from "@/app/components/navbar";
import "../../../../public/sass/dashboard/profile.scss";
import Image from "next/image";
import Sidebar from "@/app/components/sidebar";
import StudentDashboard from "./explore/page";


const Dashboard = () => {
  return (
    <div className="dashboard_section explore_section">
      <div className="background_image">
        <Image
          src="/images/background.png"
          alt="background_image"
          width={2160}
          height={1411}
          priority
        />
      </div>
      <Navigation fixed="top" />

      <div className="inner_section">
        <div className="left_section">
          <Sidebar />
        </div>
        <div className="right_section">
          <div className="explore_area">
            <div className="left_explore_area">
              <StudentDashboard/>
            </div>
            <div className="right_explore_area">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
