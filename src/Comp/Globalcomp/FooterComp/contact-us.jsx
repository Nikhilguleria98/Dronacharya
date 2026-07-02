import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="flex flex-col">
      <h3 className="text-xl font-bold text-gray-800 mb-6">
        Contact Us
      </h3>
      <ul className="space-y-5 mb-6">
        <li className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0d1b4c] text-white">
            <MapPin className="w-5 h-5" />
          </div>
          <span className="text-sm text-gray-500 leading-relaxed pt-1">
            Dronacharya PG College of Education<br />
            V.P.O Rait, Tehsil Shahpur, District Kangra,<br />
            Himachal Pradesh, Pin-176208
          </span>
        </li>
        <li className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0d1b4c] text-white">
            <Phone className="w-5 h-5" />
          </div>
          <span className="text-sm text-gray-500 leading-relaxed pt-1">
            +91 94180 39736 | +91 94185 63328 | +91 94186 76294 |<br />
            +91 9816633651 (BCA) | +91 7018603452 (BBA)
          </span>
        </li>
        <li className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#0d1b4c] text-white">
            <Mail className="w-5 h-5" />
          </div>
          <a
            href="mailto:dronacharyahp@gmail.com"
            className="text-sm text-gray-500 hover:text-orange-500 transition-colors pt-3 break-all"
          >
            dronacharyahp@gmail.com | www.dcedu.in
          </a>
        </li>
      </ul>

      {/* Follow Us */}
      <div>
        <h4 className="text-xl font-bold text-gray-800 mb-4">Follow Us</h4>
        <div className="flex items-center gap-3">
          {/* Facebook */}
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-[#0d1b4c] text-white flex items-center justify-center hover:bg-orange-500 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>
          {/* YouTube */}
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-[#0d1b4c] text-white flex items-center justify-center hover:bg-orange-500 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.52 3.5 12 3.5 12 3.5s-7.52 0-9.388.555a3.002 3.002 0 0 0-2.11 2.108C0 8.03 0 12 0 12s0 3.97.502 5.837a3.003 3.003 0 0 0 2.11 2.108C4.48 20.5 12 20.5 12 20.5s7.52 0 9.388-.555a3.002 3.002 0 0 0 2.11-2.108C24 15.97 24 12 24 12s0-3.97-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
          {/* Instagram */}
          <a
            href="#"
            className="w-10 h-10 rounded-full bg-[#0d1b4c] text-white flex items-center justify-center hover:bg-orange-500 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
