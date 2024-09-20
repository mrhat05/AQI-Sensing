import React from 'react'
import nature2 from '../assets/nature2.jpg';
import './About.css'
import defaultavatar1 from '../assets/defaultavatar1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons'; 
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'; 
import { faGithub } from '@fortawesome/free-brands-svg-icons'; 
import { faInstagram } from '@fortawesome/free-brands-svg-icons'; 

const About = () => {
  return (
    //banner
    <div className='about'>
    <div className='banner'>
        <div className='bannerI'>
            <img src={nature2} style={{ width: '100%', height:'500px'}} />
        </div>
        <div className='bannerD'>
            <div className='bannerH'>ABOUT US</div>
            <p className='bannerP'> <span>At Eco Innovators,With a diverse blend of skills and backgrounds, we bring fresh perspectives </span><br/> <span>to environmental 
            challenges. Our commitment to eco-friendly innovation drives us to develop </span><br/> <span>practical, 
            cutting-edge solutions that make a positive impact on the world around us.</span></p>
        </div>      
    </div>
    
    {/* members */}
    <div className='members'>
        <div className='aboutdiv'>
            <div className='aboutI'>
                <img src={defaultavatar1} style={{width:"300px" , height:"350px"}}/>
            </div>
            <div className='aboutD'>
                <p>Kuppala Sarath Narendra </p>
                <p>Team Lead</p>
                <div className='icondiv'>
                <FontAwesomeIcon icon={faFacebook} size="lg" className='aboutIcons'/>
                <FontAwesomeIcon icon={faXTwitter} size="lg" className='aboutIcons'/>
                <FontAwesomeIcon icon={faGithub} size="lg" className='aboutIcons'/>
                <FontAwesomeIcon icon={faInstagram} size="lg" className='aboutIcons'/>
                </div>
            </div>
        </div>
        <div className='aboutdiv'>
            <div className='aboutI'>
                <img src={defaultavatar1} style={{width:"300px" , height:"350px"}}/>
            </div>
            <div className='aboutD'>
                <p>Simpi Kumari </p>
                <p>Member</p>
                <div className='icondiv'>
                <FontAwesomeIcon icon={faFacebook} size="lg" className='aboutIcons'/>
                <FontAwesomeIcon icon={faXTwitter} size="lg" className='aboutIcons'/>
                <FontAwesomeIcon icon={faGithub} size="lg" className='aboutIcons'/>
                <FontAwesomeIcon icon={faInstagram} size="lg" className='aboutIcons'/>
                </div>
            </div>
        </div>
        <div className='aboutdiv'>
            <div className='aboutI'>
                <img src={defaultavatar1} style={{width:"300px" , height:"350px"}}/>
            </div>
            <div className='aboutD'>
                <p>Sankarasetty Jaya Abhiram </p>
                <p>Member</p>
                <div className='icondiv'>
                <FontAwesomeIcon icon={faFacebook} size="lg" className='aboutIcons'/>
                <FontAwesomeIcon icon={faXTwitter} size="lg" className='aboutIcons'/>
                <FontAwesomeIcon icon={faGithub} size="lg" className='aboutIcons'/>
                <FontAwesomeIcon icon={faInstagram} size="lg" className='aboutIcons'/>
                </div>
            </div>
        </div>
        <div className='aboutdiv'>
            <div className='aboutI'>
                <img src={defaultavatar1} style={{width:"300px" , height:"350px"}}/>
            </div>
            <div className='aboutD'>
                <p>Prayag Das </p>
                <p>Member</p>
                <div className='icondiv'>
                <FontAwesomeIcon icon={faFacebook} size="lg" className='aboutIcons'/>
                <FontAwesomeIcon icon={faXTwitter} size="lg" className='aboutIcons'/>
                <FontAwesomeIcon icon={faGithub} size="lg" className='aboutIcons'/>
                <FontAwesomeIcon icon={faInstagram} size="lg" className='aboutIcons'/>
                </div>
            </div>
        </div>
        <div className='aboutdiv'>
            <div className='aboutI'>
                <img src={defaultavatar1} style={{width:"300px" , height:"350px"}}/>
            </div>
            <div className='aboutD'>
                <p>Aemili Das </p>
                <p>Member</p>
                <div className='icondiv'>
                <FontAwesomeIcon icon={faFacebook} size="lg" className='aboutIcons'/>
                <FontAwesomeIcon icon={faXTwitter} size="lg" className='aboutIcons'/>
                <FontAwesomeIcon icon={faGithub} size="lg" className='aboutIcons'/>
                <FontAwesomeIcon icon={faInstagram} size="lg" className='aboutIcons'/>
                </div>
            </div>
        </div>
        <div className='aboutdiv'>
            <div className='aboutI'>
                <img src={defaultavatar1} style={{width:"300px" , height:"350px"}}/>
            </div>
            <div className='aboutD'>
                <p>Shivam</p>
                <p>Member</p>
                <div className='icondiv'>
                <FontAwesomeIcon icon={faFacebook} size="lg" className='aboutIcons'/>
                <FontAwesomeIcon icon={faXTwitter} size="lg" className='aboutIcons'/>
                <FontAwesomeIcon icon={faGithub} size="lg" className='aboutIcons'/>
                <FontAwesomeIcon icon={faInstagram} size="lg" className='aboutIcons'/>
                </div>
            </div>
        </div>
    </div>
    
    </div>
  )
}

export default About