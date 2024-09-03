import React from "react";
interface TimeTableProps {}

interface TimetableRow {
  time: string;
  subjects: string[];
}

const TimeTable: React.FC<TimeTableProps> = () => {
  const timetableData: TimetableRow[] = [
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

  const daysOfWeek: string[] = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];

  return (
    <div className="timetable-container rounded-lg bg-white p-3 shadow-lg">
      <div className="timetable-header mb-2">
        <h1 className="text-xl font-semibold text-gray-800 text-center">
          Weekly Timetable
        </h1>
      </div>
      <div className="timetable-table overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-200 text-xs">
          <thead>
            <tr>
              <th className="border border-gray-200 bg-gray-100 p-2 text-left">
                Time
              </th>
              {daysOfWeek.map((day) => (
                <th
                  key={day}
                  className="border border-gray-200 bg-gray-100 p-2 text-left"
                >
                  {day}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {timetableData.map((row, index) => (
              <tr key={index} className="odd:bg-white even:bg-gray-50">
                <td className="border border-gray-200 p-2 font- text-gray-800">
                  {row.time}
                </td>
                {row.subjects.map((subject, i) => (
                  <td
                    key={i}
                    className="border border-gray-200 p-2 text-gray-700"
                  >
                    {subject}
                  </td>
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
