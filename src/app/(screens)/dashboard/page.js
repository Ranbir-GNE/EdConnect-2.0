"use client"
import { About } from "@/app/components/about_us";
import Navigation from "@/app/components/navbar";
import ReputationCards from "@/app/components/reputation_cards";
import ServiceCards from "@/app/components/service_cards";
import Welcome from "@/app/components/welcome";

const Dashboard = () => {
  return (
    <>
      <Navigation />
      <Welcome/>
      <ReputationCards/>
      <About />
      <ServiceCards/>
    </>
  );
};
export default Dashboard;
