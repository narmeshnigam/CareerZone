import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Rectangle } from 'recharts';
import db from "../../../../../firebase";


const Barchart = () => {

  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchFollowUp = async () => {
      const today = new Date();
      const priorDate = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000); 
      const priorDateNew = priorDate.toLocaleDateString();

      try {
        const snapshot = await db.collection('followUp')
          .where('createdDate', '>=', priorDateNew)
          .get();

        const followUpData = [];
        snapshot.forEach(doc => {
          followUpData.push({ id: doc.id, ...doc.data() });
        });


        const followUpByDate = {};
        followUpData.forEach(lead => {
          const dateKey = lead.createdDate.substring(0, 4); 
          if (!followUpByDate[dateKey]) {
            followUpByDate[dateKey] = 0;
          }
          followUpByDate[dateKey]++;
        });

        const chartData = Object.keys(followUpByDate).map(date => ({
          date,
          count: followUpByDate[date]
        }));

        setChartData(chartData);
      } catch (error) {
        console.error('Error fetching leads: ', error);
      }
    };

    fetchFollowUp();

  }, []);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
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
        <CartesianGrid strokeDasharray="" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#8884d8" shape={<Rectangle fill="gold" stroke="purple" />} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default Barchart;
