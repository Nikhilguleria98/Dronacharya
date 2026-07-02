import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landingpage from './Pages/Landingpage'
import ContactPage from './Pages/ContactPage'
import AboutUs from './Pages/AboutUs'
import VisionMission from './Comp/Localcomp/about-us/vision_mission'
import AboutUsCollege from './Comp/Localcomp/about-us/college'
import CollegeNavbar from './Comp/Globalcomp/Navbar'
import ObjFeat from './Comp/Localcomp/about-us/ObjFeat'
import BachelorsofEducation from './Pages/courses/BachelorsofEducation'
import BachelorsOfBuisnessAdministration from "./Pages/courses/BachelorsOfBuisnessAdministration";
import BachelorsOfCommerce from "./Pages/courses/BachelorsOfCommerce";
import Bca from "./Pages/courses/Bca";
import MastersOfEducation from "./Pages/courses/MastersOfEducation";
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
        <Route
          path="/courses/bachelors-of-business-administration"
          element={<BachelorsOfBuisnessAdministration />}
        />
        <Route
          path="/courses/bachelors-of-education"
          element={<BachelorsofEducation />}
        />

        <Route
          path="/courses/bachelors-of-commerce"
          element={<BachelorsOfCommerce />}
        />

        <Route
          path="/courses/bca"
          element={<Bca />}
        />

        <Route
          path="/courses/masters-of-education"
          element={<MastersOfEducation />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}


export default App
