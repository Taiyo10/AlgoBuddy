import React from "react";
import { selectionSortConfig } from "@/Visualizers/Algorithms/SelectionSort/SelectionSortConfig";
import VisualizeAlgorithm from "@/Visualizers/VisualizeAlgorithm";
import Footer from "@/components/hero/footer";

const SelectionSortPage = () => {
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
                src="./public/selection-title.png"
                alt=""
                className="h-[6.5vh] dark:hidden"
              />
              <img
                id="title-1"
                src="./public/selection-title-dark-mode.png"
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
                In computer science, selection sort is an in-place comparison
                sorting algorithm. It has a O(n2) time complexity, which makes
                it inefficient on large lists, and generally performs worse than
                the similar insertion sort. Selection sort is noted for its
                simplicity and has performance advantages over more complicated
                algorithms in certain situations, particularly where auxiliary
                memory is limited. The algorithm divides the input list into two
                parts: a sorted sublist of items which is built up from left to
                right at the front (left) of the list and a sublist of the
                remaining unsorted items that occupy the rest of the list.
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
              src="./public/selection-sort-icon.png"
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

export default SelectionSortPage;
