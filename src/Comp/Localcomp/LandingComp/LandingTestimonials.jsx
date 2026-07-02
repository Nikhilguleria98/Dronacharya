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
    /* GROUP container with perspective to create the 3D space */
    <div className="group h-[320px] w-full cursor-pointer [perspective:1000px]">
      
      {/* INNER container that handles the rotation */}
      <div className="relative h-full w-full rounded-xl shadow-md transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        
        {/* FRONT SIDE (Image & Name Overlay) */}
        <div className="absolute inset-0 h-full w-full rounded-xl overflow-hidden [backface-visibility:hidden]">
          <img
            src={avatar}
            alt={name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent flex flex-col justify-end p-5">
            <p className="text-white font-bold text-base">{name}</p>
            <p className="text-gray-300 text-xs mt-1">{role}</p>
            <p className="text-[#E86A28] text-sm font-bold mt-1.5">{batch}</p>
          </div>
        </div>

        {/* BACK SIDE (Quote & Details) */}
        {/* rotateY(180deg) makes it face backwards initially so it reveals when hovered */}
        <div className="absolute inset-0 h-full w-full rounded-xl overflow-hidden bg-[#f0f4ff] border border-blue-100 p-5 flex flex-col justify-between [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <QuoteIcon />
          
          <p className="text-sm text-slate-600 leading-relaxed overflow-y-auto max-h-[160px] custom-scrollbar pr-2 my-2">
            {text}
          </p>
          
          <div className="border-t border-blue-200/60 pt-4 flex items-center gap-3 mt-auto">
            <img
              src={avatar}
              alt={name}
              className="w-10 h-10 rounded-full object-cover border border-blue-200 shadow-sm"
            />
            <div>
              <p className="text-xs font-bold uppercase text-[#E86A28] leading-tight">{name}</p>
              <p className="text-[10px] text-slate-500 mt-0.5">{role}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

const LandingTestimonials = () => {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[#0B1E4A] text-4xl sm:text-5xl font-bold text-center mb-12 sm:mb-16">
          Testimonials
        </h2>

        {/* CSS Grid automatically handles responsiveness: 1 column mobile, 2 tablet, 4 desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.id} {...t} />
          ))}
        </div>
      </div>

      {/* Embedded CSS for a clean scrollbar on the back of the card */}
      <style dangerouslySetInnerHTML={{ __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}} />
    </section>
  );
};

// Fixed export mismatch
export default LandingTestimonials;