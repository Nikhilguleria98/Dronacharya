import React from "react";

const TESTIMONIALS = [
  {
    id: 1,
    name: "ABINAV",
    role: "Manager – Hyundai, Delhi",
    batch: "BBA, 2009-12",
    text: "From BBA, one of my friends got placed for Rs. 4.5 lacs pa package. For BBA, the average salary is Rs 2-4 lacs pa annually. The infrastructure is OK. It is very good. Projector-based classes. Canteen facility is there.",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&q=80",
  },
  {
    id: 2,
    name: "MAYANK",
    role: "Manager – Hyundai, Delhi",
    batch: "BBA, 2009-12",
    text: "From BBA, one of my friends got placed for Rs. 4.5 lacs pa package. For BBA, the average salary is Rs 2-4 lacs pa annually. The infrastructure is OK. It is very good. Projector-based classes. Canteen facility is there.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    id: 3,
    name: "MAYANK",
    role: "Manager – Hyundai, Delhi",
    batch: "BBA, 2009-12",
    text: "From BBA, one of my friends got placed for Rs. 4.5 lacs pa package. For BBA, the average salary is Rs 2-4 lacs pa annually. The infrastructure is OK. It is very good. Projector-based classes. Canteen facility is there.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  },
  {
    id: 4,
    name: "MAYANK",
    role: "Manager – Hyundai, Delhi",
    batch: "BBA, 2009-12",
    text: "From BBA, one of my friends got placed for Rs. 4.5 lacs pa package. For BBA, the average salary is Rs 2-4 lacs pa annually. The infrastructure is OK. It is very good. Projector-based classes. Canteen facility is there.",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
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
    <div className="flip-card h-[320px] w-full cursor-pointer">
      <div className="flip-card-inner rounded-xl shadow-sm">
        
        {/* Front Side: Photo with name overlay */}
        <div className="flip-card-front shadow-md">
          <img
            src={avatar}
            alt={name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent flex flex-col justify-end p-4">
            <p className="text-white font-bold text-sm">{name}</p>
            <p className="text-gray-300 text-[11px]">{role}</p>
            <p className="text-orange-400 text-xs font-bold mt-1">{batch}</p>
          </div>
        </div>

        {/* Back Side: Testimonial sentences (light background) */}
        <div className="flip-card-back bg-[#f0f4ff] text-slate-800 p-5 flex flex-col justify-between shadow-md border border-blue-100">
          <QuoteIcon />
          <p className="text-xs text-slate-600 leading-relaxed overflow-y-auto max-h-[160px] custom-scrollbar">
            {text}
          </p>
          <div className="border-t border-blue-200/50 pt-3 flex items-center gap-2 mt-auto">
            <img
              src={avatar}
              alt={name}
              className="w-8 h-8 rounded-full object-cover border border-blue-100"
            />
            <div>
              <p className="text-xs font-bold uppercase text-[#e87c2a]">{name}</p>
              <p className="text-[10px] text-slate-500">{role}</p>
            </div>
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
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.id} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
