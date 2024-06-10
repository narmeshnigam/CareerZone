import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import db from "../../../../../firebase";

function Linechart() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchLeads = async () => {
      const today = new Date();
      const priorDate = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);
      const priorDateNew = priorDate.toLocaleDateString();

      try {
        const snapshot = await db
          .collection("leads")
          .where("createdDate", ">=", priorDateNew)
          .get();

        const leadsData = [];
        snapshot.forEach((doc) => {
          leadsData.push({ id: doc.id, ...doc.data() });
        });

        const leadsByDate = {};
        leadsData.forEach((lead) => {
          const dateKey = lead.createdDate.substring(0, 4);
          if (!leadsByDate[dateKey]) {
            leadsByDate[dateKey] = 0;
          }
          leadsByDate[dateKey]++;
        });

        const chartData = Object.keys(leadsByDate).map((date) => ({
          date,
          count: leadsByDate[date],
        }));

        setChartData(chartData);
      } catch (error) {
        console.error("Error fetching leads: ", error);
      }
    };

    fetchLeads();
  }, []);

  return (
    <LineChart
      width={500}
      height={300}
      data={chartData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line
        type="monotone"
        dataKey="count"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
    </LineChart>
  );
}

export default Linechart;
