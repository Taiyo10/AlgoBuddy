import React from "react";
import SampleCode from "@/components/sampleCode/sampleCode";
import { linearSearchConfig } from "@/Visualizers/Algorithms/LinearSearch/LinearSearchConfig";
import VisualizeAlgorithm from "@/Visualizers/VisualizeAlgorithm";
import Footer from "@/components/hero/footer";

// Code snippets (organized)
const javaCode = `// Java BFS example
Queue<TreeNode> queue = new LinkedList<>();
queue.add(root);
while (!queue.isEmpty()) {
  TreeNode node = queue.poll();
  // process node
}`;
const pythonCode = `# Python BFS example
from collections import deque
queue = deque([root])
while queue:
  node = queue.popleft()
  # process node`;
const jsCode = `// JavaScript BFS example
let queue = [root];
while (queue.length > 0) {
  let node = queue.shift();
  // process node
}`;
const cppCode = `// C++ BFS example
queue<TreeNode*> queue;
queue.push(root);
while (!queue.empty()) {
  TreeNode* node = queue.front();
  queue.pop();
  // process node
}`;

const LinearSearchPage = () => {
  return (
    // <div className="flex h-auto justify-items-center justify-center">
    //   <VisualizeAlgorithm config={linearSearchConfig} />
    //   LinearSearchPage
    //   <SampleCode
    //     Java={javaCode}
    //     Python={pythonCode}
    //     JS={jsCode}
    //     CPlusPlus={cppCode}
    //   />
    // </div>

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
                src="./public/linear-title.png"
                alt=""
                className="h-[6.5vh] dark:hidden"
              />
              <img
                id="title-1"
                src="./public/linear-title-dark-mode.png"
                alt=""
                className="h-[6.5vh] hidden dark:block"
              />
              <img
                id="title-2"
                src="./public/search-title.png"
                alt=""
                className="h-[6.5vh] dark:hidden"
              />
              <img
                id="title-1"
                src="./public/search-title-dark-mode.png"
                alt=""
                className="h-[6.5vh] hidden dark:block"
              />
            </div>
            <div id="preamble">
              <h1 id="preamble-text" className="text-[1vw] font-dmsans">
                In computer science, linear search or sequential search is a
                method for finding an element within a list. It sequentially
                checks each element of the list until a match is found or the
                whole list has been searched. A linear search runs in linear
                time in the worst case, and makes at most n comparisons, where n
                is the length of the list. If each element is equally likely to
                be searched, then linear search has an average case of (n+1) / 2
                comparisons, but the average case can be affected if the search
                probabilities for each element vary. Linear search is rarely
                practical because other search algorithms and schemes, such as
                the binary search algorithm and hash tables, allow significantly
                faster searching for all but short lists.
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
              src="./public/linear-search-icon.png"
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

export default LinearSearchPage;
