import React from "react";
import { Download } from "lucide-react";

const DOWNLOADS = [
  { id: 1, title: "Prospectus 2026-2027", file: "#" },
  { id: 2, title: "Navrang Broucher 2026", file: "#" },
  { id: 3, title: "Winter Assignment 2026", file: "#" },
  { id: 4, title: "M.Ed. Workshop 2024", file: "#" },
  { id: 5, title: "Report on B.ED student Seminar 2023-2024", file: "#" },
];

const Downloads = () => {
  return (
    <section className="py-14 px-4 sm:px-8 lg:px-16 bg-[#f0f4ff]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-10">
          Downloads
        </h2>

        {/* First row: 4 items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {DOWNLOADS.slice(0, 4).map((item) => (
            <div
              key={item.id}
              className="border border-gray-300 rounded-lg p-4 bg-white flex flex-col gap-3"
            >
              <p className="text-sm font-semibold text-gray-800 leading-snug">
                {item.title}
              </p>
              <a
                href={item.file}
                className="flex items-center justify-center gap-2 bg-[#0d1b4c] text-white text-xs font-semibold py-2 px-4 rounded hover:bg-blue-900 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                Download Now ↓
              </a>
            </div>
          ))}
        </div>

        {/* Second row: centered 5th item */}
        <div className="flex justify-center">
          <div className="border border-gray-300 rounded-lg p-4 bg-white flex flex-col gap-3 w-full sm:w-80">
            <p className="text-sm font-semibold text-gray-800 leading-snug text-center">
              {DOWNLOADS[4].title}
            </p>
            <a
              href={DOWNLOADS[4].file}
              className="flex items-center justify-center gap-2 bg-[#0d1b4c] text-white text-xs font-semibold py-2 px-4 rounded hover:bg-blue-900 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              Download Now ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Downloads;
