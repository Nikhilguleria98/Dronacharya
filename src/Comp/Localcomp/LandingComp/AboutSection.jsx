import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSection() {
    return (
        <section className="w-full bg-[#F4F7FB] py-16 sm:py-20 lg:py-28 font-sans overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    
                    {/* Left Column: Image */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="w-full relative"
                    >
                        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-white/50">
                            {/* You can replace this src with your local asset, e.g., import studentsImg from '../../assets/students.jpg' */}
                            <img
                                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2940&auto=format&fit=crop"
                                alt="Students taking an exam in classroom"
                                className="w-full h-full object-cover object-center"
                            />
                        </div>
                    </motion.div>

                    {/* Right Column: Text Content */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
                        className="flex flex-col items-start text-left"
                    >
                        {/* Heading */}
                        <h2 className="text-[#0B1E4A] font-bold text-4xl sm:text-5xl lg:text-[3.5rem] leading-tight mb-2">
                            About Dronacharya
                        </h2>
                        <h2 className="text-[#E86A28] font-bold text-4xl sm:text-5xl lg:text-[3.5rem] leading-tight mb-6">
                            PG College
                        </h2>

                        {/* Paragraph Content */}
                        <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
                            Dronacharya PG College of Education, Rait has been established under the auspices of OCEAN Society and founded in the name of great teacher of the age, Guru Dronacharya in the year 2006. Dronacharya P.G. College of Education, Rait has made an enviable reputation for cutting-edge learning in academic and co-academic skills through its commitment to innovative and student-friendly initiatives.
                        </p>

                        {/* CTA Button */}
                        <motion.a
                            href="/about"
                            whileHover={{ scale: 1.04, backgroundColor: '#d15b1e' }}
                            whileTap={{ scale: 0.96 }}
                            className="bg-[#E86A28] text-white font-medium text-sm sm:text-base px-8 py-3.5 rounded-full shadow-md transition-colors duration-300 hover:shadow-lg inline-flex items-center justify-center"
                        >
                            Read More
                        </motion.a>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}