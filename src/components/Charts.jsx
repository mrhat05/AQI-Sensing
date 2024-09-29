
import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Sector } from 'recharts';

// Data for the charts
let s1="#31E981";
let s2="#00120B";
const pieData = [
  { name: 'Place 1', AQI: 100, fill: "#00120B" },
  { name: 'Place 2', AQI: 78, fill: "#31E981" },  
  { name: 'Place 3', AQI: 50, fill: "#00120B" }, 
  { name: 'Place 4', AQI: 150, fill: "#31E981" }, 
  { name: 'Place 5', AQI: 200, fill: "#00120B" }, 
  { name: 'Place 6', AQI: 250, fill: "#31E981" }, 
  { name: 'Place 7', AQI: 300, fill: "#00120B" }, 
  { name: 'Place 8', AQI: 65, fill: "#31E981" }, 
];

const barData = [
  { name: "City 1", "PM2.5": 20, SO2: 0.05 },
  { name: "City 2", "PM2.5": 17, SO2: 0.07 },
  { name: "City 3", "PM2.5": 15, SO2: 0.03 },
  { name: "City 4", "PM2.5": 18, SO2: 0.09 },
  { name: "City 5", "PM2.5": 19, SO2: 0.02 },
  { name: "City 6", "PM2.5": 9, SO2: 0.04 },
  { name: "City 7", "PM2.5": 7, SO2: 0.08 },
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

export default class Charts extends PureComponent {
  state = {
    activeIndex: 0,
  };

  onPieEnter = (_, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  render() {
    return (
     <div>
        <h2 className='text-red-700'>Charts</h2>
      <div className="charts" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="chart-bar" style={{ flex: 1, marginRight: '20px' }}>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={barData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="black" />
              <YAxis yAxisId="left" domain={[0, 25]} stroke="black" />
              <YAxis yAxisId="right" orientation="right" domain={[0, 0.1]} stroke="black" />black
              <Tooltip contentStyle={{ backgroundColor: '#000000', color: '#ffffff' }} itemStyle={{ color: '#00ff08' }} cursor={{ fill: 'rgba(255, 255, 255, 0.2)' }} />
              <Legend />
              <Bar yAxisId="left" dataKey="PM2.5" fill={s1} />
              <Bar yAxisId="right" dataKey="SO2" fill={s2} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-pie" style={{ flex: 1 }}>
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                activeIndex={this.state.activeIndex}
                activeShape={renderActiveShape}
                data={pieData}
                cx="50%"
                cy="50%"
                innerRadius="40%"
                outerRadius="60%"
                fill="red"
                dataKey="AQI"
                onMouseEnter={this.onPieEnter}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      </div>
    );
  }
}
