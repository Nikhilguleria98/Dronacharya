import React from 'react';
import { Users, Monitor, TrendingUp, BookOpen, GraduationCap, Globe } from 'lucide-react';
import heroBg from '../../assets/hero-bg.png';

export default function AdmissionHero() {
    return (
        <section className="relative w-full bg-white overflow-hidden font-sans min-h-[100svh] flex flex-col justify-between">
            {/* Custom SaaS Animation Keyframes */}
            <style dangerouslySetInnerHTML={{__html: `
                @keyframes float {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-12px) rotate(1.5deg); }
                }
                @keyframes float-slow {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-8px) rotate(-1deg); }
                }
                @keyframes pulse-ring {
                    0% { box-shadow: 0 0 0 0 rgba(11, 30, 74, 0.4); }
                    100% { box-shadow: 0 0 0 20px rgba(11, 30, 74, 0); }
                }
                @keyframes glow-pulse {
                    0%, 100% { box-shadow: 0 0 15px rgba(232, 106, 40, 0.2); }
                    50% { box-shadow: 0 0 35px rgba(232, 106, 40, 0.6); }
                }
                @keyframes fade-in-up {
                    0% { opacity: 0; transform: translateY(40px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                @keyframes fade-in-right {
                    0% { opacity: 0; transform: translateX(40px); }
                    100% { opacity: 1; transform: translateX(0); }
                }
                @keyframes fade-in-left {
                    0% { opacity: 0; transform: translateX(-40px); }
                    100% { opacity: 1; transform: translateX(0); }
                }
                @keyframes shimmer {
                    0% { transform: translateX(-150%) skewX(-15deg); }
                    100% { transform: translateX(200%) skewX(-15deg); }
                }
                @keyframes scale-pulse {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.15); }
                }
                @keyframes orbit {
                    0% { transform: rotate(0deg) translateX(30px) rotate(0deg); }
                    100% { transform: rotate(360deg) translateX(30px) rotate(-360deg); }
                }
                @keyframes orbit-reverse {
                    0% { transform: rotate(360deg) translateX(45px) rotate(-360deg); }
                    100% { transform: rotate(0deg) translateX(45px) rotate(0deg); }
                }
                @keyframes image-pan {
                    0%, 100% { transform: scale(1.05) translate(0, 0); }
                    50% { transform: scale(1.08) translate(-1%, 1%); }
                }

                /* Utility Classes mapped to cubic-bezier for Apple-like motion */
                .anim-float { animation: float 5s ease-in-out infinite; }
                .anim-float-slow { animation: float-slow 7s ease-in-out infinite; }
                .anim-pulse-ring { animation: pulse-ring 2s cubic-bezier(0.16,1,0.3,1) infinite; }
                .anim-glow { animation: glow-pulse 4s ease-in-out infinite; }
                .anim-shimmer { animation: shimmer 3s infinite; }
                .anim-scale-pulse { animation: scale-pulse 3s ease-in-out infinite; }
                .anim-orbit { animation: orbit 15s linear infinite; }
                .anim-orbit-reverse { animation: orbit-reverse 20s linear infinite; }
                .anim-image-pan { animation: image-pan 20s ease-in-out infinite; }

                /* Entrance Staggering Utilities */
                .entrance-up { animation: fade-in-up 1s cubic-bezier(0.16,1,0.3,1) both; }
                .entrance-right { animation: fade-in-right 1s cubic-bezier(0.16,1,0.3,1) both; }
                .entrance-left { animation: fade-in-left 1.2s cubic-bezier(0.16,1,0.3,1) both; }
                
                .delay-100 { animation-delay: 0.1s; }
                .delay-200 { animation-delay: 0.2s; }
                .delay-300 { animation-delay: 0.3s; }
                .delay-400 { animation-delay: 0.4s; }
                .delay-500 { animation-delay: 0.5s; }
                .delay-600 { animation-delay: 0.6s; }
                .delay-700 { animation-delay: 0.7s; }
                .delay-800 { animation-delay: 0.8s; }
            `}} />

            {/* Orbiting Particles (Background Motion) */}
            <div className="absolute top-[30%] left-[10%] w-3 h-3 bg-[#E86A28] rounded-full opacity-40 anim-orbit z-10 pointer-events-none blur-[1px]"></div>
            <div className="absolute top-[60%] left-[40%] w-2 h-2 bg-[#0B1E4A] rounded-full opacity-30 anim-orbit-reverse z-10 pointer-events-none"></div>

            {/* 1. Background Building Image */}
            <div className="absolute top-0 right-0 w-full lg:w-[55%] h-full z-0 entrance-left delay-200 overflow-hidden">
                {/* Soft gradient mask */}
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
                <img
                    src={heroBg}
                    alt="Campus Building"
                    className="w-full h-full object-cover object-right anim-image-pan origin-center"
                />
            </div>

            {/* 2. Top-Left Blue Corner Decor */}
            <div className="absolute top-0 left-0 z-10 pointer-events-none anim-float">
                <div className="absolute top-0 left-0 w-0 h-0 border-t-[80px] lg:border-t-[140px] border-r-[80px] lg:border-r-[140px] border-t-[#3b82f6] border-r-transparent"></div>
                <div className="absolute top-0 left-0 w-0 h-0 border-t-[50px] lg:border-t-[90px] border-r-[50px] lg:border-r-[90px] border-t-[#0B1E4A] border-r-transparent"></div>
            </div>

            {/* 3. Main Text Content */}
            <div className="relative z-20 flex-grow px-4 sm:px-12 lg:px-20 pt-20 lg:pt-24 flex flex-col items-start w-full max-w-7xl mx-auto">

                {/* Headlines */}
                <div className="group cursor-default entrance-up delay-100">
                    <h1 className="text-[#0B1E4A] font-black text-6xl sm:text-7xl lg:text-[110px] leading-[0.85] tracking-tighter uppercase transition-transform duration-700 cubic-bezier(0.16,1,0.3,1) hover:translate-x-2">
                        Admission
                    </h1>
                    <div className="flex items-center gap-3 sm:gap-5 mt-2 lg:mt-3">
                        <span className="text-[#E86A28] font-black text-5xl sm:text-7xl lg:text-[100px] leading-[0.85] tracking-tighter uppercase transition-transform duration-700 cubic-bezier(0.16,1,0.3,1) hover:translate-x-2">
                            Open
                        </span>
                        <div className="bg-[#0B1E4A] text-white px-4 py-1 sm:px-6 sm:py-2 rounded-lg text-3xl sm:text-4xl lg:text-5xl font-bold leading-none shadow-xl transform -skew-x-12 transition-transform duration-500 hover:scale-110 anim-pulse-ring relative">
                            <span className="inline-block transform skew-x-12">2026-27</span>
                        </div>
                    </div>
                </div>

                {/* Tagline */}
                <p className="entrance-up delay-200 text-[#0B1E4A] font-bold text-xs sm:text-sm lg:text-[15px] tracking-[0.2em] sm:tracking-[0.25em] mt-6 lg:mt-8 ml-1 lg:ml-2 transition-all duration-500 hover:text-[#E86A28] hover:tracking-[0.3em]">
                    EMPOWER <span className="text-[#E86A28] mx-1 sm:mx-2">|</span> TRANSFORM <span className="text-[#E86A28] mx-1 sm:mx-2">|</span> INSPIRE
                </p>

                {/* Ribbon Area */}
                <div className="relative mt-6 lg:mt-8 ml-1 lg:ml-2 group entrance-right delay-300 anim-float-slow">
                    {/* Yellow Triangle Tails underneath */}
                    <div className="absolute -left-3 lg:-left-4 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[14px] lg:border-y-[18px] border-y-transparent border-r-[12px] lg:border-r-[16px] border-r-[#F7B916] transition-all duration-500 cubic-bezier(0.16,1,0.3,1) group-hover:-left-6"></div>
                    <div className="absolute -right-3 lg:-right-4 top-1/2 -translate-y-1/2 w-0 h-0 border-y-[14px] lg:border-y-[18px] border-y-transparent border-l-[12px] lg:border-l-[16px] border-l-[#F7B916] transition-all duration-500 cubic-bezier(0.16,1,0.3,1) group-hover:-right-6"></div>

                    {/* Main Ribbon Body */}
                    <div className="bg-[#0B1E4A] text-white px-6 sm:px-10 py-2 lg:py-2.5 relative z-10 font-bold tracking-widest text-xs sm:text-sm lg:text-lg shadow-lg border-y-[2px] lg:border-y-[3px] border-[#F7B916]">
                        BUILD YOUR FUTURE WITH US
                    </div>
                </div>

                {/* UG Programs Divider */}
                <div className="flex items-center gap-3 lg:gap-4 mt-8 lg:mt-12 mb-6 w-full max-w-lg entrance-up delay-400">
                    <div className="h-[2px] flex-1 bg-slate-300"></div>
                    <h2 className="text-[#0B1E4A] font-bold text-base sm:text-lg lg:text-xl tracking-wider">UG PROGRAMS</h2>
                    <div className="h-[2px] flex-1 bg-slate-300"></div>
                </div>

                {/* Program Cards Grid (Staggered Children) */}
                <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-4 lg:gap-5 pb-12">
                    <div className="entrance-up delay-500">
                        <ProgramCard
                            title="BBA"
                            subtitle="BACHELOR OF BUSINESS ADMINISTRATION"
                            icon={<Users size={28} strokeWidth={2.5} />}
                            hexColor="#4c1d95"
                        />
                    </div>
                    <div className="entrance-up delay-600">
                        <ProgramCard
                            title="BCA"
                            subtitle="BACHELOR OF COMPUTER APPLICATIONS"
                            icon={<Monitor size={28} strokeWidth={2.5} />}
                            hexColor="#ea580c"
                        />
                    </div>
                    <div className="entrance-up delay-700">
                        <ProgramCard
                            title="B.COM"
                            subtitle="BACHELOR OF COMMERCE"
                            icon={<TrendingUp size={28} strokeWidth={2.5} />}
                            hexColor="#16a34a"
                        />
                    </div>
                </div>

            </div>

            {/* 4. Bottom Footer Bar */}
            <div className="relative z-30 w-full bg-[#0B1E4A] flex flex-col lg:flex-row shadow-[0_-10px_20px_rgba(0,0,0,0.15)] mt-auto entrance-up delay-800">

                {/* Highlight Features */}
                <div className="flex-1 grid grid-cols-2 sm:flex sm:flex-wrap justify-center sm:justify-around lg:justify-start items-center py-5 px-4 sm:px-8 lg:px-12 gap-5 lg:gap-10">
                    <FeatureItem icon={<BookOpen size={20} />} text="QUALITY EDUCATION" />
                    <FeatureItem icon={<GraduationCap size={20} />} text="EXPERIENCED FACULTY" />
                    <FeatureItem icon={<TrendingUp size={20} />} text="CAREER FOCUSED" />
                    <FeatureItem icon={<Globe size={20} />} text="HOLISTIC DEVELOPMENT" />
                </div>

                {/* CTA Button Block */}
                <div className="relative flex group cursor-pointer w-full lg:w-auto mt-2 lg:mt-0 lg:ml-auto anim-glow">

                    {/* Yellow Border Background */}
                    <div className="absolute inset-0 bg-[#F7B916] lg:[clip-path:polygon(6%_0,100%_0,100%_100%,0_100%)] z-10 hidden lg:block -ml-2 transition-transform duration-500 group-hover:scale-105"></div>

                    {/* Main Orange Container */}
                    <div className="bg-[#E86A28] h-full w-full flex items-center justify-center px-10 lg:pl-12 lg:pr-14 py-6 lg:py-0 relative z-20 lg:[clip-path:polygon(6%_0,100%_0,100%_100%,0_100%)] overflow-hidden transition-all duration-500 group-hover:bg-[#d95a1c]">
                        {/* High-end Shimmer animation */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent anim-shimmer z-0"></div>
                        
                        <h3 className="font-bold text-xl sm:text-2xl lg:text-3xl uppercase leading-tight text-center text-white relative z-30 transition-transform duration-500 cubic-bezier(0.16,1,0.3,1) group-hover:scale-110 group-hover:rotate-1">
                            YOUR JOURNEY<br />STARTS HERE!
                        </h3>
                    </div>

                </div>

            </div>
            
            {/* Scroll Indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 entrance-up delay-800 anim-float">
                <div className="w-[2px] h-10 bg-slate-200/50 rounded-full relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-[30%] bg-[#E86A28] rounded-full animate-[fade-in-up_1.5s_infinite]"></div>
                </div>
            </div>
        </section>
    );
}

// --- Reusable Micro-Components ---

function ProgramCard({ title, subtitle, icon, hexColor }) {
    return (
        <div
            className="group bg-white rounded-xl p-4 lg:p-5 w-full sm:w-[150px] lg:w-[165px] flex flex-col items-center text-center shadow-sm transition-all duration-500 cubic-bezier(0.16,1,0.3,1) cursor-pointer hover:-translate-y-[5px] hover:shadow-[0_15px_35px_rgba(0,0,0,0.15)] relative overflow-hidden"
            style={{ 
                border: `2px solid ${hexColor}`,
            }}
        >
            {/* Soft Glow Overlay on Hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500" style={{ backgroundColor: hexColor }}></div>
            
            <div
                className="w-14 h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center text-white mb-3 shadow-sm transition-transform duration-500 cubic-bezier(0.16,1,0.3,1) group-hover:scale-110 group-hover:-rotate-6 relative"
                style={{ backgroundColor: hexColor }}
            >
                {/* Icon Inner Glow */}
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md" style={{ backgroundColor: hexColor }}></div>
                <div className="relative z-10">{icon}</div>
            </div>
            <h3
                className="font-black text-2xl lg:text-3xl tracking-tight leading-none mb-1.5 relative z-10"
                style={{ color: hexColor }}
            >
                {title}
            </h3>
            <p className="text-[9px] lg:text-[10px] uppercase font-bold text-[#0B1E4A] leading-tight opacity-80 relative z-10">
                {subtitle}
            </p>
        </div>
    );
}

function FeatureItem({ icon, text }) {
    return (
        <div className="flex items-center gap-2 lg:gap-3 text-white group cursor-default">
            <div className="flex-shrink-0 w-9 h-9 lg:w-10 lg:h-10 rounded-full border border-white/40 flex items-center justify-center transition-all duration-500 cubic-bezier(0.16,1,0.3,1) group-hover:border-white group-hover:bg-white/15 anim-scale-pulse">
                {icon}
            </div>
            <span className="text-[9px] lg:text-xs font-semibold tracking-wider leading-tight max-w-[80px] lg:max-w-[100px] transition-transform duration-500 cubic-bezier(0.16,1,0.3,1) group-hover:translate-x-1">
                {text.split(' ').map((word, i) => (
                    <React.Fragment key={i}>
                        {word}<br />
                    </React.Fragment>
                ))}
            </span>
        </div>
    );
}