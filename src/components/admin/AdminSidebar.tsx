"use client";
import Link from "next/link";
import React from "react";
import { MdDashboard } from "react-icons/md";
import { FaCalendarAlt } from "react-icons/fa";
import { MdOutlineVideoChat } from "react-icons/md";
import { FaComments } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaGears } from "react-icons/fa6";
import { TbLogout } from "react-icons/tb";

const menuItems = [
  { id: 1, href: "#", label: "Dashboard", icon: <MdDashboard /> },
  { id: 2, href: "#", label: "Event Calendar", icon: <FaCalendarAlt /> },
  { id: 3, href: "#", label: "Online Session", icon: <MdOutlineVideoChat /> },
  { id: 4, href: "#", label: "Chat App", icon: <FaComments /> },
  { id: 5, href: "#", label: "My Account", icon: <CgProfile /> },
  { id: 6, href: "#", label: "Settings", icon: <FaGears /> },
  { id: 7, href: "#", label: "Logout", icon: <TbLogout /> },
];

const AdminSidebar = () => {
  return (
    <div className="fixed bottom-0 top-[95px] bg-gray-800 text-white w-64">
      {/* Main AdminSidebar */}
      <div className="hidden w-64 space-y-8 py-6 md:block">
        <ul className="space-y-8">
          {menuItems.map((item) => (
            <li key={item.id} className="group">
              <Link
                href={item.href}
                className="flex items-center px-4 py-2 text-xl font-semibold transition-all group-hover:translate-x-2 group-hover:bg-gray-700"
              >
                {item.icon}
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Responsive AdminSidebar */}
      <div className="block w-16 py-6 md:hidden">
        <ul className="space-y-6 text-center">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link
                href={item.href}
                className="flex items-center justify-center py-2 group-hover:bg-gray-700"
              >
                {item.icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;
