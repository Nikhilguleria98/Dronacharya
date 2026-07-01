import React from "react";

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

const Testimonials = () => {
  return (
    <section className="py-14 px-4 sm:px-8 lg:px-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-10">
          Testimonials
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Featured card (large left with photo) */}
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

          {/* 3 testimonial text cards */}
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.id} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
