import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Circle } from 'react-leaflet';

const MapWithAQI = ({ aqiData }) => {
  const [aqiValues, setAqiValues] = useState(aqiData);

  const getAQIColor = (aqi) => {
    if (aqi <= 50) {
      return 'green';
    } else if (aqi <= 100) {
      return 'orange';
    }
     else{
      return 'red';
    }
  };


  useEffect(() => {
    const interval = setInterval(() => {
      const updatedData = aqiValues.map(location => ({
        ...location,
        aqi: Math.floor(Math.random() * 500)
      }));
      setAqiValues(updatedData);
    }, 5000); 

    return () => clearInterval(interval); 
  }, [aqiValues]);

  const defaultCenter = [20.5937,78.9629];

  return (
    <MapContainer center={defaultCenter} zoom={7} style={{ height: '100vh', width: '100%' }}>
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
          radius={500}
          fillColor={getAQIColor(location.aqi)}
          fillOpacity={0.5}
          stroke={false}
        />
      ))}
    </MapContainer>
  );
};

export default MapWithAQI;
