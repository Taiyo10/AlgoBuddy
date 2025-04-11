import React from "react";
import { insertionSortConfig } from "@/Visualizers/Algorithms/InsertionSort/InsertionSortConfig";
import VisualizeAlgorithm from "@/Visualizers/VisualizeAlgorithm";
import Footer from "@/components/hero/footer";

const InsertionSortPage = () => {
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
                src="./public/insertion-title.png"
                alt=""
                className="h-[6.5vh] dark:hidden"
              />
              <img
                id="title-1"
                src="./public/insertion-title-dark-mode.png"
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
                Insertion sort is a simple sorting algorithm that builds the
                final sorted array (or list) one item at a time by comparisons.
                It is much less efficient on large lists than more advanced
                algorithms such as quicksort, heapsort, or merge sort. Insertion
                sort iterates, consuming one input element each repetition, and
                grows a sorted output list. At each iteration, insertion sort
                removes one element from the input data, finds the location it
                belongs within the sorted list, and inserts it there. It repeats
                until no input elements remain.
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
              src="./public/insertion-sort-icon.png"
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

export default InsertionSortPage;
