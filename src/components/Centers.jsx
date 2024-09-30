import React from 'react'
import hc1 from '../assets/hc1.jpg'; 
import hc2 from '../assets/hc2.jpg'; 
import hc3 from '../assets/hc3.jpg';
import hc4 from '../assets/hc4.jpg';
import { MdLocationOn } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import './Centers.css'

const Centers = () => {
  return (
    <div className='health-page'>
        <div className='health-Centers'>
        <h1 className='health-H'>Nearest Health Centers</h1>
        <div className='centers'>
            <div className='centers-img'>
            <img src={hc1} alt="Health Illustration" className="illustration" style={{width:"450px" , height:"450px"}}/>
            </div>
            <div className='centers-det'>
                <h1 className='body-title'>ABC HEALTH CENTER</h1>
                <p className='body-text'>ADDRESS :-</p>
                <div className='add-con'>
                <MdLocationOn className="location-icon"/>
                <p>RCCX+QJ5, Jirania, Birendra Nagar, Tripura 799035</p>
                </div>
                <p className='body-text'>CONTACT :-</p>
                <div className='add-con'>
                <FaPhone className="call-icon"/>
                <p>+91-XXXXXXXXXX</p></div>
                
                
            </div>

        </div>

        <div className='centers'>
            <div className='centers-img'>
            <img src={hc2} alt="Health Illustration" className="illustration" style={{width:"450px" , height:"450px"}}/>
            </div>
            <div className='centers-det'>
                <h1 className='body-title'>SUPER HEALTH CENTER</h1>
                <p className='body-text'>ADDRESS :-</p>
                <div className='add-con'>
                <MdLocationOn className="location-icon"/>
                <p>RCCX+QJ5, Jirania, Birendra Nagar, Tripura 799035</p>
                </div>
                <p className='body-text'>CONTACT :-</p>
                <div className='add-con'>
                <FaPhone className="call-icon"/>
                <p>+91-XXXXXXXXXX</p></div>
                
                
            </div>

        </div>

        <div className='centers'>
            <div className='centers-img'>
            <img src={hc3} alt="Health Illustration" className="illustration" style={{width:"450px" , height:"450px"}}/>
            </div>
            <div className='centers-det'>
                <h1 className='body-title'>FAMILY HEALTH CENTER</h1>
                <p className='body-text'>ADDRESS :-</p>
                <div className='add-con'>
                <MdLocationOn className="location-icon"/>
                <p>RCCX+QJ5, Jirania, Birendra Nagar, Tripura 799035</p>
                </div>
                <p className='body-text'>CONTACT :-</p>
                <div className='add-con'>
                <FaPhone className="call-icon"/>
                <p>+91-XXXXXXXXXX</p></div>
                
                
            </div>

        </div>

        <div className='centers'>
            <div className='centers-img'>
            <img src={hc4} alt="Health Illustration" className="illustration" style={{width:"450px" , height:"450px"}}/>
            </div>
            <div className='centers-det'>
                <h1 className='body-title'>COMMUNITY HEALTH CENTER</h1>
                <p className='body-text'>ADDRESS :-</p>
                <div className='add-con'>
                <MdLocationOn className="location-icon"/>
                <p>RCCX+QJ5, Jirania, Birendra Nagar, Tripura 799035</p>
                </div>
                <p className='body-text'>CONTACT :-</p>
                <div className='add-con'>
                <FaPhone className="call-icon"/>
                <p>+91-XXXXXXXXXX</p></div>
                
                
            </div>

        </div>
        </div>
    </div>
  )
}

export default Centers;