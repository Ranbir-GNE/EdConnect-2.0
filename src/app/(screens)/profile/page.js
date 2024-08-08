import Navigation from "@/app/components/navbar";
import Sidebar from "@/app/components/sidebar";
import "../../../../public/sass/dashboard/profile.scss";
import ProfileView from "@/app/components/profileview";
import Image from "next/image";

const Profile = () => {
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
            <ProfileView />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
