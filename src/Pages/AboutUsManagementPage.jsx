import ManagementHero from "../Comp/Localcomp/about-us-management/managementHero";
import DirectorsSection from "../Comp/Localcomp/about-us-management/DirectorSection";
import MessageSection from "../Comp/Localcomp/about-us-management/MessageSection";
import ManagementDownloads from "../Comp/Localcomp/about-us-management/managementDownloads";
import ManagementTestimonials from "../Comp/Localcomp/about-us-management/managementTestimonials";


const AboutUsManagement = () => {
  return (
    <div>
      <ManagementHero />
      <DirectorsSection />
      <MessageSection />
      <ManagementTestimonials />
      <ManagementDownloads />
    </div>
    
  );
};

export default AboutUsManagement;