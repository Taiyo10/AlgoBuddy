import React from "react";
import SampleCode from "@/components/sampleCode/sampleCode";


const DFSPage = () => {
    return <div>
      DFSPage
      <SampleCode
      Java={javaCode}
      Python={pythonCode}
      JS={jsCode}
      CPlusPlus={cppCode}/>
      </div>;
  };
  
  export default DFSPage;


  // Code snippets
const javaCode = `// Depth-First Search (DFS) in Java

import java.util.*;

class DFS {
  private Map<Integer, List<Integer>> adjList = new HashMap<>();

  public void addEdge(int v, int w) {
    adjList.computeIfAbsent(v, k -> new ArrayList<>()).add(w);
  }

  public void dfs(int v, Set<Integer> visited) {
    visited.add(v);
    System.out.print(v + " ");

    for (int neighbor : adjList.getOrDefault(v, new ArrayList<>())) {
      if (!visited.contains(neighbor)) {
        dfs(neighbor, visited);
      }
    }
  }

  public static void main(String[] args) {
    DFS graph = new DFS();
    graph.addEdge(0, 1);
    graph.addEdge(0, 2);
    graph.addEdge(1, 3);
    graph.addEdge(1, 4);
    graph.addEdge(2, 5);

    Set<Integer> visited = new HashSet<>();
    graph.dfs(0, visited); // Output: 0 1 3 4 2 5
  }
}
`;

const pythonCode = `# Depth-First Search (DFS) in Python

def dfs(graph, v, visited):
    visited.add(v)
    print(v, end=' ')

    for neighbor in graph.get(v, []):
        if neighbor not in visited:
            dfs(graph, neighbor, visited)

# Example graph
graph = {
    0: [1, 2],
    1: [3, 4],
    2: [5],
}

visited = set()
dfs(graph, 0)  # Output: 0 1 3 4 2 5
`;

const jsCode = `// Depth-First Search (DFS) in JavaScript

function dfs(graph, v, visited = new Set()) {
  visited.add(v);
  console.log(v);

  for (const neighbor of graph[v] || []) {
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited);
    }
  }
}

// Example graph
const graph = {
  0: [1, 2],
  1: [3, 4],
  2: [5],
};

dfs(graph, 0); // Output: 0 1 3 4 2 5
`;

const cppCode = `// Depth-First Search (DFS) in C++

#include <iostream>
#include <vector>
#include <unordered_map>
#include <unordered_set>
using namespace std;

void dfs(unordered_map<int, vector<int>>& graph, int v, unordered_set<int>& visited) {
  visited.insert(v);
  cout << v << " ";

  for (int neighbor : graph[v]) {
    if (visited.find(neighbor) == visited.end()) {
      dfs(graph, neighbor, visited);
    }
  }
}

int main() {
  unordered_map<int, vector<int>> graph;
  graph[0] = {1, 2};
  graph[1] = {3, 4};
  graph[2] = {5};

  unordered_set<int> visited;
  dfs(graph, 0); // Output: 0 1 3 4 2 5

  return 0;
}
`;
