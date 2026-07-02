import React from "react";
import QuickLinks from "./FooterComp/quick-links";
import ExternalLinks from "./FooterComp/external-links";
import ContactInfo from "./FooterComp/contact-us";
import Copyright from "./FooterComp/copyright";

const Footer = () => {
  return (
    <footer className="bg-slate-50 py-10 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* One big container card with navy border wrapping columns and copyright */}
        <div className="bg-white border-2 border-[#0d1b4c] rounded-3xl p-8 md:p-12 shadow-sm flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <QuickLinks />
            <ExternalLinks />
            <ContactInfo />
          </div>

          <Copyright />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
