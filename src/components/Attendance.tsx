import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";

// Register the components for Chart.js
ChartJS.register(ArcElement, Tooltip, Legend, Title);

interface AttendanceDataProps {
  present: number;
  absent: number;
}

const Attendance: React.FC<AttendanceDataProps> = ({ present, absent }) => {
  const data = {
    labels: ["Present", "Absent"],
    datasets: [
      {
        label: "Attendance",
        data: [present, absent],
        backgroundColor: ["#4CAF50", "#FF6384"], // Green for present, Red for absent
        borderColor: ["#4CAF50", "#FF6384"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "bottom" as const,
      },
      title: {
        display: true,
        text: "Attendance Overview",
        font: {
          size: 18,
        },
        color: "#333",
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="h-[40vh] w-[40vh] rounded-lg bg-white p-4 shadow-lg">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default Attendance;
