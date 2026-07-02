import React from "react";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";

const DirectorCard = ({ director }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="w-full max-w-[322px] bg-white rounded-3xl p-4 flex flex-col gap-8 mx-auto border border-neutral-100/80 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(1,35,103,0.08)] transition-shadow duration-500 ease-out group cursor-pointer"
    >
      {/* Image Container */}
      <div className="w-full max-w-[290px] aspect-[58/57] mx-auto rounded-[12px] overflow-hidden bg-neutral-50 relative flex items-center justify-center">
        <img
          src={director.image}
          alt={director.name}
          className="w-full h-full object-contain transition-transform duration-700 ease-[0.16,1,0.3,1] group-hover:scale-102"
        />
        {/* Subtle executive gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#012367]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="w-full max-w-[290px] flex flex-col gap-1 mx-auto">
        <div className="relative overflow-hidden">
          <h3 className="font-['Nunito'] font-semibold text-[20px] sm:text-[22px] lg:text-[24px] text-[#012367] leading-tight transition-colors duration-300 group-hover:text-[#D4600A]">
            {director.position}
          </h3>
        </div>

        <h4 className="font-['Nunito'] font-semibold text-[18px] sm:text-[19px] lg:text-[20px] text-[#2A363B] leading-tight mt-1">
          {director.name}
        </h4>

        <div className="flex items-center gap-2 mt-2">
          <div className="p-0.5">
            <Phone className="w-4 h-4 text-[#757A79] group-hover:text-[#D4600A] group-hover:animate-bounce transition-colors duration-300" style={{ animationDuration: '1s' }} />
          </div>

          <a
            href={`tel:${director.phone}`}
            className="font-['Montserrat'] font-normal text-[15px] sm:text-[16px] leading-6 text-[#757A79] hover:text-[#D4600A] transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#D4600A] hover:after:w-full after:transition-all after:duration-300"
          >
            {director.phone}
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default DirectorCard;