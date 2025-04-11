import React from "react";
import { quickSortConfig } from "@/Visualizers/Algorithms/QuickSort/QuickSortConfig";
import VisualizeAlgorithm from "@/Visualizers/VisualizeAlgorithm";
import Footer from "@/components/hero/footer";

const QuickSortPage = () => {
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
                src="./public/quick-title.png"
                alt=""
                className="h-[6.5vh] dark:hidden"
              />
              <img
                id="title-1"
                src="./public/quick-title-dark-mode.png"
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
                Quicksort is an efficient, general-purpose sorting algorithm.
                Quicksort was developed by British computer scientist Tony Hoare
                in 1959 and published in 1961. It is still a commonly used
                algorithm for sorting. Overall, it is slightly faster than merge
                sort and heapsort for randomized data, particularly on larger
                distributions. Quicksort is a divide-and-conquer algorithm. It
                works by selecting a 'pivot' element from the array and
                partitioning the other elements into two sub-arrays, according
                to whether they are less than or greater than the pivot. For
                this reason, it is sometimes called partition-exchange sort. The
                sub-arrays are then sorted recursively.
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
              src="./public/quick-sort-icon.png"
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

export default QuickSortPage;
