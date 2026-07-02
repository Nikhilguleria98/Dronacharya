import React from "react";
import QuickLinks from "./FooterComp/quick-links";
import ExternalLinks from "./FooterComp/external-links";
import ContactInfo from "./FooterComp/contact-us";
import Copyright from "./FooterComp/copyright";

const Footer = () => {
  return (
    <footer className="bg-[#f8faff] border-t border-gray-200 pt-10 pb-4 px-4 sm:px-8 lg:px-16 text-slate-700">
      <div className="max-w-7xl mx-auto">
        {/* One big container wrapping the columns */}
        <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <QuickLinks />
          <ExternalLinks />
          <ContactInfo />
        </div>

        {/* Copyright at the bottom */}
        <Copyright />
      </div>
    </footer>
  );
};

export default Footer;
