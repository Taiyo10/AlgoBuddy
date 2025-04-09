import React from "react";
import SampleCode from "@/components/sampleCode/sampleCode";
import { linearSearchConfig } from "@/Visualizers/Algorithms/LinearSearch/LinearSearchConfig";
import VisualizeAlgorithm from "@/Visualizers/VisualizeAlgorithm";



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
    return <div className="flex h-auto justify-items-center justify-center">
      <VisualizeAlgorithm config={linearSearchConfig} />
      LinearSearchPage
      <SampleCode
      Java={javaCode}
      Python={pythonCode}
      JS={jsCode}
      CPlusPlus={cppCode}
      />
      </div>;
  };
  
  export default LinearSearchPage;