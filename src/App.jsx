import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landingpage from './Pages/Landingpage'
import ContactPage from './Pages/ContactPage'
import AboutUs from './Pages/AboutUsPage'
import CollegeNavbar from './Comp/Globalcomp/Navbar'
import AboutUsManagement from './Pages/AboutUsManagementPage'
import OrganogramHero from './Comp/Localcomp/about-us-organogram/organogramHero'
import Footer from './Comp/Globalcomp/Footer'
const App = () => {
  return (
    <BrowserRouter>
    <CollegeNavbar />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path='/about-us-management' element={<AboutUsManagement />} />
        <Route path='about-us-organogram' element={<OrganogramHero />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}


export default App
