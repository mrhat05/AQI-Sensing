import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Circle, Popup } from 'react-leaflet';

// Function to find center of all AQI locations
const findCenter = (locations) => {
  let latSum = 0;
  let lonSum = 0;
  const total = locations.length;

  locations.forEach(location => {
    latSum += location.lat;
    lonSum += location.lng;
  });

  return [
    latSum / total,
    lonSum / total,
  ];
};

const MapWithAQI = ({ aqiData }) => {
  const [aqiValues, setAqiValues] = useState(aqiData);

  // Function to determine AQI color
  const getAQIColor = (aqi) => {
    if (aqi <= 50) return 'green';
    if (aqi <= 100) return 'orange';
    return 'red';
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedData = aqiValues.map(location => ({
        ...location,
        aqi: Math.floor(Math.random() * 500) // Simulate AQI changes
      }));
      setAqiValues(updatedData);
    }, 5000);

    return () => clearInterval(interval);
  }, [aqiValues]);

  const defaultCenter = findCenter(aqiValues);

  return (
    <div className="map-container">
      <MapContainer style={{ height: '500px', width: '1200px' }} center={defaultCenter} zoom={15} className="leaflet-map">
        <TileLayer
          url="https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWJoaXJhbXNhbjA1IiwiYSI6ImNtMTRnc3lpajFyMDQybHM0eW40NjJ2dnEifQ.Y3mDnvlGgmaY5L4YszWmFQ"
          id="mapbox/streets-v11"
          attribution="&copy; <a href='https://www.mapbox.com/about/maps/'>Mapbox</a>"
          tileSize={512}
          zoomOffset={-1}
        />
        {aqiValues.map((location, index) => (
          <Circle
            key={index}
            center={[location.lat, location.lng]}
            radius={200}
            fillColor={getAQIColor(location.aqi)}
            fillOpacity={0.6}
            stroke={false}
          >
            <Popup>
              <div>
                <h3>AQI: {location.aqi}</h3>
                <p>Location: ({location.lat}, {location.lng})</p>
              </div>
            </Popup>
          </Circle>
        ))}
      </MapContainer>

        <h3>AQI Levels</h3>
      <div className="aqi-legend">
        <div><span className="legend-box green"></span> Safe (0-50)</div>
        <div><span className="legend-box orange"></span> Moderate (51-100)</div>
        <div><span className="legend-box red"></span> Dangerous (101+)</div>
      </div>
    </div>
  );
};

export default MapWithAQI;
