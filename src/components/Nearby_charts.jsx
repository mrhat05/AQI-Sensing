import React from 'react'
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
let s1 = "#e8de2e";


const barData = [
  { name: "PM2.5", Concentration: 30},
  { name: "PM10", Concentration: 276.8},
  { name: "SO2", Concentration: 80},
  { name: "NO2", Concentration: 156},
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


const Nearby_charts = () => {
  return (
    <div>
      <div className='nearby-charts-container'>
        <div className="chart-bar" style={{ flex: 1, marginRight: '20px' }}>
        <h3 className='charts-headings' style={{ textDecoration: 'underline' }}>Nearest location's Pollutants Concentration</h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={barData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" stroke="black" />
              <YAxis yAxisId="left" domain={[0, 500]} stroke="black" >
              <Label 
        value="Concentration (µg/m³)" 
        angle={-90} 
        position="insideLeft" 
        style={{ textAnchor: 'middle', fill: 'black'}}
        className="custom-font"
      />
              </YAxis>
              {/* <YAxis yAxisId="right" orientation="right" domain={[0, 0.1]} stroke="black" /> */}
              <Tooltip
                contentStyle={{ backgroundColor: '#eff1f2', color: 'black' }}
                itemStyle={{ color: '#FFFFF' }}
                cursor={{ fill: 'rgba(255, 255, 255, 0.2)' }}
              />
              <Legend formatter={(value) => <span style={{ color: 'black' }}>{value}</span>} />

              <Bar yAxisId="left" dataKey="Concentration" fill={s1} />

            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="chart-line">
          <h3 className='charts-headings' style={{ textDecoration: 'underline' }}>Nearest location's 7-day AQI levels</h3>

            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={lineData6} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="AQI" stroke="#f2943c" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
      </div>
    </div>
  )
}

export default Nearby_charts