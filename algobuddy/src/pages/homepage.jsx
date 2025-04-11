import React from "react";
import { TypeAnimation } from "react-type-animation";

const Homepage = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-[#204D2A] w-full h-[200px] flex pt-16 justify-center">
        <TypeAnimation
          sequence={["ALGOBUDDY, LEARNING ALGORITHMS EASIER"]}
          wrapper="h1"
          speed={50}
          cursor={true}
          className="text-white text-2xl md:text-3xl font-rubikmono text-center drop-shadow-xl"
        />
      </div>

      {/* White Visualizer Section */}
      <div className="bg-background w-full min-h-[calc(100vh-200px)] px-6 py-14 -mt-8 flex flex-col md:flex-row items-center justify-center gap-12">
        
        {/* Left Text Block */}
        <div className="max-w-xl text-left ml-[-40px]">
          <h2 className="text-3xl font-rubikmono text-[#204D2A] mb-4">
            Visualizing code.
          </h2>
          <p className="text-lg font-dmsans text-gray-700">
            At AlgoBuddy, we want everyone to learn and understand algorithms.
          </p>
        </div>

        {/* Right Visual with Video */}
        <div className="w-full md:w-[400px] h-[250px] flex items-center justify-center">
          <video
            className="w-full h-full object-cover rounded-lg border-8 border-[#123B29]"
            src="placeholder.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

      </div>

      {/* Footer */}
      <footer className="bg-gray-300 text-center py-6 text-sm text-gray-700">
        <div className="mb-2">Back to top</div>
        <div>
          Created By: Teo Cristante, Ninh Dang, Allen Reinoso, Ethan Samson,
          Joshua Herrera
        </div>
      </footer>
    </>
  );
};

export default Homepage;
