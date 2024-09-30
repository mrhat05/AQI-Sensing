import React from 'react'
import Maps_comp from './Maps_comp.jsx'
import 'leaflet/dist/leaflet.css';
import './Maps.css'
const Maps = () => {
  const aqidata = [
    { lat: 23.8480504, lng: 91.4271073, aqi: 36 },
    { lat: 23.8491359, lng: 91.412693, aqi: 78 },
    { lat: 23.8450194, lng: 91.419715, aqi: 86 },
    { lat: 23.8452268, lng: 91.4236964, aqi: 49 },
    { lat: 23.8389397, lng: 91.4214541, aqi: 158 },
    { lat: 23.8409613, lng: 91.4233262, aqi: 176 }
  ];
  return (
    <div>
        <div className='main-title-maps'>
          <h2>Live Maps</h2>
        </div>
    <div >
      <Maps_comp aqiData={aqidata}/>
      </div>
    </div>
  )
}

export default Maps