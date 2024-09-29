import React from 'react'
import
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'
import './header.css'
import { GiTreeBranch } from "react-icons/gi";
import { Link } from 'react-router-dom'

function Header({OpenSidebar}) {
  return (
    <header className='header'>
      <div className="upperheader">
        <div className="sidebar-title">
          <div className="sidebar-brand">
          <GiTreeBranch className='icon_header' />AQI Sensing
          </div>
          {/* <span classname="icon close_icon" onClick={OpenSidebar}>X</span> */}
        </div>

        <div className='menu-icon'>
            {/* <BsJustify className='icon' onClick={OpenSidebar}/> */}
        </div>
        {/* <div className='header-left'>
            <BsSearch  className='icon'/>
        </div> */}
        <div className='header-right'>
            {/* <BsFillBellFill className='icon'/> */}
            {/* <BsFillEnvelopeFill className='icon'/> */}
            <BsPersonCircle className='icon'/>
        </div>
        </div>
        {/* <div id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}> */}
        <div className="nav">
        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <Link to="/">
                
                    Dashboard
                
                </Link>
               
            </li>
            <li className='sidebar-list-item'>
                <Link to="/Maps">
                
                    Maps
                
                </Link>
                
            </li>
            <li className='sidebar-list-item'>
                <Link to="/Charts">
                
                    Charts
                
                </Link>
                
            </li>
            <li className='sidebar-list-item'>
                <Link to="/Precautions">
                
                    Precautions
                
                </Link>
            </li>

            <li className='sidebar-list-item' >
            <Link to="/About">
            
                    About
                
            </Link>
               
            </li>
        </ul>
        </div>
    {/* </div> */}
    </header>
  )
}

export default Header