import Image from "next/image";
import React from "react";
import { ImCross } from "react-icons/im";

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

const AdminNotifications: React.FC = () => {
  return (
    <div className="p-2">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className="flex items-center p-2 mb-4 bg-gray-800 text-white rounded-lg shadow-lg w-[250px] h-[120px] transition-transform transform hover:scale-105"
        >
          <div className="mr-3 h-10 w-10">
            <Image
              src={notification.imageSrc}
              alt={notification.teacherName}
              width={500}
              height={500}
              className="rounded-full object-cover"
              
            />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-bold mb-1">{notification.teacherName}</h3>
            <p className="text-sm font-medium mb-1">{notification.className}</p>
            <p className="text-sm font-medium mb-1">{notification.subjectName}</p>
            <p className="text-sm font-medium">
              {notification.title.length > 20 ? `${notification.title.slice(0, 20)}...` : notification.title}
            </p>
          </div>
          <div className="ml-4 cursor-pointer text-gray-400 hover:text-red-500">
            <ImCross className="text-sm" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminNotifications;
