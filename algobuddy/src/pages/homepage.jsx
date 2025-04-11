import React from "react";
import { TypeAnimation } from "react-type-animation";

const Homepage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-[#204D2A] w-full h-[200px] flex items-center justify-center">
        <TypeAnimation
          sequence={["ALGOBUDDY, LEARNING ALGORITHMS EASIER"]}
          wrapper="h1"
          speed={50}
          cursor={true}
          className="text-white text-2xl md:text-3xl font-rubikmono text-center drop-shadow-xl"
        />
      </div>

      {/* White Visualizer Section (fills visible screen height) */}
      <div className="bg-background w-full min-h-[calc(100vh-200px)] px-6 py-14 -mt-8 flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Left Text Block */}
        <div className="max-w-xl text-left">
          <h2 className="text-3xl font-rubikmono text-[#204D2A] mb-4">
            Visualizing code.
          </h2>
          <p className="text-lg font-dmsans text-gray-700">
            At AlgoBuddy, we want everyone to learn and understand algorithms.
          </p>
        </div>

        {/* Right Visual Placeholder */}
        <div className="w-full md:w-[400px] h-[250px] bg-gray-100 rounded-lg shadow-inner flex items-center justify-center">
          <span className="text-gray-400 font-dmsans">[Visualizer Placeholder]</span>
        </div>
      </div>
    </>
  );
};

export default Homepage;
