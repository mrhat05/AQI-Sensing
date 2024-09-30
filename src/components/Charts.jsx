import React, { useState } from 'react';
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Sector,
  ResponsiveContainer,
  Tooltip,
  Legend,
  CartesianGrid,
  XAxis,
  YAxis,
  Area,
  Bar,
  ComposedChart,
  BarChart,
  Label
} from 'recharts';
// import { Outlet } from 'react-router-dom';

const data = [
  {
    name: 'Chandigarh',
    "per-capita green space": 38.00,
  },
  {
    name: 'Gandhinagar',
    "per-capita green space": 29.77,
  },
  {
    name: 'Chennai',
    "per-capita green space": 18.05,
  },
  {
    name: 'Delhi',
    "per-capita green space": 10.41,
  },
  {
    name: 'Mysore',
    "per-capita green space": 15.25,
  },
];

let s1 = "#030460";

const pieData = [
  { name: 'Ahmedabad', AQI: 100, fill: "#088484" },
  { name: 'Bengaluru', AQI: 44, fill: "#089898" },
  { name: 'Bhopal', AQI: 62, fill: "#08ADAD" },
  { name: 'Chennai', AQI: 28, fill: "#08C2C2" },
  { name: 'Delhi', AQI: 159, fill: "#08D6D6" },
  { name: 'Mumbai', AQI: 39, fill: "#08EBEB" },
  { name: 'Hyderabad', AQI: 50, fill: "#08FFFF" },
];

const lineData1 = [
  { name: 'Day1', SO2: 12 },
  { name: 'Day2', SO2: 8.7 },
  { name: 'Day3', SO2: 10 },
  { name: 'Day5', SO2: 8.9 },
  { name: 'Day6', SO2: 2.5 },
  { name: 'Day7', SO2: 9.0 },
];

const lineData2 = [
  { name: 'Day1', NO2: 15.5 },
  { name: 'Day2', NO2: 19.8 },
  { name: 'Day3', NO2: 14.2 },
  { name: 'Day5', NO2: 15.9 },
  { name: 'Day6', NO2: 17.9 },
  { name: 'Day7', NO2: 16.0 },
];

const lineData3 = [
  { name: 'Day1', "PM2.5": 36.3 },
  { name: 'Day2', "PM2.5": 20.7 },
  { name: 'Day3', "PM2.5": 43.5 },
  { name: 'Day5', "PM2.5": 45.0 },
  { name: 'Day6', "PM2.5": 65 },
  { name: 'Day7', "PM2.5": 54.0 },
];

const lineData4 = [
  { name: 'Day1', "PM10": 61.5 },
  { name: 'Day2', "PM10": 75.2 },
  { name: 'Day3', "PM10": 90.8 },
  { name: 'Day5', "PM10": 82.3 },
  { name: 'Day6', "PM10": 56.7 },
  { name: 'Day7', "PM10": 148.9 },
];

const lineData5 = [
  { name: 'Day1', O3: 9.0 },
  { name: 'Day2', O3: 7 },
  { name: 'Day3', O3: 9.5 },
  { name: 'Day5', O3: 12.5 },
  { name: 'Day6', O3: 9.8 },
  { name: 'Day7', O3: 10.0 },
];

const lineData6 = [
  { name: 'Day1', AQI: 91.5 },  // Starting point
  { name: 'Day2', AQI: 95.3 },  // Gradual increase
  { name: 'Day3', AQI: 98.7 },  // Peak value
  { name: 'Day4', AQI: 96.5 },  // Slight decrease
  { name: 'Day5', AQI: 93.2 },  // Gradual decrease
  { name: 'Day6', AQI: 95.0 },  // Small increase
  { name: 'Day7', AQI: 97.8 },  // Closing point
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
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill} fontSize={14}>
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
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="black" fontSize={12}>
        {`AQI ${value}`}
      </text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="black" fontSize={12}>
        {`(Rate ${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
  );
};

const Charts = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const onPieEnter = (_, index) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <h2 className='charts-text'>Charts</h2>
      <div className="charts">
        <div className="chart-pie">
          <h2 className='charts-headings' style={{ textDecoration: 'underline' }}>Important Cities and AQI Value</h2>
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                activeIndex={activeIndex}
                activeShape={renderActiveShape}
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius="40%"
                outerRadius="60%"
                dataKey="AQI"
                onMouseEnter={onPieEnter}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className='charts-vbar'>
          <h2 className='charts-headings' style={{ textDecoration: 'underline' }}>Important Cities and AQI Value</h2>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={data}
              layout="vertical"
              margin={{ top: 5, right: 30, left: 50, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" stroke="black" />
              <YAxis
                type="category"
                dataKey="name"
                stroke="black"
                style={{ margin: '0 0px 0 100px' }} // Adjust margin here
              />
              <Tooltip
                contentStyle={{ backgroundColor: '#eff1f2', color: 'black' }}
                itemStyle={{ color: '#FFFFF' }}
                cursor={{ fill: 'rgba(255, 255, 255, 0.2)' }}
              />
              <Legend formatter={(value) => <span style={{ color: 'black' }}>{value}</span>} />
              <Bar dataKey="per-capita green space" fill={s1} barSize={20} /> {/* Adjust barSize if necessary */}
            </BarChart>
          </ResponsiveContainer>
        </div>
        {/* <div className='line-charts'> */}
          <div className="chart-line">
          <h3 className='charts-headings' style={{ textDecoration: 'underline' }}>Nearest location's 7-day SO2 levels</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={lineData1} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis>
                <Label 
        value="Concentration (µg/m³)" 
        angle={-90} 
        position="insideLeft" 
        style={{ textAnchor: 'middle', fill: 'black'}}
        className="custom-font"
      />
                </YAxis>
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="SO2" stroke="#2c29f2" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-line">
          <h3 className='charts-headings' style={{ textDecoration: 'underline' }}>Nearest location's 7-day NO2 levels</h3>

            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={lineData2} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis>
                <Label 
        value="Concentration (µg/m³)" 
        angle={-90} 
        position="insideLeft" 
        style={{ textAnchor: 'middle', fill: 'black'}}
        className="custom-font"
      />
                </YAxis>
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="NO2" stroke="#2bb519" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="chart-line">
          <h3 className='charts-headings' style={{ textDecoration: 'underline' }}>Nearest location's 7-day PM2.5 levels</h3>

            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={lineData3} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis>
                <Label 
        value="Concentration (µg/m³)" 
        angle={-90} 
        position="insideLeft" 
        style={{ textAnchor: 'middle', fill: 'black'}}
        className="custom-font"
      />
                </YAxis>
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="PM2.5" stroke="#f2af29" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="chart-line">
          <h3 className='charts-headings' style={{ textDecoration: 'underline' }}>Nearest location's 7-day PM10 levels</h3>

            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={lineData4} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis>
                <Label 
        value="Concentration (µg/m³)" 
        angle={-90} 
        position="insideLeft" 
        style={{ textAnchor: 'middle', fill: 'black'}}
        className="custom-font"
      />
                </YAxis>
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="PM10" stroke="#9429f2" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="chart-line">
          <h3 className='charts-headings' style={{ textDecoration: 'underline' }}>Nearest location's 7-day O3 levels</h3>

            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={lineData5} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis>
                <Label 
        value="Concentration (µg/m³)" 
        angle={-90} 
        position="insideLeft" 
        style={{ textAnchor: 'middle', fill: 'black'}}
        className="custom-font"
      />
                </YAxis>
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="O3" stroke="#e0001d" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="chart-line">
          <h3 className='charts-headings' style={{ textDecoration: 'underline' }}>Nearest location's 7-day AQI levels</h3>

            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={lineData6} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis>
                <Label 
        value="Concentration (µg/m³)" 
        angle={-90} 
        position="insideLeft" 
        style={{ textAnchor: 'middle', fill: 'black'}}
        className="custom-font"
      />
            </YAxis>
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="AQI" stroke="#dc00e0" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        {/* </div> */}
        {/* <Outlet /> */}
      </div>
    </div>
  );
};

export default Charts;
