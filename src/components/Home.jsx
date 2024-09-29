import React, { Component } from 'react';
// import { MdDangerous } from "react-icons/md";
// import { AiFillMinusCircle } from "react-icons/ai";
// import { FaCirclePlus } from "react-icons/fa6";
// import { BsFillBellFill } from 'react-icons/bs';
import Charts from './Charts'; // Import the new Charts component
import Weather from './Weather';
import GetLocation from './GetLocation'; // Updated component name
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

let s1="#030460";
let s2="#0078B5";
let s3="#00B4D9";
let s4="#91E0ED";
let near_aqi = 100;
let near_no2 = 1.5;
let near_pm25 = 30;
let near_pm10 = 80;
let near_so2 = 0.18;
let near_lat = 27.1751; 
let near_lng = 78.0421; 

const barData = [
  { name: "Delhi", "PM2.5": 36, SO2: 7,"PM10": 56, NO2: 25 },
  { name: "City 2", "PM2.5": 17, SO2: 0.07,"PM10": 20, NO2: 0.05 },
  { name: "City 3", "PM2.5": 15, SO2: 0.03,"PM10": 20, NO2: 0.05 },
  { name: "City 4", "PM2.5": 18, SO2: 0.09,"PM10": 20, NO2: 0.05 },
  { name: "City 5", "PM2.5": 19, SO2: 0.02,"PM10": 20, NO2: 0.05 },
  { name: "City 6", "PM2.5": 9, SO2: 0.04,"PM10": 20, NO2: 0.05 },
  { name: "City 7", "PM2.5": 7, SO2: 0.08,"PM10": 20, NO2: 0.05 },
];

const openGoogleMaps = () => {
  const url = `https://www.google.com/maps?q=${near_lat},${near_lng}`;
  window.open(url, '_blank');
}

const openGoogleMapsDirections = (myLat, myLng) => {
  const url = `https://www.google.com/maps/dir/${myLat},${myLng}/${near_lat},${near_lng}`;
  window.open(url, '_blank');
}

// function calculateDistance(lat1, lon1, lat2, lon2) {
//   const R = 6371; // Earth's radius in kilometers
//   const dLat = (lat2 - lat1) * (Math.PI / 180);  // Convert degrees to radians
//   const dLon = (lon2 - lon1) * (Math.PI / 180);
  
//   const a = 
//     Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//     Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
//     Math.sin(dLon / 2) * Math.sin(dLon / 2);
    
//   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//   const distance = R * c; // Distance in kilometers
  
//   return distance;
// }


export default class Home extends Component {  // Changed to Component
  constructor(props) {
    super(props);
    this.state = {
      myLat: null,
      myLng: null,
      distanceToNear: null,
    };
  }

  updateLocation = (lat, lon) => {
    this.setState({ myLat: lat, myLng: lon }, this.calculateDistanceToNear);
  };

  getDistanceFromMapbox = async (startCoords, endCoords) => {
    const [startLat, startLng] = startCoords;
    const [endLat, endLng] = endCoords;

    const mapboxToken = 'pk.eyJ1IjoiYWJoaXJhbXNhbjA1IiwiYSI6ImNtMTRnc3lpajFyMDQybHM0eW40NjJ2dnEifQ.Y3mDnvlGgmaY5L4YszWmFQ'; 

    const url = `https://api.mapbox.com/directions/v5/mapbox/driving/${startLng},${startLat};${endLng},${endLat}?access_token=${mapboxToken}`;

    try {
      const response = await axios.get(url);
      const distance = response.data.routes[0].distance; // Distance in meters
      return distance / 1000; // Convert to kilometers
    } catch (error) {
      console.error("Error fetching distance from Mapbox:", error);
      return null;
    }
  };

  calculateDistanceToNear = async () => {
    const { myLat, myLng } = this.state;
    const near_lat = 27.1751; // Example: Near location latitude
    const near_lng = 78.0421; // Example: Near location longitude

    if (myLat !== null && myLng !== null) {
      const distance = await this.getDistanceFromMapbox([myLat, myLng], [near_lat, near_lng]);
      this.setState({ distanceToNear: distance ? distance.toFixed(2) : "Error" });
    }
  };
  toggleDetails = () => {
    this.setState((prevState) => ({
      showDetails: !prevState.showDetails,
    }));
  };

  render() {
    const { showDetails, myLat, myLng, distanceToNear } = this.state;
    return (
      <main className='main-container'>
        <div className='main-title'>
          <h2>DASHBOARD</h2>
        </div>

        <div className='banner'>
          <img className='banner-img' src="public/new4.jpg" alt="" />
        </div>
        <GetLocation updateLocation={this.updateLocation} /> {/* Include GetLocation here */}
        <div className='main-container2'>
          <div className='main-cards'>
            <div className='card'>
              <div className='card-inner'>
              {/* <MdDangerous className='card_icon' /> */}
                <h3 className='home-text-d'>Danger Zones</h3>
                <h1>300</h1>
              </div>
            </div>
            <div className='card'>
              <div className='card-inner'>
              {/* <AiFillMinusCircle className='card_icon' /> */}
                <h3 className='home-text-m'>Moderate Zones</h3>
                <h1>12</h1>
              </div>
            </div>
            <div className='card'>
              <div className='card-inner'>
              {/* <FaCirclePlus className='card_icon' /> */}
                <h3 className='home-text-s'>Safe Zones</h3>
                <h1>33</h1>
              </div>
            </div>
            <div className='card'>
              <div className='card-inner'>
              {/* <BsFillBellFill className='card_icon' /> */}
                <h3 className='home-text-a'>ALERTS</h3>
                <h1>42</h1>
              </div>
            </div>
          </div>

          <div className='home-text2'>
            <div className='home-text3'>
              <h2>Nearest Air Quality Index (AQI) Data</h2>
              <div>
                <h3>AQI Value: {near_aqi}</h3>

                {/* Conditionally render more details */}
                {showDetails && (
                  <div>
                    <div className='pollutants'>
                  <h3>Pollutants</h3>
                  <div className="pollutant-table">
                    <div className="pollutant-row pollutant-header">
                      <div>Pollutant</div>
                      <div>Concentration</div>
                    </div>
                    <div className="pollutant-row">
                      <div>PM2.5</div>
                      <div>{near_pm25} &#181;g/m<sup>3</sup></div>
                    </div>
                    <div className="pollutant-row">
                      <div>PM10</div>
                      <div>{near_pm10} µg/m³</div>
                    </div>
                    <div className="pollutant-row">
                      <div>SO2</div>
                      <div>{near_so2} ppm</div>
                    </div>
                    <div className="pollutant-row">
                      <div>NO2</div>
                      <div>{near_no2} ppm</div>
                    </div>
                  </div>
                </div>

                    <h3 onClick={() => openGoogleMapsDirections(myLat, myLng)}>Distance From Here: {distanceToNear ? `${distanceToNear} KM` : "Calculating..."}</h3>
                    <h3 onClick={openGoogleMaps}>Coordinates: {near_lat},{near_lng}</h3>
                  </div>
                )}

                {/* Button to toggle details */}
                <button onClick={this.toggleDetails}>
                  {showDetails ? 'Show Less' : 'Show More'}
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='main-container3'>
          <Weather />
            <div className='table-container'>
              <table class="home-table-styling">
                <thead>
                  <tr>
                    <th class="table-rad-r">Median AQI</th>
                    <th>Median PM10</th>
                    <th class="table-rad-l">City</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>483</td>
                    <td>62.9</td>
                    <td>Ahmedabad</td>
                  </tr>
                  <tr>
                    <td>435</td>
                    <td>46.5</td>
                    <td>Bengaluru</td>
                  </tr>
                  <tr>
                    <td>524</td>
                    <td>52.62</td>
                    <td>Bhopal</td>
                  </tr>
                  <tr>
                    <td>565</td>
                    <td>63.21</td>
                    <td>Chennai</td>
                  </tr>
                  <tr>
                    <td>288</td>
                    <td>84.83</td>
                    <td>Delhi</td>
                  </tr>
                  <tr>
                    <td>600</td>
                    <td>97</td>
                    <td>Delhi</td>
                  </tr>
                  <tr>
                    <td>435</td>
                    <td>61.78</td>
                    <td>Hyderabad</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        <div className='main-container3'>
        <div className="chart-bar" style={{ flex: 1, marginRight: '20px' }}>
  <ResponsiveContainer width="100%" height={400}>
    <BarChart data={barData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" stroke="black" />
      <YAxis yAxisId="left" domain={[0, 25]} stroke="black" />
      {/* <YAxis yAxisId="right" orientation="right" domain={[0, 0.1]} stroke="black" /> */}
      <Tooltip 
        contentStyle={{ backgroundColor: '#eff1f2', color: 'black' }} 
        itemStyle={{ color: '#FFFFF' }} 
        cursor={{ fill: 'rgba(255, 255, 255, 0.2)' }} 
      />
      <Legend  formatter={(value) => <span style={{ color: 'black' }}>{value}</span>} />
      
      <Bar yAxisId="left" dataKey="PM2.5" fill={s1} />
      <Bar yAxisId="left" dataKey="PM10" fill={s3} /> {/* New bar for PM10 */}
      <Bar yAxisId="left" dataKey="SO2" fill={s2} />
      <Bar yAxisId="left" dataKey="NO2" fill={s4} /> {/* New bar for NO2 */}
    </BarChart>
  </ResponsiveContainer>
</div>

      </div>
      </main>
    );
  }
}
