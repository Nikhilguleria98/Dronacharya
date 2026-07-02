import React from 'react'

const MandatoryDisclosureHero = () => {
  return (
      <div className="relative w-full h-64 md:h-80 lg:h-96 flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 bg-black/40"></div>
{/* Content */}
<div className="relative z-10 text-center">
  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white">
    Mandatory Disclosure
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

export default MandatoryDisclosureHero
