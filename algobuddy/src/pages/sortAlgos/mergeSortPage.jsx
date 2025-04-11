import React from "react";
import { mergeSortConfig } from "@/Visualizers/Algorithms/MergeSort/MergeSortConfig";
import VisualizeAlgorithm from "@/Visualizers/VisualizeAlgorithm";
import Footer from "@/components/hero/footer";

const MergeSortPage = () => {
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
                src="./public/merge-title.png"
                alt=""
                className="h-[6.5vh] dark:hidden"
              />
              <img
                id="title-1"
                src="./public/merge-title-dark-mode.png"
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
                In computer science, merge sort (also commonly spelled as
                mergesort and as merge-sort) is an efficient, general-purpose,
                and comparison-based sorting algorithm. Most implementations
                produce a stable sort, which means that the relative order of
                equal elements is the same in the input and output. Merge sort
                is a divide-and-conquer algorithm that was invented by John von
                Neumann in 1945. A detailed description and analysis of
                bottom-up merge sort appeared in a report by Goldstine and von
                Neumann as early as 1948.
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
              src="./public/merge-sort-icon.png"
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

export default MergeSortPage;
