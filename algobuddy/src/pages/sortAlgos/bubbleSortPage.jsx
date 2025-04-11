import React from "react";
import { bubbleSortConfig } from "@/Visualizers/Algorithms/BubbleSort/BubbleSortConfig";
import VisualizeAlgorithm from "@/Visualizers/VisualizeAlgorithm";
import Footer from "@/components/hero/footer";

const BubbleSortPage = () => {
  return (
    <div>
      <div id="top-container" className="h-[40.5vh] flex justify-between">
        <div id="title-container-outer" className="w-[60vw] flex items-center">
          <div
            id="title-container-inner"
            className="h-[30.6vh] w-[57vw] ml-auto flex flex-col"
          >
            <div id="title" className="h-[16vh] ">
              <img
                id="title-1"
                src="./public/bubble-title.png"
                alt=""
                className="h-[6.5vh] dark:hidden"
              />
              <img
                id="title-1"
                src="./public/bubble-title-dark-mode.png"
                alt=""
                className="h-[6.5vh] hidden dark:block"
              />
              <img
                id="title-2"
                src="./public/sort-title.png"
                alt=""
                className="h-[6.5vh] dark:hidden"
              />
              <img
                id="title-1"
                src="./public/sort-title-dark-mode.png"
                alt=""
                className="h-[6.5vh] hidden dark:block"
              />
            </div>
            <div id="preamble">
              <h1 id="preamble-text" className="text-[1vw] font-dmsans">
                Bubble sort, sometimes referred to as sinking sort, is a simple
                sorting algorithm that repeatedly steps through the input list
                element by element, comparing the current element with the one
                after it, swapping their values if needed. These passes through
                the list are repeated until no swaps have to be performed during
                a pass, meaning that the list has become fully sorted. The
                algorithm, which is a comparison sort, is named for the way the
                larger elements "bubble" up to the top of the list. This simple
                algorithm performs poorly in real-world use and is used
                primarily as an educational tool.
              </h1>
            </div>
          </div>
        </div>
        <div
          id="top-shape"
          className="w-[40vw] border-l-[15vw] border-l-transparent border-b-[40.6vh] border-b-[#2A5829]"
        >
          <div
            id="icon-container"
            className="w-[25vw] h-[40.5vh] bg-none flex justify-center items-center"
          >
            <img
              src="./public/bubble-sort-icon.png"
              alt=""
              className="w-[18vw]"
            />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default BubbleSortPage;
