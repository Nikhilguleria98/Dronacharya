import React from 'react'

const ManagementHero = () => {
  return (
    <div className="relative w-full h-64 md:h-80 lg:h-96 bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center overflow-hidden">
      {/* Background Placeholder - Replace with actual image */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-indigo-600 to-blue-800 opacity-80"></div>
      
      {/* Building shape placeholder */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-b from-orange-400 to-orange-600 opacity-30 clip-path-building"></div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
          Management
        </h1>
      </div>

      <style jsx>{`
        .clip-path-building {
          clip-path: polygon(20% 100%, 30% 50%, 35% 45%, 40% 40%, 45% 35%, 50% 30%, 55% 35%, 60% 40%, 65% 45%, 70% 50%, 80% 100%);
        }
      `}</style>
    </div>
  )
}

export default ManagementHero