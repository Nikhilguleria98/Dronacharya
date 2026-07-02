const Section2 = () => {
  return (
    <section className="w-full bg-white py-16 px-6 lg:px-20">
      <div className="mx-auto flex max-w-7xl flex-col gap-12 lg:flex-row">

        {/* Left Section */}
        <div className="lg:w-3/4 lg:border-r-2 lg:border-orange-400 lg:pr-16">
          <h1 className="mb-10 text-4xl font-bold text-[#082b73] md:text-5xl">
            Bachelor of <span className="text-[#d96c15]">Education</span>
          </h1>

          <div className="space-y-8 text-[16px] leading-8 text-gray-500">
            <p>
              Dronacharya P.G College of Education, Rait was established in
              2006—is approved by the National Council for Teacher Education
              (NCTE), Jaipur and affiliated to Himachal Pradesh University,
              Shimla and accredited 'B' Grade by National Assessment and
              Accreditation Council (NAAC), Mysore.
            </p>

            <p>
              At Dronacharya, it is our aim to provide an exemplary stepping
              stone to budding teachers for their future success. We provide
              firm grounding in requisite skills and knowledge that helps
              students achieve teaching excellence.
            </p>

            <p>
              The college provides superior infrastructural facilities in the
              form of spacious classrooms, multipurpose hall, educational
              technology lab, computer lab, Wi-Fi facility, language
              laboratory, science and mathematics labs, and a library with more
              than 12,000 books.
            </p>

            <p>
              Activities such as debates, declamation, quiz competitions,
              workshops, conferences, seminars and educational tours help widen
              the intellectual horizon of students.
            </p>

            <p>
              <span className="font-semibold text-gray-700">
                Eligibility:
              </span>{" "}
              B.A, B.Sc, B.Com with 50% marks for General candidates and 45%
              marks for SC, ST and OBC candidates.
            </p>
          </div>

          <div className="mt-12">
            <h3 className="mb-2 text-xl font-bold uppercase text-gray-700">
              Programme Objective
            </h3>

            <h4 className="mb-5 text-lg font-semibold text-gray-800">
              B.Ed
            </h4>

            <p className="leading-8 text-gray-500">
              Bachelor of Education (B.Ed.) is an undergraduate course offered
              to those students who are interested in pursuing a career in
              teaching. The B.Ed. degree is mandatory for teaching at the
              secondary (classes 9 and 10) and higher secondary (10+2 or
              classes 11 and 12).
            </p>
          </div>

          <div className="mt-12">
            <h3 className="mb-5 text-xl font-bold uppercase text-gray-700">
              Careers After B.Ed.
            </h3>

            <ul className="list-disc space-y-2 pl-6 leading-8 text-gray-500">
              <li>Teaching Jobs as TGT and PGT</li>
              <li>Faculty in Colleges and Universities</li>
              <li>Education Officer</li>
              <li>Counselor</li>
              <li>Start your own school</li>
              <li>Education Consultancy</li>
            </ul>
          </div>
        </div>

        {/* Right Section */}

        <div className="lg:w-1/4">
          <h2 className="text-3xl font-bold text-[#082b73]">
            For <span className="text-[#d96c15]">Admission</span>
          </h2>

          <div className="my-4 h-[2px] w-full bg-orange-400"></div>

          <div className="space-y-3 text-gray-500">
            <p>
              <span className="font-semibold text-gray-700">
                Department:
              </span>{" "}
              Education
            </p>

            <p>
              <span className="font-semibold text-gray-700">
                Course Commence In:
              </span>{" "}
              September
            </p>

            <p>
              <span className="font-semibold text-gray-700">
                Course Duration:
              </span>{" "}
              2 Years
            </p>

            <p>
              <span className="font-semibold text-gray-700">
                Total Seats:
              </span>{" "}
              200
            </p>

            <p>
              <span className="font-semibold text-gray-700">
                HOD:
              </span>{" "}
              Mr. Sumit Sharma
            </p>

            <p>
              <span className="font-semibold text-gray-700">
                Phone:
              </span>{" "}
              7018968484
            </p>

            <p>
              <span className="font-semibold text-gray-700">
                Email:
              </span>{" "}
              dronacharyahp@gmail.com
            </p>
          </div>

          <button className="mt-8 rounded-full bg-[#082b73] px-8 py-3 text-lg font-medium text-white transition-all duration-300 hover:bg-[#0d3b96] hover:shadow-lg">
            View Faculty
          </button>
        </div>
      </div>
    </section>
  );
};

export default Section2;