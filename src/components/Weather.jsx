import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './weather.css'; // Import the CSS file for styling

const Weather = () => {
  const [weather, setWeather] = useState({
    temperature: '',
    humidity: '',
    windSpeed: ''
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=Agartala&appid=68cbc12be63320f33f075b2eaf430e87&units=metric`
        );
        const data = response.data;
        setWeather({
          temperature: data.main.temp,
          humidity: data.main.humidity,
          windSpeed: data.wind.speed,
        });
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setError('Failed to fetch weather data');
      }
    };

    fetchWeather();
  }, []); // Only runs once on component mount

  return (
    <div className="weather-container">
      <h2>Weather Info</h2>
      {error ? (
        <p className="error">{error}</p>
      ) : (
        <div className="weather-info">
          <div className="weather-card">
            <div className='weather-p'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path d="M12 22C14.7614 22 17 19.7614 17 17C17 15.3644 16.2147 13.9122 15.0005 13V5.00049C15.0005 4.06815 15.0005 3.60198 14.8481 3.23428C14.6451 2.74451 14.256 2.35537 13.7662 2.15239C13.3985 2 12.9323 2 12 2C11.0677 2 10.6015 2 10.2338 2.15239C9.74402 2.35537 9.35488 2.74451 9.1519 3.23428C8.99951 3.60198 8.99951 4.06815 8.99951 5.00049V13C7.78534 13.9122 7 15.3644 7 17C7 19.7614 9.23858 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M12 15C10.8954 15 10 15.8954 10 17C10 18.1046 10.8954 19 12 19C13.1046 19 14 18.1046 14 17C14 15.8954 13.1046 15 12 15ZM12 15V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>
            <p className='weather-p'>Temperature: {weather.temperature}°C</p>
            </div>
          </div>
          <div className="weather-card">
          <div className='weather-p'>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path d="M3.5 13.678C3.5 9.49387 7.08079 5.35907 9.59413 2.97222C10.9591 1.67593 13.0409 1.67593 14.4059 2.97222C16.9192 5.35907 20.5 9.49387 20.5 13.678C20.5 17.7804 17.2812 22 12 22C6.71878 22 3.5 17.7804 3.5 13.678Z" stroke="currentColor" strokeWidth="1.5" />
    <path d="M16 14C16 16.2091 14.2091 18 12 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>  
            <p >Humidity: {weather.humidity}%</p>
            </div>
          </div>
          <div className="weather-card">
            
          <div className='weather-p'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
    <path d="M21 5.63247C19.8635 4.81397 18.4095 4.81397 17.273 5.63247C16.5877 6.13474 15.6685 6.11614 14.9833 5.61388C13.8468 4.79537 12.3928 4.79537 11.273 5.61388C10.571 6.11614 9.68524 6.11614 9 5.61388" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M3 9.37672C4.16839 10.1953 5.66323 10.1953 6.83162 9.37672C7.53608 8.87443 8.46392 8.87443 9.16838 9.37672C10.3368 10.1953 11.8488 10.2139 13 9.39531" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M21 14.6233C19.8635 13.8047 18.4095 13.8047 17.273 14.6233C16.5877 15.1256 15.6852 15.1256 15 14.6233C13.8635 13.8047 12.3928 13.7861 11.273 14.6047C10.571 15.107 9.68524 15.107 9 14.6047" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M3 18.3767C4.16839 19.1953 5.66323 19.1953 6.83162 18.3767C7.53608 17.8744 8.46392 17.8744 9.16838 18.3767C10.3368 19.1953 11.8488 19.2139 13 18.3953" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
</svg>
            <p >Wind Speed: {weather.windSpeed} m/s</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
