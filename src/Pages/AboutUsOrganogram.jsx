import React from 'react'
import OrganogramHero from '../Comp/Localcomp/about-us-organogram/organogramHero'
import OrganogramTestimonials from '../Comp/Localcomp/about-us-organogram/organogramTestimonials'
import OrganogramDownloads from '../Comp/Localcomp/about-us-organogram/organogramDownloads'
import OrganizationChart from '../Comp/Localcomp/about-us-organogram/organogramFlowChart'

const AboutUsOrganogram = () => {
  return (
    <div>
      <OrganogramHero />
      <OrganizationChart />
      <OrganogramTestimonials />
      <OrganogramDownloads />
    </div>
  )
}

export default AboutUsOrganogram
