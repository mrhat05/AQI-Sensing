import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill}
 from 'react-icons/bs'
import { Link } from 'react-router-dom'

import { GiTreeBranch } from "react-icons/gi";

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <GiTreeBranch className='icon_header' />AQI Sensing
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <Link to="/">
                
                    <BsGrid1X2Fill className='icon'/> Dashboard
                
                </Link>
               
            </li>
            <li className='sidebar-list-item'>
                <Link to="/Maps">
                
                    <BsFillArchiveFill className='icon'/> Maps
                
                </Link>
                
            </li>
            <li className='sidebar-list-item'>
                <Link to="/Precautions">
                
                    <BsFillGrid3X3GapFill className='icon'/> Precautions
                
                </Link>
            </li>

            <li className='sidebar-list-item' >
            <Link to="/About">
            
                    <BsPeopleFill className='icon'/> About
                
            </Link>
               
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar