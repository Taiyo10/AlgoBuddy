import React from "react";
import { heapSortConfig } from "@/Visualizers/Algorithms/HeapSort/HeapSortConfig";
import VisualizeAlgorithm from "@/Visualizers/VisualizeAlgorithm";
import Footer from "@/components/hero/footer";

const HeapSortPage = () => {
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
                src="./public/heap-title.png"
                alt=""
                className="h-[6.5vh] dark:hidden"
              />
              <img
                id="title-1"
                src="./public/heap-title-dark-mode.png"
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
                In computer science, heapsort is an efficient, comparison-based
                sorting algorithm that reorganizes an input array into a heap (a
                data structure where each node is greater than its children) and
                then repeatedly removes the largest node from that heap, placing
                it at the end of the array. Although somewhat slower in practice
                on most machines than a well-implemented quicksort, it has the
                advantages of very simple implementation and a more favorable
                worst-case O(n log n) runtime. Most real-world quicksort
                variants include an implementation of heapsort as a fallback
                should they detect that quicksort is becoming degenerate.
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
              src="./public/heap-sort-icon.png"
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

export default HeapSortPage;
