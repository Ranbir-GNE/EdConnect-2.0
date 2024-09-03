"use client";
import Attendance from "@/components/Attendance";
import { CalendarDemo } from "@/components/Calender";
import { GradesChart } from "@/components/Grades";
import { Navigation } from "@/components/Navigation";
import { ExpandableCardDemo } from "@/components/NoticeBoard";
import { SidePanel } from "@/components/SidePanel";
import TimeTable from "@/components/TimeTable";
import TaskManager from "@/components/ToDo";

export default function Home() {
  return (
    <>
      <div className="fixed top-0 z-10 w-full">
        <Navigation />
      </div>
      <div className="flex">
        <div className="fixed left-0 z-10 h-full">
          <SidePanel />
        </div>
        <div className="top-[100px] flex h-screen w-full flex-col items-center justify-center overflow-auto p-4">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex justify-center">
              <CalendarDemo />
            </div>
            <div className="flex justify-center">
              <TimeTable />
            </div>
            <div className="flex justify-center">
              <GradesChart />
            </div>

            <div className="flex justify-center ">
              <Attendance
                {...{
                  present: 10,
                  absent: 2,
                }}
              />
            </div>
            <div className="flex justify-center ">
              <TaskManager />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
