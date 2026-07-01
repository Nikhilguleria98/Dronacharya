import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="flex flex-col">
      <h3 className="text-sm font-bold text-blue-900 mb-4 pb-2 border-b border-gray-100 uppercase tracking-wider">
        Contact Us
      </h3>
      <ul className="space-y-4 mb-6">
        <li className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-blue-900 shrink-0 mt-0.5" />
          <span className="text-xs text-gray-500 leading-relaxed">
            Dronacharya PG College of Education<br />
            V.P.O Rait, Tehsil Shahpur, District Kangra,<br />
            Himachal Pradesh, Pin-176208
          </span>
        </li>
        <li className="flex items-start gap-3">
          <Phone className="w-5 h-5 text-blue-900 shrink-0 mt-0.5" />
          <span className="text-xs text-gray-500 leading-relaxed">
            +91 94180 39736 | +91 94185 63330 | +91 94186 76294 |<br />
            +91 9816023631 (BCA) | +91 7018602402 (BBA)
          </span>
        </li>
        <li className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-blue-900 shrink-0" />
          <a
            href="mailto:dronacharyahp@gmail.com"
            className="text-xs text-gray-500 hover:text-orange-500 transition-colors break-all"
          >
            dronacharyahp@gmail.com | www.dce.edu.in
          </a>
        </li>
      </ul>

      {/* Follow Us */}
      <div>
        <p className="text-xs font-bold text-blue-900 mb-3 uppercase tracking-wider">Follow Us</p>
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center hover:bg-orange-500 transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
            </svg>
          </a>
          <a
            href="#"
            className="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center hover:bg-orange-500 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <a
            href="#"
            className="w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center hover:bg-orange-500 transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.108C19.52 3.5 12 3.5 12 3.5s-7.52 0-9.388.555a3.002 3.002 0 0 0-2.11 2.108C0 8.03 0 12 0 12s0 3.97.502 5.837a3.003 3.003 0 0 0 2.11 2.108C4.48 20.5 12 20.5 12 20.5s7.52 0 9.388-.555a3.002 3.002 0 0 0 2.11-2.108C24 15.97 24 12 24 12s0-3.97-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
