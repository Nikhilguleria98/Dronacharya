import { useState } from 'react';

export default function Downloads() {
  const [downloads] = useState([
    {
      id: 1,
      title: 'Prospectus 2026-2027',
      file: 'prospectus-2026-2027.pdf',
      size: '2.5 MB',
      span: 'col-span-1',
    },
    {
      id: 2,
      title: 'Navrang Broucher 2026',
      file: 'navrang-broucher-2026.pdf',
      size: '1.8 MB',
      span: 'col-span-1',
    },
    {
      id: 3,
      title: 'Winter Assignment 2026',
      file: 'winter-assignment-2026.pdf',
      size: '3.2 MB',
      span: 'col-span-1',
    },
    {
      id: 4,
      title: 'M.Ed. Workshop 2024',
      file: 'med-workshop-2024.pdf',
      size: '4.1 MB',
      span: 'col-span-1',
    },
    {
      id: 5,
      title: 'Report on B.ED student Seminar 2023-2024',
      file: 'bed-student-seminar-report-2023-2024.pdf',
      size: '5.6 MB',
      span: 'col-span-1 lg:col-span-2',
    },
  ]);

  const handleDownload = (file, title) => {
    console.log(`Downloading ${file}`);
    
    // Create a download link (replace with actual file URL)
    const link = document.createElement('a');
    link.href = `/downloads/${file}`;
    link.download = file;
    link.click();
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-indigo-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-blue-900 mb-4">
            Downloads
          </h1>
          <p className="text-gray-600 text-lg">
            Access all important documents and resources
          </p>
        </div>

        {/* Downloads Grid */}
        <div className="flex flex-wrap justify-center gap-6">
  {downloads.map((item) => (
    <div
      key={item.id}
      className={`
        w-full
        sm:w-[calc(50%-12px)]
        lg:w-[calc(25%-18px)]
        ${item.span === "col-span-1 lg:col-span-2" ? "lg:w-[calc(50%-12px)]" : ""}
        bg-white rounded-2xl border-2 border-blue-200 p-6 md:p-8
        hover:shadow-xl transition-all duration-300 hover:-translate-y-2
        flex flex-col justify-between
      `}
    >
      <div>
        <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
          {item.title}
        </h3>

        <p className="text-sm text-gray-500 mb-6">
          {item.size}
        </p>
      </div>

      <button
        onClick={() => handleDownload(item.file, item.title)}
        className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
      >
        Download Now

        <svg
          className="w-5 h-5 group-hover:translate-y-1 transition-transform"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
          />
        </svg>
      </button>
    </div>
  ))}
</div>
        </div>
      </div>
  );
}