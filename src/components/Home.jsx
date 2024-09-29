import React, { PureComponent } from 'react';
import { MdDangerous } from "react-icons/md";
import { AiFillMinusCircle } from "react-icons/ai";
import { FaCirclePlus } from "react-icons/fa6";
import { BsFillBellFill } from 'react-icons/bs';
import Charts from './Charts'; // Import the new Charts component
import Weather from './Weather'

// Sample data for demonstration purposes
let near_aqi = 100;
let near_no2 = 1.5;
let near_pm25 = 30;
let near_pm10 = 80;
let near_so2 = 0.18;
let near_dist = "0.5 KM";
let near_coord = "27.1751° N, 78.0421° E";

export default class Home extends PureComponent {
  constructor(props) {
    super(props);
    // State to handle the show/hide functionality
    this.state = {
      showDetails: false,
    };
  }

  // Function to toggle showing details
  toggleDetails = () => {
    this.setState((prevState) => ({
      showDetails: !prevState.showDetails,
    }));
  };

  render() {
    const { showDetails } = this.state;

    return (
      <main className='main-container'>
          <div className='main-title'>
            <h2>DASHBOARD</h2>
          </div>

        <div className='banner'>
          <img className='banner-img' src="public/new4.jpg" alt="" />
        </div>  
        <div className='main-container2'>
          <div className='main-cards'>
            <div className='card'>
              <div className='card-inner'>
                <h3>Danger Zones</h3>
                <MdDangerous className='card_icon' />
              </div>
              <h1>300</h1>
            </div>
            <div className='card'>
              <div className='card-inner'>
                <h3>Moderate Zones</h3>
                <AiFillMinusCircle className='card_icon' />
              </div>
              <h1>12</h1>
            </div>
            <div className='card'>
              <div className='card-inner'>
                <h3>Safe Zones</h3>
                <FaCirclePlus className='card_icon' />
              </div>
              <h1>33</h1>
            </div>
            <div className='card'>
              <div className='card-inner'>
                <h3>ALERTS</h3>
                <BsFillBellFill className='card_icon' />
              </div>
              <h1>42</h1>
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
                    <ul>
                      <li style={{ fontFamily: 'Arial, sans-serif' }}>
                        PM2.5 : {near_pm25} &#181;g/m<sup>3</sup>
                      </li>
                      <li style={{ fontFamily: 'Arial, sans-serif' }}>
                        PM10 : {near_pm10} µg/m³
                      </li>
                      <li style={{ fontFamily: 'Arial, sans-serif' }}>
                        SO2 : {near_so2} ppm
                      </li>
                      <li style={{ fontFamily: 'Arial, sans-serif' }}>
                        NO2 : {near_no2} ppm
                      </li>
                    </ul>
                  </div>
                  <h3>Distance from you: {near_dist}</h3>
                  <h3>Coordinates: {near_coord}</h3>
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
          <Weather/>
          </div>
      </main>
    );
  }
}
