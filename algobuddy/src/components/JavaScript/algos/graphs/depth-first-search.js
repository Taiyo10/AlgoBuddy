export function dfSearch(graph, node, visited = new Set(), logs = []) {
  // If starting a new DFS, log the start event.
  if (visited.size === 0) {
    logs.push({
      action: "dfs_start",
      start_node: node,
      visited: Array.from(visited),
      graph: JSON.parse(JSON.stringify(graph)) // deep clone for logging
    });
  }

  visited.add(node);
  logs.push({
    action: "dfs_visit",
    node: node,
    visited: Array.from(visited),
    graph: JSON.parse(JSON.stringify(graph))
  });

  const neighbors = graph[node] || [];
  for (let neighbor of neighbors) {
    logs.push({
      action: "dfs_explore",
      from_node: node,
      to_node: neighbor,
      visited: Array.from(visited),
      graph: JSON.parse(JSON.stringify(graph))
    });

    if (!visited.has(neighbor)) {
      dfs(graph, neighbor, visited, logs);
    } else {
      logs.push({
        action: "dfs_skip",
        node: neighbor,
        reason: "already visited",
        visited: Array.from(visited),
        graph: JSON.parse(JSON.stringify(graph))
      });
    }
  }

  logs.push({
    action: "dfs_finish",
    node: node,
    visited: Array.from(visited),
    graph: JSON.parse(JSON.stringify(graph))
  });

  return { visited, logs };
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

  const { visited, logs } = dfSearch(graph, 'A');
  console.log("Visited nodes in DFS order:", Array.from(visited));
  console.log("Logs:", logs);
}
