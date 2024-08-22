"use client";
import React from "react";
import { Chart } from "react-google-charts";

const data = [
  [
    "Day",
    "Guardians of the Galaxy",
    "The Avengers",
    "Transformers: Age of Extinction",
  ],
  [1, 37.8, 80.8, 41.8],
  [2, 30.9, 69.5, 32.4],
  [3, 25.4, 57, 25.7],
  [4, 11.7, 18.8, 10.5],
  [5, 11.9, 17.6, 10.4],
  [6, 8.8, 13.6, 7.7],
  [7, 7.6, 12.3, 9.6],
  [8, 12.3, 29.2, 10.6],
];

const options = {
  chart: {
    title: "Box Office Earnings in First Two Weeks of Opening",
    subtitle: "in millions of dollars (USD)",
  },
};

const ProgressChart = () => {
  return (
    <Chart
      chartType="Line"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
};

export default ProgressChart;