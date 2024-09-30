import React from 'react';
import { useState } from "react";
import doc1 from '../assets/doc1.png'; 
import doc2 from '../assets/doc2.png'; 
import team2 from '../assets/team2.png';
import './Precautions.css';
import sendd from '../assets/sendd.png';
import { Link } from 'react-router-dom'
// import Contact from './Contact';

const Precautions = () => {
  const [formData , setFormData] = useState({
    Name:"",email:"",Message:""
  })

  function changeHandler(event){
    const{name , value ,checked ,type} = event.target;
    setFormData((prev) => ({...prev , [name] : type == "checkbox" ? checked : value})) 
  }

  function submitHandler(e){
    e.preventDefault();
    console.log(formData);
  }

  return (
      <div className="Precautions">

          {/* Health tips */}
          <div className='HealthTips'>
            <div className='HealthTipsCon'>
              <div className="image-container">
              <img src={doc1} alt="Health Illustration" className="illustration" style={{width:"500px" , height:"500px"}}/>
              </div>
              <div className="content">
              <p className="DesCripH">
                Unlock the Path to Optimal Health: Explore Our <br/> Comprehensive Guide to Better Living
              </p>
              <p className="DesCrip">
                Empowering You with Transformative Health Knowledge
              </p>
            
              <ul className="Healthtitle">
                <li className="Healthsubtitle">If you notice discrepancies in AQI data compared to reality, let us know  to <br/> investigate potential sensor issues.</li>
                <li className="Healthsubtitle">Report any suspected damage to sensors or calibration deviations that may <br/>affect the accuracy of the data.</li>
                <li className="Healthsubtitle">Your feedback is crucial in helping us maintain high-quality data and ensure <br/>sensor reliability.</li>
                <li className="Healthsubtitle">Submit your concerns about data accuracy or technical malfunctions through <br/>our complaint and query section.</li>
                <li className="Healthsubtitle">Together, we can improve data quality and provide more reliable information <br/>to protect public health.</li>
              </ul>

              </div>
            </div>

          </div>

          {/* Health Centers */}
          <div className="HealthCentres">
            <div className="health-content">
              <h1 className="health-title">
              Nearest Health Centres.
              </h1>
              <p className="DesCrip">
              Stay healthy, stay informed! Discover the nearest health centers for fast,<br/>reliable medical assistance near you.
              </p>
             
              <button className="cta-button">
                <Link to="/Centers" className='BtnF'>
                    Find Now
                </Link>
            </button>
            </div>
            <div className="health-image-container">
              <img src={doc2} alt="Nurse Illustration" className="nurse-illustration" style={{width:"500px" , height:"500px"}}/>
            </div>
          </div>

          {/* Work with us */}
          <div className='work'>
            <div className="image-container">
            <img src={team2} alt="Health Illustration" className="illustration" style={{width:"500px" , height:"500px"}}/>
            </div>
            <div className="content">
            <h1 className="title">
              Work With <br /> US
            </h1>
            <p className="DesCrip">
              Be part of the change! Partner with us, share your vehicle's data, and get premium service <br/> benefits while helping monitor air quality in your community.
            </p>

            <button className="cta-button">
            <Link to="/FormContainer" className='BtnF'>
                Fill Now
            </Link>
            </button>
            </div>
            
          </div>

          {/* help Us */}
          <div className='help'>
             
              <div className='HelpUs'>
                  
                  <div className='formContactUs'>
                  <h1 >Contact Us</h1>
                  <form onSubmit={submitHandler}>
                  <label htmlFor="Name" className='html'>Name</label>
                  <br/>
                  <div>  
                  <input
                  type="text"
                  name="Name"
                  id="Name"
                  //placeholder="Name"
                  value={formData.Name}
                  onChange={changeHandler}
                  className="outline"
                  />
                  </div>
                  <br/>
                  
                  <label htmlFor="email" className='html'>Email</label>
                  <div>
                  <input
                  type="email"
                  name="email"
                  id="email"
                  // placeholder="@gmail.com"
                  value={formData.email}
                  onChange={changeHandler}
                  className="outline"
                  />
                  </div>
                  <br/>
                  <label htmlFor="firstName" className='html'>Message</label>
                  <div>
                  <textarea 
                  type="text"
                  name="Message"
                  id="Message"
                  // placeholder="Text here..."
                  value={formData.Message}
                  onChange={changeHandler}
                  className="outline"
                  />
                  </div>
                  <br/>
                  <button>Send Message</button>
                  </form>
                  </div>
                  <div className='imageCon'>
                  <img src={sendd} alt="Health Illustration" className="illustration" style={{width:"400px" , height:"400px"}}/>
                  </div>
              </div>

          </div>

          
          
      </div>
  );
}

export default Precautions;
