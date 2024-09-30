import React from 'react';
import { BsFillBellFill, BsFillEnvelopeFill, BsSearch, BsJustify } from 'react-icons/bs';
import './header.css';
import { GiTreeBranch } from "react-icons/gi";
import { Link, NavLink } from 'react-router-dom';

function Header({ OpenSidebar }) {
  return (
    <header className='header'>
      <div className="upperheader">
        <div className="sidebar-title">
          <div className="sidebar-brand">
            <GiTreeBranch className='icon_header' />
            <span className="optimal-title">Optimals</span>
            <span className="trademark-title">AQI Sensing</span>
          </div>
        </div>

        <div className='menu-icon'>
          {/* <BsJustify className='icon' onClick={OpenSidebar}/> */}
        </div>
        <div className='header-right'>
          <NavLink to="/login" className='header-button'>Login</NavLink>
          <NavLink to="/signup" className='header-button'>Sign Up</NavLink>
        </div>
      </div>
      <div className="nav">
        <ul className='sidebar-list'>
          <li className='sidebar-list-item'>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
              Dashboard
            </NavLink>
          </li>
          <li className='sidebar-list-item'>
            <NavLink to="/Maps" className={({ isActive }) => (isActive ? 'active' : '')}>
              Maps
            </NavLink>
          </li>
          <li className='sidebar-list-item'>
            <NavLink to="/Charts" className={({ isActive }) => (isActive ? 'active' : '')}>
              Charts
            </NavLink>
          </li>
          <li className='sidebar-list-item'>
            <NavLink to="/Precautions" className={({ isActive }) => (isActive ? 'active' : '')}>
              Precautions
            </NavLink>
          </li>
          <li className='sidebar-list-item'>
            <NavLink to="/About" className={({ isActive }) => (isActive ? 'active' : '')}>
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
