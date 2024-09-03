import { CalendarDemo } from "@/components/Calender";
import { Navigation } from "@/components/Navigation";
import { SidePanel } from "@/components/SidePanel";

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
        <div className="flex h-screen w-full flex-col items-center justify-center p-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex justify-center">
              <CalendarDemo />
            </div>
            <div className="flex justify-center">
              <CalendarDemo />
            </div>
            <div className="flex justify-center">
              <CalendarDemo />
            </div>
            <div className="flex justify-center">
              <CalendarDemo />
            </div>
            <div className="flex justify-center">
              <CalendarDemo />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
