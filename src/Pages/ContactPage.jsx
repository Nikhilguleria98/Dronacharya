import React from "react";
import CollegeNavbar from "../Comp/Globalcomp/Navbar";
import MapSection from "../Comp/Localcomp/ContactusComp/map";
import GetInTouch from "../Comp/Localcomp/ContactusComp/get-in-touch";
import Testimonials from "../Comp/Localcomp/ContactusComp/testimonials";
import Downloads from "../Comp/Localcomp/ContactusComp/downloads";
import Footer from "../Comp/Globalcomp/Footer";

const ContactPage = () => {
  return (
    <>

      {/* Section 1: Google Map */}
      <MapSection />

      {/* Section 2: Get In Touch Form */}
      <GetInTouch />

      {/* Section 3: Testimonials */}
      <Testimonials />

      {/* Section 4: Downloads */}
      <Downloads />
</>
  );
};

export default ContactPage;
