import Image from "next/image";
import React from "react";
import { ImCross } from "react-icons/im";
import "../../../public/sass/pages/notificationarea.scss"

const notifications = [
  {
    id: 1,
    teacherName: "Teacher Name 1",
    className: "Class Name 1",
    subjectName: "Subject Name 1",
    title: "Turbo Chargers",
    imageSrc: "/images/person.jpg",
  },
  {
    id: 2,
    teacherName: "Teacher Name 2",
    className: "Class Name 2",
    subjectName: "Subject Name 2",
    title: "title 2",
    imageSrc: "/images/person.jpg",
  },
  {
    id: 3,
    teacherName: "Teacher Name 3",
    className: "Class Name 3",
    subjectName: "Subject Name 3",
    title: "title 3",
    imageSrc: "/images/person.jpg",
  },
];

const NotificationArea = () => {
  return (
    <div className="notification_are_outer_container">
      {notifications.map((notification) => (
        <div className="notification_card" key={notification.id}>
          <div className="notification_card_left">
            <Image
              src={notification.imageSrc}
              alt={notification.teacherName}
              width={100}
              height={100}
            />
          </div>
          <div className="notification_area_right">
            <h3>{notification.teacherName}</h3>
            <p>{notification.className}</p>
            <p>{notification.subjectName}</p>
            <p>{notification.title.slice(0,20)}</p>
          </div>
          <div className="notification_cross">
            <ImCross />
          </div>
        </div>
      ))}
    </div>
  );
};

export default NotificationArea;
