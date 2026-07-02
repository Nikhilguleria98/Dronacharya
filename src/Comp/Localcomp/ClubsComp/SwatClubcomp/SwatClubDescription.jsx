import React from 'react';

export default function SwatClubDescription() {
  return (
    <section className="min-h-screen bg-white py-12 px-6 sm:px-12 lg:px-24 font-sans">
      <div className="max-w-full">
        
        {/* Main Title */}
        <h1 className="text-5xl sm:text-6xl font-bold mb-10">
          <span className="text-[#0B1E4A]">Swat </span>
          <span className="text-[#E86A28]">Club</span>
        </h1>

        {/* Content Container */}
        <div className="text-gray-500 text-base leading-relaxed">
          
          {/* ABOUT CLUB */}
          <div className="mb-6">
            <h2 className="font-bold text-gray-600 mb-2">ABOUT CLUB</h2>
            <p>
              <strong className="font-bold text-gray-600">SWAT (Student Working on Advance Technology)</strong> Club is constituted to make students aware about the latest computer technologies .The club members learn various advanced IT related technologies.
            </p>
          </div>

          {/* Objective */}
          <div className="mb-6">
            <h2 className="font-bold text-gray-600 mb-2">Objective</h2>
            <p>
              The main objective of SWAT Club is to provide an opportunity for students to work together an interesting and challenging project in team environment.
            </p>
          </div>

          {/* Formation */}
          <div className="mb-6">
            <h2 className="font-bold text-gray-600 mb-2">Formation</h2>
            <p>
              The Swat Club was formed on September 24, 2011 on the occasion of world corporate day.
            </p>
          </div>

          {/* Club Co-ordinator */}
          <div className="mb-6">
            <h2 className="font-bold text-gray-600 mb-2">Club Co-ordinator</h2>
            <p>Mrs. Shilpa Sharma</p>
          </div>

          {/* Rules & regulations */}
          <div className="mb-4">
            <h2 className="font-bold text-gray-600 mb-2">Rules & regulations</h2>
            <ol className="list-decimal list-outside ml-4 space-y-1">
              <li>To be a member of the club, student should be registered.</li>
              <li>Club committee should be in proper uniform with ID cards at time of activities conducted by Club.</li>
              <li>Activities are proposed to be conducted in Seminar Hall of the college.</li>
              <li>All members of the Club and Teacher Coordinators should be present at time of meeting at least one week before the event to discuss the agenda points.</li>
              <li>Discipline is mandatory at the time of event.</li>
              <li>In absence of Teachers Coordinator, the Club President, Vice-President and all members of the club are responsible for overall performance of the event.</li>
              <li>The Teacher Coordinators, the Club President, Vice-President have to take approval from Management, Principal & HOD before organizing the activity of the club.</li>
              <li>The winners of each activity will be awarded in annual function of the college.</li>
              <li>The club President, Vice-President has to prepare activity report of club after the successful completion of each event and submit to the Teacher coordinators.</li>
            </ol>
          </div>

          {/* Participation Rules */}
          <div>
            <p className="mb-2">
              To participate in club activities :-
            </p>
            <ol className="list-decimal list-outside ml-4 space-y-1">
              <li>Participants should be from BCA Department.</li>
              <li>Students should be aware from the Objectives & Rules of the club.</li>
            </ol>
          </div>

        </div>
      </div>
    </section>
  );
}