import React from "react";
import "../../../public/sass/pages/timetable.scss"

const TimeTable = () => {
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
              <th>Monday</th>
              <th>Tuesday</th>
              <th>Wednesday</th>
              <th>Thursday</th>
              <th>Friday</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-medium">
                9:00 AM - 10:00 AM
              </td>
              <td>Mathematics</td>
              <td>English</td>
              <td>Science</td>
              <td>History</td>
              <td>Geography</td>
            </tr>
            <tr>
              <td className="font-medium">
                10:15 AM - 11:15 AM
              </td>
              <td>Science</td>
              <td>Mathematics</td>
              <td>English</td>
              <td>Art</td>
              <td>Physical Education</td>
            </tr>
            <tr>
              <td className="font-medium">
                11:30 AM - 12:30 PM
              </td>
              <td>History</td>
              <td>Geography</td>
              <td>Mathematics</td>
              <td>Science</td>
              <td>English</td>
            </tr>
            <tr>
              <td className="font-medium">
                1:30 PM - 2:30 PM
              </td>
              <td>Art</td>
              <td>Physical Education</td>
              <td>Music</td>
              <td>Computer Science</td>
              <td>Drama</td>
            </tr>
            <tr>
              <td className="font-medium">
                2:45 PM - 3:45 PM
              </td>
              <td>Computer Science</td>
              <td>Drama</td>
              <td>Art</td>
              <td>Music</td>
              <td>Physical Education</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TimeTable;
