import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landingpage from './Pages/Landingpage'
import ContactPage from './Pages/ContactPage'
import AboutUs from './Pages/AboutUs'
import VisionMission from './Comp/Localcomp/about-us/vision_mission'
import AboutUsCollege from './Comp/Localcomp/about-us/college'
import CollegeNavbar from './Comp/Globalcomp/Navbar'
import ObjFeat from './Comp/Localcomp/about-us/ObjFeat'
const App = () => {
  return (
    <BrowserRouter>
    <CollegeNavbar />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path='/about-us/college' element={<AboutUsCollege />} />
        <Route path='/about-us/vission-mission' element={<VisionMission />} />
        <Route path='/about-us/obj-feat' element={<ObjFeat />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App
