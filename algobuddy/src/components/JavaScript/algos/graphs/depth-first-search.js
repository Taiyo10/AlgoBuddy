import { logInfo } from '../logger.js';

export function dfs(graph, node, visited = new Set()) {
  // If starting a new DFS, log the start event.
  if (visited.size === 0) {
    logInfo({
      action: "dfs_start",
      start_node: node,
      visited: Array.from(visited)
    });
  }

  // Mark the current node as visited.
  visited.add(node);
  logInfo({
    action: "dfs_visit",
    node: node,
    visited: Array.from(visited)
  });

  // Explore each neighbor of the current node.
  const neighbors = graph[node] || [];
  for (let neighbor of neighbors) {
    logInfo({
      action: "dfs_explore",
      from_node: node,
      to_node: neighbor,
      visited: Array.from(visited)
    });
    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited);
    } else {
      logInfo({
        action: "dfs_skip",
        node: neighbor,
        reason: "already visited",
        visited: Array.from(visited)
      });
    }
  }

  // Log completion of the DFS call for this node.
  logInfo({
    action: "dfs_finish",
    node: node,
    visited: Array.from(visited)
  });

  return visited;
}

// Driver Code (for testing in a Node environment)
if (typeof window === "undefined") {
  const graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': ['F'],
    'F': []
  };

  const visitedNodes = dfs(graph, 'A');
  console.log("Visited nodes in DFS order:", Array.from(visitedNodes));
}
