import Navigation from "@/app/components/navbar";
import "../../../../../public/sass/dashboard/profile.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import Sidebar from "@/app/components/sidebar";
import "../../../../../public/sass/pages/profileedit.scss"
import ProfileEditForm from "./form";

const ProfileEdit = () => {
  return (
    <div className="dashboard_section explore_section">
      <Navigation fixed="top" />

      <div className="inner_section">
        <div className="left_section">
          <Sidebar />
        </div>
        <div className="right_section">
          <div className="explore_area">
            <ProfileView />
          </div>
          <div className="suggestion_area">
            <ProfileEdit />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileEdit;
