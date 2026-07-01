import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import classroomBg from '../../assets/classroom.png';

// Centralized course data as per the screenshot
const courseData = [
    {
        id: 'bba',
        title: 'Bachelor Of Business Administration',
        href: '/admissions/bba'
    },
    {
        id: 'bed',
        title: 'Bachelor Of Education',
        href: '/admissions/bed'
    },
    {
        id: 'bca',
        title: 'Bachelor Of Computer Application',
        href: '/admissions/bca'
    }
];

// Framer motion variants for stagger-in page layout
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 80,
            damping: 15
        }
    }
};

export default function AdmissionCards() {
    return (
        <section className="w-full min-h-[100dvh] flex flex-col justify-center bg-white py-16 sm:py-24 font-sans overflow-hidden">
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header Section matching the screenshot */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 mb-12 sm:mb-16"
                >
                    {/* Left Column: Heading */}
                    <div className="flex flex-col">
                        <h2 className="text-[#0B1E4A] font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-none uppercase">
                            Explore our unique
                        </h2>
                        <span className="text-[#E86A28] font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-none uppercase mt-2">
                            course offerings
                        </span>
                    </div>

                    {/* Right Column: Tagline & Button */}
                    <div className="flex flex-col items-start lg:items-end gap-4 text-left lg:text-right">
                        <p className="text-slate-400 text-xs sm:text-sm font-medium tracking-wide leading-relaxed">
                            Your Search for the Most Preferred College <br className="hidden sm:inline" /> by the students ends here
                        </p>
                        <motion.a
                            href="/courses"
                            whileTap={{ scale: 0.96 }}
                            className="bg-[#0B1E4A] hover:bg-[#09183b] text-white font-bold text-sm px-7 py-3 rounded-full shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.04] transform-gpu"
                        >
                            View All Courses
                        </motion.a>
                    </div>
                </motion.div>

                {/* Courses Cards Grid - Added md:grid-cols-2 lg:grid-cols-3 for tablet responsiveness */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: '-50px' }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                >
                    {courseData.map((course) => (
                        /* PERFORMANCE FIX: Replaced framer-motion JS hover with Tailwind CSS hover & added transform-gpu */
                        <motion.a
                            key={course.id}
                            href={course.href}
                            variants={itemVariants}
                            className="group relative block w-full h-[320px] sm:h-[360px] rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-slate-100 bg-[#0B1E4A] transform-gpu"
                        >
                            {/* Zooming Background Image - Added will-change-transform and loading="lazy" */}
                            <img
                                src={classroomBg}
                                alt={course.title}
                                loading="lazy"
                                className="absolute inset-0 w-full h-full object-cover object-center z-0 transition-transform duration-700 ease-out group-hover:scale-110 will-change-transform"
                            />

                            {/* Deep Blue/Navy Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E4A] via-[#0B1E4A]/60 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-90" />

                            {/* Premium sweep light/shimmer effect - Added will-change-transform */}
                            <div className="absolute inset-0 -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out bg-gradient-to-r from-transparent via-white/15 to-transparent pointer-events-none z-20 will-change-transform" />

                            {/* Hover Neon Accent border line */}
                            <div className="absolute inset-x-0 bottom-0 h-1.5 bg-[#E86A28] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center z-30" />

                            {/* Card text content */}
                            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 z-30 flex flex-col items-center justify-end text-center h-1/2">
                                <h3 className="text-white font-bold text-lg sm:text-xl lg:text-2xl tracking-wide leading-snug group-hover:text-[#E86A28] transition-colors duration-300">
                                    {course.title}
                                </h3>
                                
                                {/* Micro-animation reveal text */}
                                <div className="h-0 group-hover:h-6 opacity-0 group-hover:opacity-100 transition-all duration-300 overflow-hidden mt-3">
                                    <span className="text-xs font-semibold text-white/90 uppercase tracking-widest flex items-center gap-1.5 justify-center">
                                        Learn More <ArrowRight size={14} className="animate-bounce-x" />
                                    </span>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}