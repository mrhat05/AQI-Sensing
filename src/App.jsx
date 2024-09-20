import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Home from './components/Home'
import About from './components/About'
import Dashboard from './components/Dashboard'
import Precautions from './components/Precautions'
import Maps from './components/Maps'
import { Route, Routes } from "react-router-dom";

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route 
        path="/About" 
        element={<About />} />
        <Route 
        path="/Precautions" 
        element={<Precautions />} />
        <Route 
        path="/Maps" 
        element={<Maps/>} />
        <Route 
        path="/dashboard" 
        element={<Dashboard />} 
        />
      </Routes>
    </div>
  )
}

export default App