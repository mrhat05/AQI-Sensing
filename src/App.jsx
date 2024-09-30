import { useState } from 'react'
import './App.css'
import Header from './components/Header'
// import Sidebar from './components/Sidebar'
import Home from './components/Home'
import About from './components/About'
import Dashboard from './components/Dashboard'
import Precautions from './components/Precautions'
import Maps from './components/Maps'
import Charts from './components/Charts'
import { Route, Routes } from "react-router-dom";
import FormContainer from './components/FormContainer';
import Centers from './components/Centers'

import Nearby_charts from './components/Nearby_charts'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import { Outlet } from 'react-router-dom';
import AuthPage from './components/AuthPage'

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar} />
      {/* <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Precautions" element={<Precautions />} />
        <Route path="/Maps" element={<Maps />} />
        <Route path="/Charts" element={<Charts />}/>
        <Route path="nearby-charts" element={<Nearby_charts />} />
        <Route path="page1" element={<Page1 />} />
        <Route path="page2" element={<Page2 />} />
        <Route path="page3" element={<Page3 />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/signup" element={<AuthPage />} />
        <Route 
        path="/FormContainer" 
        element={<FormContainer/>} 
        />
        <Route 
        path="/Centers" 
        element={<Centers/>} 
        />
      </Routes>

      <footer className="blog-footer">
        <p>&copy; {new Date().getFullYear()} Optimals AQI Sensing Project. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App;
