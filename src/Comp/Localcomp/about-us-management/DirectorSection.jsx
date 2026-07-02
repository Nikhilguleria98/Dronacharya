import React from "react";
import DirectorCard from "./DirectorCard";
import { directorsData } from "./Directors";

const DirectorsSection = () => {
  return (
    <section className="w-full max-w-[1440px] min-h-[845.65px] mx-auto bg-[#EDF3FF] px-5 sm:px-8 lg:px-[60px] py-12 sm:py-16 lg:py-[100px] flex flex-col gap-[10px]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center">
          <h2 className="font-['Nunito'] text-3xl sm:text-4xl lg:text-[52px] font-bold text-[#012367] leading-tight lg:leading-15">
            Meet Our <span className="text-[#D4600A]">Directors</span>
          </h2>

          <p className="mt-5 max-w-3xl mx-auto text-gray-600 text-base sm:text-lg leading-7">
            Our directors bring years of experience, leadership, and vision to
            the organization. Their dedication and commitment continue to guide
            our institution toward excellence and growth.
          </p>
        </div>
      </div>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 justify-items-center">
  {directorsData.map((director) => (
    <DirectorCard
      key={director.id}
      director={director}
    />
  ))}
</div>
    </section>
  );
};

export default DirectorsSection;