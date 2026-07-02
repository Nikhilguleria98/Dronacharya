import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landingpage from './Pages/Landingpage'
import ContactPage from './Pages/ContactPage'
import AboutUs from './Pages/AboutUsPage'
import CollegeNavbar from './Comp/Globalcomp/Navbar'
import BachelorsofEducation from './Pages/courses/BachelorsofEducation'
import BachelorsOfBuisnessAdministration from "./Pages/courses/BachelorsOfBuisnessAdministration";
import BachelorsOfCommerce from "./Pages/courses/BachelorsOfCommerce";
import Bca from "./Pages/courses/Bca";
import MastersOfEducation from "./Pages/courses/MastersOfEducation";
import Footer from './Comp/Globalcomp/Footer'
import AboutUsManagement from './Pages/AboutUsManagementPage'
import AboutUsOrganogram from './Pages/AboutUsOrganogram'
import MandatoryDisclosure from './Pages/MandatoryDisclosure'
import MedStaff from './Pages/staff/MedStaff'
import BedStaff from './Pages/staff/BedStaff'
import BcomStaff from './Pages/staff/BcomStaff'
import BcaStaff from './Pages/staff/BcaStaff'
import BbaStaff from './Pages/staff/BbaStaff'
import AdministrativeStaff from './Pages/staff/AdministrativeStaff'

const App = () => {
  return (
    <BrowserRouter>
      <CollegeNavbar />
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/contact-us" element={<ContactPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/about-us-management" element={<AboutUsManagement />} />
         <Route path="/about-us-organogram" element={<AboutUsOrganogram />} />
         <Route path='/mandatory-disclosure' element={<MandatoryDisclosure />} />
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
        
        //Staff pages
         <Route
          path="/our-staff/med"
          element={<MedStaff/>}
        />
        <Route
          path="/our-staff/bed"
          element={<BedStaff/>}
        />
        <Route
          path="/our-staff/bcom"
          element={<BcomStaff/>}
        />
        <Route
          path="/our-staff/bca"
          element={<BcaStaff/>}
        />
        <Route
          path="/our-staff/bba"
          element={<BbaStaff/>}
        />
        <Route
          path="/our-staff/Administration"
          element={<AdministrativeStaff/>}
        />

      </Routes>
      <Footer />
    </BrowserRouter>
  )
}


export default App
