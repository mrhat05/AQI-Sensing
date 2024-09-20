import React, { PureComponent } from 'react';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Sector } from 'recharts';
import { MdDangerous } from "react-icons/md";
import { AiFillMinusCircle } from "react-icons/ai";
import { FaCirclePlus } from "react-icons/fa6";

const pieData = [
  { name: 'Place 1', AQI: 100, fill: '#ff0000' },
  { name: 'Place 2', AQI: 78, fill: '#00ff08' },  
  { name: 'Place 3', AQI: 50, fill: '#ff0000' }, 
  { name: 'Place 4', AQI: 150, fill: '#ff8042' }, 
  { name: 'Place 5', AQI: 200, fill: '#00ff08' }, 
  { name: 'Place 6', AQI: 250, fill: '#ff8042' }, 
  { name: 'Place 7', AQI: 300, fill: '#00ff08' }, 
  { name: 'Place 8', AQI: 65, fill: '#ff0000' }, 
];
 
// Define a custom active shape for PieChart
const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const sx = cx + (outerRadius + 10) * cos;
  const sy = cy + (outerRadius + 10) * sin;
  const mx = cx + (outerRadius + 30) * cos;
  const my = cy + (outerRadius + 30) * sin;
  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;
  const textAnchor = cos >= 0 ? 'start' : 'end';

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill} fontSize={14}> {/* Reduce font size */}
        {payload.name}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#FFFFFF" fontSize={12}> {/* Reduce font size */}
        {`AQI ${value}`}
      </text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#FFFFFF" fontSize={12}>
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

export default class Home extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/pie-chart-with-customized-active-shape-y93si';

  state = {
    activeIndex: 0,
  };

  onPieEnter = (_, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    // Data for BarChart
    const barData = [
      {
        name: "City 1",
        "PM2.5": 20,
        SO2: 0.05,
      },
      {
        name: "City 2",
        "PM2.5": 17,
        SO2: 0.07,
      },
      {
        name: "City 3",
        "PM2.5": 15,
        SO2: 0.03,
      },
      {
        name: "City 4",
        "PM2.5": 18,
        SO2: 0.09,
      },
      {
        name: "City 5",
        "PM2.5": 19,
        SO2: 0.02,
      },
      {
        name: "City 6",
        "PM2.5": 9,
        SO2: 0.04,
      },
      {
        name: "City 7",
        "PM2.5": 7,
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
              <h3>Danger Zones</h3>
              <MdDangerous className='card_icon' />
            </div>
            <h1>300</h1>
          </div>
          <div className='card'>
            <div className='card-inner'>
              <h3>Moderate Zones</h3>
              <AiFillMinusCircle className='card_icon' />
            </div>
            <h1>12</h1>
          </div>
          <div className='card'>
            <div className='card-inner'>
              <h3>Safe Zones</h3>
              <FaCirclePlus className='card_icon' />
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

      <div className="charts" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="chart-bar" style={{ flex: 1, marginRight: '20px' }}>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={barData}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            {/* Set the stroke color for XAxis and YAxis to white */}
            <CartesianGrid strokeDasharray="3 3" stroke="#ffffff" /> {/* Make grid lines white */}
            <XAxis dataKey="name" stroke="#ffffff" /> {/* X-axis labels in white */}
            <YAxis yAxisId="left" domain={[0, 25]} stroke="#ffffff" /> {/* Y-axis (left) in white */}
            <YAxis yAxisId="right" orientation="right" domain={[0, 0.1]} stroke="#ffffff" /> {/* Y-axis (right) in white */}
            
            <Tooltip />
            <Legend />

            <Bar yAxisId="left" dataKey="PM2.5" fill="#46e3e3" />
            <Bar yAxisId="right" dataKey="SO2" fill="#ffd700" />
          </BarChart>
        </ResponsiveContainer>

        </div>

        {/* PieChart Container */}
        <div className="chart-pie" style={{ flex: 1 }}>
          <ResponsiveContainer width="100%" height={400}> {/* Keep height consistent */}
            <PieChart>
              <Pie
                activeIndex={this.state.activeIndex}
                activeShape={renderActiveShape}
                data={pieData}
                cx="50%" // Center horizontally
                cy="50%" // Center vertically
                innerRadius="40%" // Use percentage for responsive radius
                outerRadius="60%"
                fill="red"
                dataKey="AQI"
                onMouseEnter={this.onPieEnter}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      </main>
    );
  }
}