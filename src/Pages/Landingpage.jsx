import React from 'react'
import CollegeNavbar from '../Comp/Globalcomp/Navbar'
import Hero from '../Comp/Localcomp/LandingComp/Hero.jsx'
import AdmissionCards from '../Comp/Localcomp/LandingComp/Admissioncards.jsx'
import DifferentiationSection from '../Comp/Localcomp/LandingComp/DifferentiationSection.jsx'
import AboutSection from '../Comp/Localcomp/LandingComp/AboutSection.jsx'
import NewsAndEvents from '../Comp/Localcomp/LandingComp/NewsAndEvents.jsx'
import LandingTestimonials from '../Comp/Localcomp/LandingComp/LandingTestimonials.jsx'
import LandingDownloads from '../Comp/Localcomp/LandingComp/LandingDownloads.jsx'

const Landingpage = () => {
  return (
    <div className='min-h-screen w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800'>
      <main>
        <Hero />
        <AdmissionCards />
        <DifferentiationSection/>
        <AboutSection/>
        <NewsAndEvents />
        <LandingTestimonials />
        <LandingDownloads />
      </main>
    </div>
  )
}


export default Landingpage
