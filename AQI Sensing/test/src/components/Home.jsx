import React from 'react';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Home() {

  const data = [
    {
      name: "City 1",
      PM25: 20, // PM2.5 in range of 0-25
      SO2: 0.05, // SO2 concentration in range of 0-0.1
    },
    {
      name: "City 2",
      PM25: 17,
      SO2: 0.07,
    },
    {
      name: "City 3",
      PM25: 15,
      SO2: 0.03,
    },
    {
      name: "City 4",
      PM25: 18,
      SO2: 0.09,
    },
    {
      name: "City 5",
      PM25: 19,
      SO2: 0.02,
    },
    {
      name: "City 6",
      PM25: 9,
      SO2: 0.04,
    },
    {
      name: "City 7",
      PM25: 7,
      SO2: 0.08,
    },
  ];

  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>DASHBOARD</h3>
      </div>

      <div className='main-cards'>
        <div className='card'>
          <div className='card-inner'>
            <h3>PRODUCTS</h3>
            <BsFillArchiveFill className='card_icon' />
          </div>
          <h1>300</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>CATEGORIES</h3>
            <BsFillGrid3X3GapFill className='card_icon' />
          </div>
          <h1>12</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>CUSTOMERS</h3>
            <BsPeopleFill className='card_icon' />
          </div>
          <h1>33</h1>
        </div>
        <div className='card'>
          <div className='card-inner'>
            <h3>ALERTS</h3>
            <BsFillBellFill className='card_icon' />
          </div>
          <h1>42</h1>
        </div>
      </div>

      <div className='charts'>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            {/* Y-axis for PM2.5 */}
            <YAxis yAxisId="left" domain={[0, 25]} />
            {/* Y-axis for SO2 on the right */}
            <YAxis yAxisId="right" orientation="right" domain={[0, 0.1]} />
            <Tooltip />
            <Legend />
            {/* PM2.5 Bars */}
            <Bar yAxisId="left" dataKey="PM25" fill="#B3CDAD" />
            {/* SO2 Bars */}
            <Bar yAxisId="right" dataKey="SO2" fill="#FF5F5E" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

export default Home;
