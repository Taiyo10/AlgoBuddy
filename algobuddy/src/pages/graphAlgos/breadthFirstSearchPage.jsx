import React from "react";
import SampleCode from "@/components/sampleCode/sampleCode";


const BFSPage = () => {
    return <div>
      BFSPage
      <SampleCode
      Java={javaCode}
      Python={pythonCode}
      JS={jsCode}
      CPlusPlus={cppCode}/>  
    </div>;
  };
  
  export default BFSPage;


  // Code snippets
const javaCode = `// Breadth-First Search (BFS) in Java

import java.util.*;

class BFS {
  private Map<Integer, List<Integer>> adjList = new HashMap<>();

  public void addEdge(int v, int w) {
    adjList.computeIfAbsent(v, k -> new ArrayList<>()).add(w);
  }

  public void bfs(int start) {
    Set<Integer> visited = new HashSet<>();
    Queue<Integer> queue = new LinkedList<>();

    visited.add(start);
    queue.add(start);

    while (!queue.isEmpty()) {
      int v = queue.poll();
      System.out.print(v + " ");

      for (int neighbor : adjList.getOrDefault(v, new ArrayList<>())) {
        if (!visited.contains(neighbor)) {
          visited.add(neighbor);
          queue.add(neighbor);
        }
      }
    }
  }

  public static void main(String[] args) {
    BFS graph = new BFS();
    graph.addEdge(0, 1);
    graph.addEdge(0, 2);
    graph.addEdge(1, 3);
    graph.addEdge(1, 4);
    graph.addEdge(2, 5);

    graph.bfs(0); // Output: 0 1 2 3 4 5
  }
}
`;

const pythonCode = `# Breadth-First Search (BFS) in Python

from collections import deque

def bfs(graph, start):
    visited = set()
    queue = deque([start])
    visited.add(start)

    while queue:
        v = queue.popleft()
        print(v, end=' ')

        for neighbor in graph.get(v, []):
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)

# Example graph
graph = {
    0: [1, 2],
    1: [3, 4],
    2: [5],
}

bfs(graph, 0)  # Output: 0 1 2 3 4 5
`;

const jsCode = `// Breadth-First Search (BFS) in JavaScript

function bfs(graph, start) {
  const visited = new Set();
  const queue = [start];
  visited.add(start);

  while (queue.length > 0) {
    const v = queue.shift();
    console.log(v);

    for (const neighbor of graph[v] || []) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
      }
    }
  }
}

// Example graph
const graph = {
  0: [1, 2],
  1: [3, 4],
  2: [5],
};

bfs(graph, 0); // Output: 0 1 2 3 4 5
`;

const cppCode = `// Breadth-First Search (BFS) in C++

#include <iostream>
#include <vector>
#include <unordered_map>
#include <unordered_set>
#include <queue>
using namespace std;

void bfs(unordered_map<int, vector<int>>& graph, int start) {
  unordered_set<int> visited;
  queue<int> q;

  visited.insert(start);
  q.push(start);

  while (!q.empty()) {
    int v = q.front();
    q.pop();
    cout << v << " ";

    for (int neighbor : graph[v]) {
      if (visited.find(neighbor) == visited.end()) {
        visited.insert(neighbor);
        q.push(neighbor);
      }
    }
  }
}

int main() {
  unordered_map<int, vector<int>> graph;
  graph[0] = {1, 2};
  graph[1] = {3, 4};
  graph[2] = {5};

  bfs(graph, 0); // Output: 0 1 2 3 4 5

  return 0;
}
`;
