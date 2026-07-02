import React from 'react';
import AboutUsCollege from '../Comp/Localcomp/about-us/college';
import VisionMission from '../Comp/Localcomp/about-us/vision_mission';
import ObjFeat from '../Comp/Localcomp/about-us/ObjFeat';
import Downloads from '../Comp/Localcomp/about-us/Downloads';

const AboutUs = () => {
  return (
    <div className="w-full flex flex-col">
      <AboutUsCollege />
      <VisionMission />
      <ObjFeat />
      <Downloads />
    </div>
  );
};

export default AboutUs;