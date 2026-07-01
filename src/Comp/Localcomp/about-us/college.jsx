import React from "react";

const AboutUsCollege = () => {
  return (
    <div>
      {/* Banner */}
      <section className="w-full h-48 sm:h-64 md:h-80 lg:h-96 bg-black/40 flex items-center justify-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white font-[Nunito]">
          About Us
        </h1>
      </section>

      {/* Intro */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center font-[Nunito] mb-6">
          About <span className="text-[#D4600A]">Us</span>
        </h2>

        <p className="font-[Montserrat] text-base md:text-lg leading-7 md:leading-8 text-center text-[#757A79]">
          Dronacharya PG College of Education, Rait has been established under the
          auspices of OCEAN Society and founded in the name of the great teacher,
          Guru Dronacharya, in the year 2006. Dronacharya P.G. College of
          Education, Rait has made an enviable reputation for cutting-edge learning
          in academic and co-academic skills through its commitment to innovative
          and student-friendly initiatives.

          <br />
          <br />

          The college is proud to be an integral part of the picturesque
          surroundings in the enchanting Kangra Valley in the lap of the
          snow-clad Dhauladhars. It is situated on NH-154 at Rait, Kangra
          (Himachal Pradesh), on the Mandi–Pathankot National Highway. It is
          located 8 km from Kangra Airport, 20 km from Kangra Railway Station,
          and 20 km from Dharamshala.

          <br />
          <br />

          The college is a self-financed, non-aided educational institution
          managed by OCEAN Society. It is affiliated with H.P. University,
          Shimla, recognized by NCTE and UGC under Section 2(f) of the UGC Act,
          1956. It is the youngest college in Himachal Pradesh to receive a
          NAAC 'B' Grade accreditation and offers B.Ed., M.Ed., BBA, BCA, and
          PGDCA programmes.

          <br />
          <br />

          Dronacharya P.G. College of Education is a place where knowledge is
          created, not just communicated. The college believes that promoting
          human values and student well-being is the foundation for success in
          life. Teaching at Dronacharya follows the principles of Positive
          Education, combining academic excellence with lifelong well-being.
        </p>
      </section>
    </div>
  );
};

export default AboutUsCollege;