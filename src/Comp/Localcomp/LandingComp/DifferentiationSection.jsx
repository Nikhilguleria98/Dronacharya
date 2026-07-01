import React from 'react';
import { motion } from 'framer-motion';

const differentiationData = [
    {
        id: '01.',
        title: 'Built for Excellence',
        desc: 'State of the art infrastructural Amenities',
    },
    {
        id: '02.',
        title: 'Beyond Classroom Learning',
        desc: 'A Comprehensive learning experience.',
    },
    {
        id: '03.',
        title: 'Growing with Nature',
        desc: 'Green Campus Initiatives By Dronacharya College of Education, Rait (HP)',
    },
    {
        id: '04.',
        title: 'Celebrating Talent & Culture',
        desc: 'Fostering a vibrant community and showcasing diverse skills.',
    },
];

export default function DifferentiationSection() {
    return (
        <section className="w-full bg-[#1A3673] py-16 sm:py-24 font-sans overflow-hidden relative">
            
            <div className="absolute inset-0 w-full h-full opacity-30">
                <img
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2940&auto=format&fit=crop"
                    alt="Student smiling in classroom"
                    className="w-full h-full object-cover object-center mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1A3673] via-[#1A3673]/80 to-[#1A3673]/40"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row h-full min-h-[500px] lg:min-h-[600px] items-center gap-12 lg:gap-8">
                    
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="w-full lg:w-1/2 flex flex-col pt-8 lg:pt-0 text-center lg:text-left"
                    >
                        <h2 className="text-white font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-none uppercase">
                            What Makes us
                        </h2>
                        <span className="text-[#E86A28] font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-none uppercase mt-2">
                            different from others?
                        </span>
                        <p className="text-slate-300 text-sm sm:text-base font-medium tracking-wide leading-relaxed mt-6 max-w-lg mx-auto lg:mx-0">
                            Explore your potential with us for a bright future. We provide a comprehensive learning experience that goes beyond the traditional classroom.
                        </p>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="w-full lg:w-1/2 h-[450px] sm:h-[550px] relative flex justify-center lg:justify-end"
                    >
                        <div className="w-full max-w-md h-full py-8 overflow-hidden mask-vertical-fade">
                            
                            <div className="flex flex-col gap-5 sm:gap-6 animate-marquee-vertical hover:pause py-4">
                                {[...differentiationData, ...differentiationData].map((card, index) => (
                                    <div
                                        key={index}
                                        className="group bg-white rounded-2xl p-6 sm:p-8 shadow-xl flex flex-col gap-2 transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl border-l-4 border-transparent hover:border-[#E86A28]"
                                    >
                                        <span className="text-2xl sm:text-3xl font-black text-[#E86A28] opacity-80 group-hover:opacity-100 transition-opacity">
                                            {card.id}
                                        </span>
                                        <h3 className="text-lg sm:text-xl font-bold text-[#1A3673] mt-1 leading-snug">
                                            {card.title}
                                        </h3>
                                        <p className="text-sm text-slate-500 leading-relaxed font-medium mt-1">
                                            {card.desc}
                                        </p>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </motion.div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{ __html: `
                .mask-vertical-fade {
                    mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
                    -webkit-mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
                }

                .animate-marquee-vertical {
                    animation: scroll-y 22s linear infinite;
                }

                @keyframes scroll-y {
                    0% { transform: translateY(0%); }
                    100% { transform: translateY(-50%); }
                }

                .hover\\:pause:hover {
                    animation-play-state: paused;
                }
            `}} />
        </section>
    );
}