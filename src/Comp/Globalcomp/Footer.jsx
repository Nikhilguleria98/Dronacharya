import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const QUICK_LINKS = [
  "Re-Admission Form (BBA/BCA)",
  "Alumni Registration",
  "Feedback B.Ed",
  "Feedback M.Ed",
  "Course Evaluation B.Ed/M.Ed",
  "Exit Feedback (B.Ed/M.Ed)",
  "Student Satisfaction Survey",
  "Course Evaluation BBA",
  "Teacher Evaluation BBA",
  "Course Evaluation BCA",
  "Teacher Evaluation BCA",
  "Teacher Evaluation B.Com.",
  "Exit Questionnaire BBA/BCA",
  "Open Webmail",
  "Download NCTE Affidavit",
  "Semester Assignments BBA/BCA",
  "Caste Based Discrimination Complaint",
];

const EXTERNAL_LINKS = [
  { label: "HP University Shimla", href: "#" },
  { label: "HPU Admission Counseling", href: "#" },
  { label: "HPU Student Portal", href: "#" },
  { label: "HPU Exam Portal", href: "#" },
  { label: "NCTE", href: "#" },
  { label: "NCTE Northern Region", href: "#" },
  { label: "NAAC", href: "#" },
  { label: "NTS", href: "#" },
  { label: "NSP 2.0 Scholarship Link", href: "#" },
  { label: "Sri Badrika Ashram Scholarship", href: "#" },
  { label: "Online Fees Payment", href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-white border-t border-blue-900/30 pt-10 pb-4 px-4 sm:px-8 lg:px-16 text-slate-700">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
          {/* Quick Links */}
          <div className="border border-blue-900/20 rounded-lg p-5 bg-slate-50/50">
            <h3 className="text-sm font-bold text-[#0d1b4c] mb-4 pb-2 border-b border-blue-900/20 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-1.5 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
              {QUICK_LINKS.map((link, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="text-xs text-slate-600 hover:text-orange-500 transition-colors block py-0.5"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* External Links */}
          <div className="border border-blue-900/20 rounded-lg p-5 bg-slate-50/50">
            <h3 className="text-sm font-bold text-[#0d1b4c] mb-4 pb-2 border-b border-blue-900/20 uppercase tracking-wider">
              External Links
            </h3>
            <ul className="space-y-1.5">
              {EXTERNAL_LINKS.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-xs text-slate-600 hover:text-orange-500 transition-colors block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="border border-blue-900/20 rounded-lg p-5 bg-slate-50/50">
            <h3 className="text-sm font-bold text-[#0d1b4c] mb-4 pb-2 border-b border-blue-900/20 uppercase tracking-wider">
              Contact Us
            </h3>
            <ul className="space-y-4 mb-6">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#0d1b4c] shrink-0 mt-0.5" />
                <span className="text-xs text-slate-600 leading-relaxed">
                  Dronacharya PG College of Education<br />
                  V.P.O Rait, Tehsil Shahpur, District Kangra,<br />
                  Himachal Pradesh, Pin-176208
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#0d1b4c] shrink-0 mt-0.5" />
                <span className="text-xs text-slate-600 leading-relaxed">
                  +91 94180 39736 | +91 94185 63330 | +91 94186 76294 |<br />
                  +91 9816023631 (BCA) | +91 7018602402 (BBA)
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#0d1b4c] shrink-0" />
                <a
                  href="mailto:dronacharyahp@gmail.com"
                  className="text-xs text-slate-600 hover:text-orange-500 transition-colors break-all"
                >
                  dronacharyahp@gmail.com | www.dce.edu.in
                </a>
              </li>
            </ul>

            {/* Follow Us */}
            <div>
              <p className="text-xs font-bold text-[#0d1b4c] mb-3 uppercase tracking-wider">Follow Us</p>
              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-[#0d1b4c] text-white flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-[#0d1b4c] text-white flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-8 h-8 rounded-full bg-[#0d1b4c] text-white flex items-center justify-center hover:bg-orange-500 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.52 3.5 12 3.5 12 3.5s-7.52 0-9.388.555a3.002 3.002 0 0 0-2.11 2.108C0 8.03 0 12 0 12s0 3.97.502 5.837a3.003 3.003 0 0 0 2.11 2.108C4.48 20.5 12 20.5 12 20.5s7.52 0 9.388-.555a3.002 3.002 0 0 0 2.11-2.108C24 15.97 24 12 24 12s0-3.97-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-blue-900/20 pt-4 text-center">
          <p className="text-[11px] text-slate-500">
            © 2026 Dronacharya PG College of Education - All rights reserved. Developed and Maintained by: SKYLINE INFOSOLUTIONS PVT. LTD.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
