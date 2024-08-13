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
import "../../../public/sass/pages/sidebar.scss";

const Sidebar = () => {

  return (
    <div className="outer_container_sidebar">
      <div className="sidebar_main_menu">
        <ul>
          <li>
            <Link href="#">
              {" "}
              <MdDashboard />
              Dashboard
            </Link>
          </li>
          <li>
            <Link href="#">
              <FaCalendarAlt />
              Event Calender
            </Link>
          </li>
          <li>
            <Link href="#">
              <MdOutlineVideoChat />
              Online Session
            </Link>
          </li>
          <li>
            <Link href="#">
              <FaComments />
              Chat App
            </Link>
          </li>
          <li>
            <Link href="#">
              <CgProfile />
              My Account
            </Link>
          </li>
          <li>
            <Link href="#">
              <FaGears />
              Settings
            </Link>
          </li>
          <li>
            <Link href="#">
              <TbLogout />
              Logout
            </Link>
          </li>
        </ul>
      </div>
      <div className="sidebar_responsive_menu">
        <ul>
          <li>
            <Link href="#">
              {" "}
              <MdDashboard />
            </Link>
          </li>
          <li>
            <Link href="#">
              <FaCalendarAlt />
            </Link>
          </li>
          <li>
            <Link href="#">
              <MdOutlineVideoChat />
            </Link>
          </li>
          <li>
            <Link href="#">
              <FaComments />
            </Link>
          </li>
          <li>
            <Link href="#">
              <CgProfile />
            </Link>
          </li>
          <li>
            <Link href="#">
              <FaGears />
            </Link>
          </li>
          <li>
            <Link href="#">
              <TbLogout />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
