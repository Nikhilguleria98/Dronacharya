import React, { useState } from "react";

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
          <svg
            className="w-7 h-7 text-green-600"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-bold text-gray-800 mb-1">Message Sent!</h3>
        <p className="text-sm text-gray-500 mb-4">We'll get back to you shortly.</p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm({ name: "", email: "", subject: "", contact: "", message: "" });
          }}
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

const GetInTouch = () => {
  return (
    <section className="bg-[#f0f4ff] py-12 px-4 sm:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left: heading + form */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
            Get in touch <span className="text-[#e87c2a]">with us</span>
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
  );
};

export default GetInTouch;
