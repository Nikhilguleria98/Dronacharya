import React from 'react';
import { ArrowRight } from 'lucide-react';

const newsData = [
    {
        id: 1,
        category: 'News',
        date: '4 June 2026',
        title: 'Uttkrisht 2026 Scholarship Result Declared',
        desc: 'We are pleased to announce that the Uttkrisht 2026 Scholarship Result has been declared today.',
        isFeatured: true,
        image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2940&auto=format&fit=crop' // Campus protest/students placeholder
    },
    {
        id: 2,
        category: 'News',
        date: '4 June 2026',
        title: 'Uttkrisht 2026 Scholarship Result Declared',
        desc: 'We are pleased to announce that the Uttkrisht 2026 Scholarship Result has been declared today.',
        isFeatured: false,
    },
    {
        id: 3,
        category: 'News',
        date: '4 June 2026',
        title: 'Uttkrisht 2026 Scholarship Result Declared',
        desc: 'We are pleased to announce that the Uttkrisht 2026 Scholarship Result has been declared today.',
        isFeatured: false,
    },
    {
        id: 4,
        category: 'News',
        date: '4 June 2026',
        title: 'Uttkrisht 2026 Scholarship Result Declared',
        desc: 'We are pleased to announce that the Uttkrisht 2026 Scholarship Result has been declared today.',
        isFeatured: false,
    },
    {
        id: 5,
        category: 'News',
        date: '4 June 2026',
        title: 'Uttkrisht 2026 Scholarship Result Declared',
        desc: 'We are pleased to announce that the Uttkrisht 2026 Scholarship Result has been declared today.',
        isFeatured: false,
    }
];

export default function NewsAndEvents() {
    return (
        <section className="w-full bg-white py-16 sm:py-24 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
                    <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                        <span className="text-[#0B1E4A]">News & </span>
                        <span className="text-[#E86A28]">Events</span>
                    </h2>
                    
                    <div className="flex flex-col items-start md:items-end text-left md:text-right max-w-sm">
                        <p className="text-slate-500 text-sm mb-4 leading-relaxed font-medium">
                            Stay updated with the latest college news, academic achievements, upcoming events, and campus activities.
                        </p>
                        <a 
                            href="/news" 
                            className="bg-[#0B1E4A] hover:bg-[#152e69] text-white px-8 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                        >
                            View All
                        </a>
                    </div>
                </div>

                {/* Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                    
                    {newsData.map((news) => {
                        if (news.isFeatured) {
                            // FEATURED CARD (Left Side)
                            return (
                                <a 
                                    key={news.id} 
                                    href={`/news/${news.id}`}
                                    className="group relative block w-full h-full min-h-[400px] lg:min-h-full rounded-2xl overflow-hidden shadow-md md:col-span-2 lg:col-span-1 lg:row-span-2"
                                >
                                    {/* Image with zoom animation */}
                                    <img
                                        src={news.image}
                                        alt={news.title}
                                        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
                                    />
                                    {/* Gradient overlay to make text readable */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E4A] via-[#0B1E4A]/60 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
                                    
                                    {/* Content inside featured card */}
                                    <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-end text-white z-10">
                                        <div className="flex items-center gap-2 text-sm font-medium text-slate-200 mb-3">
                                            <span>{news.category}</span>
                                            <span>|</span>
                                            <span>{news.date}</span>
                                        </div>
                                        <h3 className="text-2xl font-bold leading-snug mb-3">
                                            {news.title}
                                        </h3>
                                        <p className="text-sm text-slate-300 mb-5 line-clamp-3">
                                            {news.desc}
                                        </p>
                                        <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider group-hover:text-white transition-colors">
                                            Read More 
                                            <ArrowRight size={16} className="transform transition-transform duration-300 group-hover:translate-x-2" />
                                        </div>
                                    </div>
                                </a>
                            );
                        }

                        // STANDARD CARDS (Right Side Grid)
                        return (
                            <a 
                                key={news.id} 
                                href={`/news/${news.id}`}
                                className="group bg-white border border-[#0B1E4A]/20 rounded-2xl p-6 sm:p-8 flex flex-col justify-center transition-all duration-300 hover:shadow-[0_8px_30px_rgb(11,30,74,0.08)] hover:border-[#0B1E4A]/40 hover:-translate-y-1"
                            >
                                <div className="flex items-center gap-2 text-sm font-medium text-slate-500 mb-3">
                                    <span>{news.category}</span>
                                    <span>|</span>
                                    <span>{news.date}</span>
                                </div>
                                <h3 className="text-xl font-bold text-[#0B1E4A] leading-snug mb-3 group-hover:text-[#152e69] transition-colors">
                                    {news.title}
                                </h3>
                                <p className="text-sm text-slate-500 mb-5 line-clamp-3">
                                    {news.desc}
                                </p>
                                <div className="flex items-center gap-2 text-sm font-bold text-[#E86A28] uppercase tracking-wider mt-auto">
                                    Read More 
                                    <ArrowRight size={16} className="transform transition-transform duration-300 group-hover:translate-x-2" />
                                </div>
                            </a>
                        );
                    })}
                    
                </div>
            </div>
        </section>
    );
}