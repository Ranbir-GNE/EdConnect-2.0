"use client";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FaChevronCircleRight } from "react-icons/fa";
import { FaChevronCircleLeft } from "react-icons/fa";
import "../../../public/sass/pages/calender.scss";

const Calender = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const today = new Date();

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <div className="calendar-title">
          {currentDate.toLocaleString("default", { month: "long" })}{" "}
          {currentDate.getFullYear()}
        </div>
        <div className="calendar-navigation">
          <Button variant="ghost" onClick={handlePrevMonth}>
            <FaChevronCircleLeft />
          </Button>
          <Button variant="ghost" onClick={handleNextMonth}>
            <FaChevronCircleRight />
          </Button>
        </div>
      </div>
      <div className="calendar-days">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
          <div key={index} className="day">
            {day}
          </div>
        ))}
        {Array.from({ length: firstDayOfMonth }).map((_, index) => (
          <div key={index} className="empty" />
        ))}
        {Array.from({ length: daysInMonth }).map((_, index) => {
          const date = new Date(
            currentDate.getFullYear(),
            currentDate.getMonth(),
            index + 1
          );
          const isToday =
            date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear();
          return (
            <div key={index} className={`date ${isToday ? "today" : ""}`}>
              {index + 1}
            </div>
          );
        })}
      </div>
    </div>
  );
};



export default Calender ;
