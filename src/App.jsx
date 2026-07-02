import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landingpage from './Pages/Landingpage'
import ContactPage from './Pages/ContactPage'
import AboutUs from './Pages/AboutUsPage'
import VisionMission from './Comp/Localcomp/about-us/vision_mission'
import AboutUsCollege from './Comp/Localcomp/about-us/college'
import CollegeNavbar from './Comp/Globalcomp/Navbar'
import ObjFeat from './Comp/Localcomp/about-us/ObjFeat'
import Downloads from './Comp/Localcomp/about-us/Downloads'
import AboutUsManagement from './Pages/AboutUsManagementPage'
import OrganogramHero from './Comp/Localcomp/about-us-organogram/organogramHero'
const App = () => {
  return (
    <BrowserRouter>
    <CollegeNavbar />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path='/about-us/college' element={<AboutUsCollege />} />
        <Route path='/about-us/vision-mission' element={<VisionMission />} />
        <Route path='/about-us/obj-feat' element={<ObjFeat />} />
        <Route path='/about-us/downloads' element={<Downloads />}  />
        <Route path='/about-us-management' element={<AboutUsManagement />} />
        <Route path='about-us-organogram' element={<OrganogramHero />} />
      </Routes>
    </BrowserRouter>
  )
}


export default App
