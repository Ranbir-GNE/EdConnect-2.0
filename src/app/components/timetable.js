import React from "react";
import "../../../public/sass/pages/timetable.scss"

const TimeTable = () => {
  const timetableData = [
    {
      time: "9:00 AM - 10:00 AM",
      subjects: ["Mathematics", "English", "Science", "History", "Geography"],
    },
    {
      time: "10:15 AM - 11:15 AM",
      subjects: [
        "Science",
        "Mathematics",
        "English",
        "Art",
        "Physical Education",
      ],
    },
    {
      time: "11:30 AM - 12:30 PM",
      subjects: ["History", "Geography", "Mathematics", "Science", "English"],
    },
    {
      time: "1:30 PM - 2:30 PM",
      subjects: [
        "Art",
        "Physical Education",
        "Music",
        "Computer Science",
        "Drama",
      ],
    },
    {
      time: "2:45 PM - 3:45 PM",
      subjects: [
        "Computer Science",
        "Drama",
        "Art",
        "Music",
        "Physical Education",
      ],
    },
  ];

  const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

  return (
    <div className="timetable-container">
      <div className="timetable-header">
        <h1>Weekly Timetable</h1>
      </div>
      <div className="timetable-table">
        <table>
          <thead>
            <tr>
              <th>Time</th>
              {daysOfWeek.map((day) => (
                <th key={day}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {timetableData.map((row, index) => (
              <tr key={index}>
                <td className="font-medium">{row.time}</td>
                {row.subjects.map((subject, i) => (
                  <td key={i}>{subject}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TimeTable;
