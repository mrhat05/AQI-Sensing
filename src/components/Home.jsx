import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Weather from './Weather';
import GetLocation from './Getlocation';
import axios from 'axios';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label
} from 'recharts';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

let s1 = "#030460";
let s2 = "#0078B5";
let s3 = "#00B4D9";
let s4 = "#91E0ED";

const barData = [
  { name: "Delhi", "PM2.5": 67, SO2: 7.9, "PM10": 154, NO2: 28.2 },
  { name: "Hyderabad", "PM2.5": 14, SO2: 7, "PM10": 37.9, NO2: 17.9 },
  { name: "Ahmedabad", "PM2.5": 17.6, SO2: 11.7, "PM10": 70, NO2: 22.7 },
  { name: "Bhopal", "PM2.5": 19, SO2: 13.8, "PM10": 50, NO2: 15 },
  { name: "Chennai", "PM2.5": 6, SO2: 4.1, "PM10": 19.7, NO2: 7.7 },
  { name: "Mumbai", "PM2.5": 5.7, SO2: 10.1, "PM10": 19.1, NO2: 13.8 },
];

const Home = () => {
  const [myLat, setMyLat] = useState(null);
  const [myLng, setMyLng] = useState(null);
  const [distanceToNear, setDistanceToNear] = useState(null);
  const [showDetails, setShowDetails] = useState(false);

  const navigate = useNavigate();

  const NEAR_AQI = 100; // Example data
  const NEAR_LAT = 27.1751; // Example latitude
  const NEAR_LNG = 78.0421; // Example longitude

  useEffect(() => {
    if (myLat !== null && myLng !== null) {
      calculateDistanceToNear();
    }
  }, [myLat, myLng]);

  const updateLocation = (lat, lon) => {
    setMyLat(lat);
    setMyLng(lon);
  };
  
  const handleRedirect = (page) => {
    navigate(page); 
  };


  const getDistanceFromMapbox = async (startCoords, endCoords) => {
    const [startLat, startLng] = startCoords;
    const [endLat, endLng] = endCoords;
    const mapboxToken = 'pk.eyJ1IjoiYWJoaXJhbXNhbjA1IiwiYSI6ImNtMTRnc3lpajFyMDQybHM0eW40NjJ2dnEifQ.Y3mDnvlGgmaY5L4YszWmFQ'; // Replace with your Mapbox token

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

  const calculateDistanceToNear = async () => {
    if (myLat !== null && myLng !== null) {
      const distance = await getDistanceFromMapbox(
        [myLat, myLng],
        [myLat+0.01, myLng-0.01]
      );
      setDistanceToNear(distance ? distance.toFixed(2) : "Error");
    }
  };

  const handleClick = () => {
    navigate('/nearby-charts'); 
  };

  const toggleDetails = () => {
    setShowDetails((prevShowDetails) => !prevShowDetails);
  };

  const openGoogleMaps = (coord1,coord2) => {
    const url = `https://www.google.com/maps?q=${coord1},${coord2}`;
    window.open(url, '_blank');
  };

  const openGoogleMapsDirections = (myLat, myLng) => {
    const url = `https://www.google.com/maps/dir/${myLat},${myLng}/${myLat+0.01},${myLng-0.01}`;
    window.open(url, '_blank');
  };

  return (
    <main className='main-container'>
      <div className='main-title'>
        <h2>DASHBOARD</h2>
      </div>

      <div className='banner'>
        <Carousel
          autoPlay
          infiniteLoop
          stopOnHover={false}
          transitionTime={600} 
          showThumbs={false}
          showStatus={false}
          interval={3000} >
          {/* First Image */}
          <div onClick={() => handleRedirect('/page1')}>
            <img src="src/assets/new4.jpg" alt="Image 1" />
            {/* <p className="legend">Page 1</p>  */}
          </div>

          {/* Second Image */}
          <div onClick={() => handleRedirect('/page2')}>
            <img src="src/assets/new7.png" alt="Image 2" />
            {/* <p className="legend">Page 2</p> */}
          </div>

          {/* Third Image */}
          <div onClick={() => handleRedirect('/page3')}>
            <img src="src/assets/new8.png" alt="Image 3" />
            {/* <p className="legend">Page 3</p> */}
          </div>
        </Carousel>
      </div>

      <GetLocation updateLocation={updateLocation} />

      <div className='main-container2'>
        <div className='main-cards'>
          <div className='card'>
            <div className='card-inner'>
              <h3 className='home-text-d'>Danger Zones</h3>
              <h1>300</h1>
            </div>
          </div>
          <div className='card'>
            <div className='card-inner'>
              <h3 className='home-text-m'>Moderate Zones</h3>
              <h1>12</h1>
            </div>
          </div>
          <div className='card'>
            <div className='card-inner'>
              <h3 className='home-text-s'>Safe Zones</h3>
              <h1>33</h1>
            </div>
          </div>
          <div className='card'>
            <div className='card-inner'>
              <h3 className='home-text-a'>ALERTS</h3>
              <h1>42</h1>
            </div>
          </div>
        </div>

        <div className='home-text2'>
          <div className='home-text3'>
            <h2>Nearest Air Quality Index (AQI) Data</h2>
            <div>
              <h3 onClick={handleClick}>AQI Value: {NEAR_AQI}</h3>
              {showDetails && (
                <div>
                  <div className='pollutants'>
                    <h3 onClick={handleClick}>Pollutants</h3>
                    <div className="pollutant-table">
                      <div className="pollutant-row pollutant-header">
                        <div>Pollutant</div>
                        <div>Concentration</div>
                      </div>
                      <div className="pollutant-row">
                        <div>PM2.5</div>
                        <div>{30} &#181;g/m<sup>3</sup></div> {/* Placeholder value */}
                      </div>
                      <div className="pollutant-row">
                        <div>PM10</div>
                        <div>{80} µg/m³</div> {/* Placeholder value */}
                      </div>
                      <div className="pollutant-row">
                        <div>SO2</div>
                        <div>{156 } µg/m³</div> {/* Placeholder value */}
                      </div>
                      <div className="pollutant-row">
                        <div>NO2</div>
                        <div>{276.8} µg/m³</div> {/* Placeholder value */}
                      </div>
                    </div>
                  </div>

                  <h3 onClick={() => openGoogleMapsDirections(myLat, myLng)}>
                    Distance From Here: {distanceToNear ? `${distanceToNear} KM` : "Calculating..."}
                  </h3>
                  <h3 onClick={()=>openGoogleMaps(myLat+0.01, myLng-0.01)}>Coordinates: {myLat+0.01}, {myLng-0.01}</h3>
                </div>
              )}
              <button onClick={toggleDetails}>
                {showDetails ? 'Show Less' : 'Show More'}
              </button>
            </div>
          </div>
        </div>

        <div className='main-container3'>
          <Weather />
          <div className='table-container'>
            <table className="home-table-styling">
              <thead>
                <tr>
                  <th className="table-rad-r">Median AQI</th>
                  <th>Median PM10</th>
                  <th className="table-rad-l">City</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>92</td>
                  <td>70</td>
                  <td>Ahmedabad</td>
                </tr>
                <tr>
                  <td>44</td>
                  <td>50</td>
                  <td>Bengaluru</td>
                </tr>
                <tr>
                  <td>62</td>
                  <td>50</td>
                  <td>Bhopal</td>
                </tr>
                <tr>
                  <td>28</td>
                  <td>19.7</td>
                  <td>Chennai</td>
                </tr>
                <tr>
                  <td>159</td>
                  <td>154</td>
                  <td>Delhi</td>
                </tr>
                <tr>
                  <td>70</td>
                  <td>60</td>
                  <td>Hyderabad</td>
                </tr>
                <tr>
                  <td>56</td>
                  <td>19.1</td>
                  <td>Mumbai</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className='main-container3 ' style={{ fontFamily: 'Arial, sans-serif' }}>
        <div className="chart-bar" style={{ flex: 1, marginRight: '20px' }}>
        <h3 style={{ textDecoration: 'underline' }}>Pollutant's Concentrations of Top 6 Cities</h3>
        <ResponsiveContainer width="100%" height={400} style={{ fontFamily: 'Arial, sans-serif' }}>
  <BarChart data={barData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" stroke="black" />
    <YAxis 
      yAxisId="left" 
      domain={[0, 100]} 
      stroke="black"
      tickFormatter={(value) => value} // Just show the values on Y-axis without the unit
    >
      <Label 
        value="Concentration (µg/m³)" 
        angle={-90} 
        position="insideLeft" 
        style={{ textAnchor: 'middle', fill: 'black'}}
        className="custom-font"
      />
    </YAxis>
    <Tooltip 
      contentStyle={{ backgroundColor: '#eff1f2', color: 'black' }} 
      itemStyle={{ color: '#FFFFF' }} 
      cursor={{ fill: 'rgba(255, 255, 255, 0.2)' }} 
      formatter={(value, name) => [value, name]} // Just show the value without the unit
    />
    <Legend formatter={(value) => <span style={{ color: 'black' }}>{value}</span>} />
    
    <Bar yAxisId="left" dataKey="PM2.5" fill={s1} />
    <Bar yAxisId="left" dataKey="PM10" fill={s3} /> {/* New bar for PM10 */}
    <Bar yAxisId="left" dataKey="SO2" fill={s2} />
    <Bar yAxisId="left" dataKey="NO2" fill={s4} /> {/* New bar for NO2 */}
  </BarChart>
</ResponsiveContainer>


</div>

      </div>
      </div>
    </main>
  );
};

export default Home;
