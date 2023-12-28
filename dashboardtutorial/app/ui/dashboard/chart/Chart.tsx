"use client";

import {
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styles from "./Chart.module.css";

const data = [
  {
    name: "Monday",
    visit: 120,
    click: 100,
  },
  {
    name: "Tuesday",
    visit: 350,
    click: 240,
  },
  {
    name: "Wednesday",
    visit: 455,
    click: 343,
  },
  {
    name: "Thursday",
    visit: 503,
    click: 404,
  },
  {
    name: "Friday",
    visit: 404,
    click: 375,
  },
  {
    name: "Saturday",
    visit: 467,
    click: 392,
  },
  {
    name: "Sunday",
    visit: 576,
    click: 420,
  },
];

export default function Chart() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Weekly Recap</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip
            contentStyle={{
              backgroundColor: "#151c2c",
              border: "none",
              borderRadius: "10ox",
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey={"visit"}
            stroke="#8884d8"
            strokeDasharray="5 5"
          />
          <Line
            type="monotone"
            dataKey={"click"}
            stroke="#82ca9d"
            strokeDasharray="3 4 5 2"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
