import React from "react";

const Box = ({ title }) => {
  return (
    <div
      className="
        bg-sky-200
        border-[3px]
        border-sky-500
        rounded-md
        px-6
        py-3
        text-lg
        font-semibold
        text-gray-800
        transition-all
        duration-300
        hover:-translate-y-2
        hover:scale-105
        hover:shadow-xl
        hover:bg-sky-300
        hover:border-blue-600
        cursor-pointer
      "
    >
      {title}
    </div>
  );
};

const VLine = ({ h = 60 }) => (
  <div
    className="w-[4px] bg-sky-500 mx-auto"
    style={{ height: `${h}px` }}
  />
);

const Arrow = () => (
  <div className="flex justify-center -mt-1">
    <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-t-[18px] border-l-transparent border-r-transparent border-t-sky-500"></div>
  </div>
);

const OrganizationChart = () => {
  return (
    <div className="bg-white py-20">
      {/* Ocean Society */}

      <div className="flex justify-center">
        <Box title="Ocean Society" />
      </div>

      <VLine h={70} />
      <Arrow />

      {/* Management */}

      <div className="flex justify-center mt-2">
        <Box title="Management" />
      </div>

      <VLine h={70} />
      <Arrow />

      {/* Principal */}

      <div className="flex justify-center mt-2">
        <Box title="Principal" />
      </div>

      {/* Line to 3 Wings */}

      <div className="flex justify-center">
        <VLine h={45} />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="h-1 bg-sky-500 rounded-full"></div>

        <div className="flex justify-between">
          <div className="flex flex-col items-center">
            <VLine h={40} />
            <Arrow />
          </div>

          <div className="flex flex-col items-center">
            <VLine h={40} />
            <Arrow />
          </div>

          <div className="flex flex-col items-center">
            <VLine h={40} />
            <Arrow />
          </div>
        </div>

        {/* Three Departments */}

        <div className="flex justify-between">
          <Box title="Academic Wing" />
          <Box title="Administrative Wing" />
          <Box title="Support Services" />
        </div>
      </div>

      {/* Bottom */}

      <div className="flex justify-between mt-16 max-w-7xl mx-auto">
        {/* Academic */}

        <div className="flex flex-col items-center">
          <VLine h={35} />

          <div className="w-60 h-1 bg-sky-500 rounded-full"></div>

          <div className="flex justify-between w-60">
            <div className="flex flex-col items-center">
              <VLine h={30} />
              <Arrow />
              <Box title="HODs" />
            </div>

            <div className="flex flex-col items-center">
              <VLine h={30} />
              <Arrow />
              <Box title="Faculty" />
            </div>
          </div>
        </div>

        {/* Admin */}

        <div className="flex flex-col items-center">
          <VLine h={35} />

          <div className="w-72 h-1 bg-sky-500 rounded-full"></div>

          <div className="flex justify-between w-72">
            <div className="flex flex-col items-center">
              <VLine h={30} />
              <Arrow />
              <Box title="Superintendent" />
            </div>

            <div className="flex flex-col items-center">
              <VLine h={30} />
              <Arrow />
              <Box title="Clerical Staff" />
            </div>
          </div>
        </div>

        {/* Support */}

        <div className="flex flex-col items-center">
          <VLine h={35} />

          <div className="w-96 h-1 bg-sky-500 rounded-full"></div>

          <div className="flex justify-between w-96">
            <div className="flex flex-col items-center">
              <VLine h={30} />
              <Arrow />
              <Box title="Librarian" />
            </div>

            <div className="flex flex-col items-center">
              <VLine h={30} />
              <Arrow />
              <Box title="IT / Lab Support" />
            </div>

            <div className="flex flex-col items-center">
              <VLine h={30} />
              <Arrow />
              <Box title="Support Staff" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationChart;