import React from 'react'
import CollegeNavbar from '../Comp/Globalcomp/Navbar'

const Landingpage = () => {
  return (
    <div className='min-h-screen w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800'>
      <CollegeNavbar />
      <main className='mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col justify-center px-4 py-16 text-white sm:px-6 lg:px-8'>
        <p className='mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300'>
          Dronacharya College
        </p>
        <h1 className='max-w-3xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl'>
          Build your future with a focused academic experience and a clear campus path.
        </h1>
        <p className='mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg'>
          Use the navigation above to move between admissions, courses, staff, library, and student life.
          This landing page now renders the navbar through the main app entry cleanly.
        </p>
      </main>
    </div>
  )
}

export default Landingpage
