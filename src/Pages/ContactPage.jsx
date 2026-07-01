import React, { useState } from "react";
import CollegeNavbar from "../Comp/Globalcomp/Navbar";
import { Download, MapPin, Phone, Mail } from "lucide-react";

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────

const TESTIMONIALS = [
  {
    id: 1,
    name: "Mayank",
    role: "Manager – Hyundai, Delhi",
    batch: "BBA, 2009-12",
    text: "From BBA, one of my friends got placed for Rs. 4.5 lacs pa package. For BBA, the average salary is Rs 2-4 lacs pa annually. The infrastructure is OK. It is very good. Projector-based classes. Canteen facility is there.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Mayank",
    role: "Manager – Hyundai, Delhi",
    batch: "BBA, 2009-12",
    text: "From BBA, one of my friends got placed for Rs. 4.5 lacs pa package. For BBA, the average salary is Rs 2-4 lacs pa annually. The infrastructure is OK. It is very good. Projector-based classes. Canteen facility is there.",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    id: 3,
    name: "Mayank",
    role: "Manager – Hyundai, Delhi",
    batch: "BBA, 2009-12",
    text: "From BBA, one of my friends got placed for Rs. 4.5 lacs pa package. For BBA, the average salary is Rs 2-4 lacs pa annually. The infrastructure is OK. It is very good. Projector-based classes. Canteen facility is there.",
    avatar: "https://randomuser.me/api/portraits/men/56.jpg",
  },
];

const DOWNLOADS = [
  { id: 1, title: "Prospectus 2026-2027", file: "#" },
  { id: 2, title: "Navrang Broucher 2026", file: "#" },
  { id: 3, title: "Winter Assignment 2026", file: "#" },
  { id: 4, title: "M.Ed. Workshop 2024", file: "#" },
  { id: 5, title: "Report on B.ED student Seminar 2023-2024", file: "#" },
];

const QUICK_LINKS = [
  "Re-Admission Form (BBA/BCA)",
  "Alumni Registration",
  "Feedback B.Ed",
  "Course Evaluation (I Ed./M.Ed)",
  "Exit Feedback (BBA/M.Sc)",
  "Student Satisfaction Survey",
  "Course Evaluation BBA",
  "Teacher Evaluation BBA",
  "Teacher Evaluation BCA",
  "Teacher Evaluation BCom.",
  "Exit Questionnaire BBA/BCA",
  "Open Webinar",
  "Download NCTE Affidavit",
  "Semester Assignments BBA/BCA",
  "Caste-Based Discrimination Complaint",
];

const EXTERNAL_LINKS = [
  { label: "HPU University Shimla", href: "#" },
  { label: "HPU Admission Counselling", href: "#" },
  { label: "HPU Student Portal", href: "#" },
  { label: "HPU Exam Portal", href: "#" },
  { label: "HCTC", href: "#" },
  { label: "NCTE Northern Region", href: "#" },
  { label: "NAAC", href: "#" },
  { label: "MCI", href: "#" },
  { label: "NSP D.2 Scholarship Link", href: "#" },
  { label: "Sri Bajrang Mitram Scholarship", href: "#" },
  { label: "Online Fees Payment", href: "#" },
];

// ─────────────────────────────────────────────
// COMPONENTS
// ─────────────────────────────────────────────

function QuoteIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      className="text-orange-400"
    >
      <text x="0" y="28" fontSize="36" fill="currentColor" fontFamily="Georgia, serif">
        "
      </text>
    </svg>
  );
}

function TestimonialCard({ name, role, batch, text, avatar }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 flex flex-col gap-3 shadow-sm">
      <QuoteIcon />
      <p className="text-gray-600 text-sm leading-relaxed">{text}</p>
      <div className="mt-auto pt-3 border-t border-gray-100">
        <p className="text-xs font-bold text-gray-800">{batch}</p>
        <div className="flex items-center gap-2 mt-2">
          <img
            src={avatar}
            alt={name}
            className="w-8 h-8 rounded-full object-cover border border-gray-200"
          />
          <div>
            <p className="text-xs font-bold text-[#e87c2a] uppercase tracking-wide">
              {name}
            </p>
            <p className="text-[11px] text-gray-500">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    contact: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-4">
          <svg className="w-7 h-7 text-green-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-gray-800 mb-1">Message Sent!</h3>
        <p className="text-sm text-gray-500 mb-4">We'll get back to you shortly.</p>
        <button
          onClick={() => { setSubmitted(false); setForm({ name:"",email:"",subject:"",contact:"",message:"" }); }}
          className="text-sm font-semibold text-[#0d1b4c] underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      {/* Row 1: Name + Email */}
      <div className="grid grid-cols-2 gap-3">
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded px-3 py-2 text-sm text-gray-700 outline-none focus:border-[#0d1b4c] focus:ring-1 focus:ring-[#0d1b4c] placeholder:text-gray-400"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded px-3 py-2 text-sm text-gray-700 outline-none focus:border-[#0d1b4c] focus:ring-1 focus:ring-[#0d1b4c] placeholder:text-gray-400"
        />
      </div>

      {/* Row 2: Subject + Contact */}
      <div className="grid grid-cols-2 gap-3">
        <input
          name="subject"
          type="text"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded px-3 py-2 text-sm text-gray-700 outline-none focus:border-[#0d1b4c] focus:ring-1 focus:ring-[#0d1b4c] placeholder:text-gray-400"
        />
        <input
          name="contact"
          type="tel"
          placeholder="Contact"
          value={form.contact}
          onChange={handleChange}
          className="border border-gray-300 rounded px-3 py-2 text-sm text-gray-700 outline-none focus:border-[#0d1b4c] focus:ring-1 focus:ring-[#0d1b4c] placeholder:text-gray-400"
        />
      </div>

      {/* Message */}
      <textarea
        name="message"
        placeholder="Message"
        rows={5}
        value={form.message}
        onChange={handleChange}
        required
        className="border border-gray-300 rounded px-3 py-2 text-sm text-gray-700 resize-none outline-none focus:border-[#0d1b4c] focus:ring-1 focus:ring-[#0d1b4c] placeholder:text-gray-400"
      />

      <button
        type="submit"
        className="self-start bg-[#0d1b4c] text-white text-sm font-semibold px-8 py-2.5 rounded hover:bg-blue-900 transition-colors"
      >
        Submit
      </button>
    </form>
  );
}

// ─────────────────────────────────────────────
// PAGE
// ─────────────────────────────────────────────

export default function ContactPage() {
  return (
    <div className="min-h-screen w-full bg-white font-sans">
      {/* Navbar */}
      <CollegeNavbar activePath="/contact-us" />

      {/* ── 1. MAP SECTION ── */}
      <section className="w-full h-64 sm:h-80">
        <iframe
          title="Dronacharya College Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3386.0!2d76.5450!3d32.1050!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b5a63c0000001%3A0x1234567890abcdef!2sDronacharya%20College%20of%20Education%2C%20Rait%2C%20Kangra%2C%20Himachal%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        />
      </section>

      {/* ── 2. GET IN TOUCH ── */}
      <section className="bg-[#f0f4ff] py-12 px-4 sm:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: heading + form */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
              Get in touch{" "}
              <span className="text-[#e87c2a]">with us</span>
            </h2>
            <ContactForm />
          </div>

          {/* Right: student image */}
          <div className="hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80"
              alt="Students in classroom"
              className="w-full h-72 object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* ── 3. TESTIMONIALS ── */}
      <section className="py-14 px-4 sm:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-10">
            Testimonials
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Featured card (large left) */}
            <div className="lg:col-span-1 bg-[#0d1b4c] rounded-lg overflow-hidden shadow-md relative min-h-[220px]">
              <img
                src="https://randomuser.me/api/portraits/men/75.jpg"
                alt="Abinav"
                className="w-full h-full object-cover opacity-70 absolute inset-0"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0d1b4c] to-transparent p-4">
                <p className="text-white font-bold text-sm">ABINAV</p>
                <p className="text-gray-300 text-xs">Manager – Hyundai, Delhi</p>
              </div>
            </div>

            {/* 3 testimonial cards */}
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.id} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. DOWNLOADS ── */}
      <section className="py-14 px-4 sm:px-8 lg:px-16 bg-[#f0f4ff]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-10">
            Downloads
          </h2>

          {/* First row: 4 items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {DOWNLOADS.slice(0, 4).map((item) => (
              <div
                key={item.id}
                className="border border-gray-300 rounded-lg p-4 bg-white flex flex-col gap-3"
              >
                <p className="text-sm font-semibold text-gray-800 leading-snug">
                  {item.title}
                </p>
                <a
                  href={item.file}
                  className="flex items-center justify-center gap-2 bg-[#0d1b4c] text-white text-xs font-semibold py-2 px-4 rounded hover:bg-blue-900 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download Now ↓
                </a>
              </div>
            ))}
          </div>

          {/* Second row: centered 5th item */}
          <div className="flex justify-center">
            <div className="border border-gray-300 rounded-lg p-4 bg-white flex flex-col gap-3 w-full sm:w-80">
              <p className="text-sm font-semibold text-gray-800 leading-snug text-center">
                {DOWNLOADS[4].title}
              </p>
              <a
                href={DOWNLOADS[4].file}
                className="flex items-center justify-center gap-2 bg-[#0d1b4c] text-white text-xs font-semibold py-2 px-4 rounded hover:bg-blue-900 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                Download Now ↓
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. FOOTER ── */}
      <footer className="bg-[#f0f4ff] border-t border-gray-200 pt-10 pb-4 px-4 sm:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          {/* 3-column grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-bold text-gray-800 mb-4 pb-1 border-b border-gray-300">
                Quick Links
              </h3>
              <ul className="space-y-1.5">
                {QUICK_LINKS.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-xs text-gray-600 hover:text-[#0d1b4c] hover:underline transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* External Links */}
            <div>
              <h3 className="text-sm font-bold text-gray-800 mb-4 pb-1 border-b border-gray-300">
                External Links
              </h3>
              <ul className="space-y-1.5">
                {EXTERNAL_LINKS.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-xs text-gray-600 hover:text-[#0d1b4c] hover:underline transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-sm font-bold text-gray-800 mb-4 pb-1 border-b border-gray-300">
                Contact Us
              </h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#0d1b4c] shrink-0 mt-0.5" strokeWidth={2} />
                  <span className="text-xs text-gray-600 leading-relaxed">
                    Dronacharya P.G. College of Education,<br />
                    Rait, District Kangra,<br />
                    Himachal Pradesh, Pin-176096
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#0d1b4c] shrink-0" strokeWidth={2} />
                  <span className="text-xs text-gray-600">
                    +91-94180-39736 | +91-76528-23364 |<br />
                    +91-70183-29536 (BCa) | +91-7018400236 (BBA)
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#0d1b4c] shrink-0" strokeWidth={2} />
                  <a
                    href="mailto:dronocharyahp@gmail.com"
                    className="text-xs text-gray-600 hover:text-[#0d1b4c]"
                  >
                    dronocharyahp@gmail.com | www.dcolkm
                  </a>
                </li>
              </ul>

              {/* Follow Us */}
              <div>
                <p className="text-sm font-bold text-gray-800 mb-3">Follow Us</p>
                <div className="flex items-center gap-3">
                  {/* Facebook */}
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-8 h-8 rounded-full bg-[#1877f2] flex items-center justify-center hover:opacity-80 transition-opacity"
                  >
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                  {/* Instagram */}
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-[#f58529] via-[#dd2a7b] to-[#515bd4] flex items-center justify-center hover:opacity-80 transition-opacity"
                  >
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>
                  {/* YouTube */}
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="w-8 h-8 rounded-full bg-[#ff0000] flex items-center justify-center hover:opacity-80 transition-opacity"
                  >
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom copyright */}
          <div className="border-t border-gray-300 pt-4 text-center">
            <p className="text-[11px] text-gray-500">
              © 2026 Dronacharya P.G. College of Education – all rights reserved. Developed and Maintained by SKYL BASE INFO SOLUTIONS PVT. LTD.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
