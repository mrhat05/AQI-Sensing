import React from 'react';
import MapWithAQI from './components/MapWithAQI';
import 'leaflet/dist/leaflet.css';
const App = () => {
  const aqidata = [
    { lat: 27.1751, lng: 78.0421, aqi: 20 },
    { lat: 28, lng: 76, aqi: 20 },
    { lat: 26, lng: 79, aqi: 49 },
  ];

  return (
    <div>
      <h1>AQI Hotspots Map</h1>
      <MapWithAQI aqiData={aqidata} />
    </div>
  );
};

export default App;
