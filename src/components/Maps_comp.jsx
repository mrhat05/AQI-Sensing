import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Circle } from 'react-leaflet';
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
    ]
  };
const MapWithAQI = ({ aqiData }) => {
  const [aqiValues, setAqiValues] = useState(aqiData);

  const getAQIColor = (aqi) => {
    if (aqi <= 50) {
      return 'green';
    } else if (aqi <= 100) {
      return 'orange';
    } else {
      return 'red';
    }
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
  }, []); 
  const defaultCenter = findCenter(aqiValues);

  return (
    <MapContainer center={defaultCenter} zoom={15} style={{ height: '500px', width: '1200px' }}>
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
          fillOpacity={0.5}
          stroke={false}
        />
      ))}
    </MapContainer>
  );
};

export default MapWithAQI;
