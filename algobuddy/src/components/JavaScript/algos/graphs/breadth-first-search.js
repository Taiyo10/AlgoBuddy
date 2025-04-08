export function bfs(graph, start) {
  const visited = new Set();
  const queue = [];
  const logs = [];

  logs.push({
    action: "bfs_start",
    start_node: start,
    queue: [start],
    visited: Array.from(visited),
    graph: JSON.parse(JSON.stringify(graph))
  });

  queue.push(start);
  visited.add(start);

  logs.push({
    action: "enqueue",
    node: start,
    queue: [...queue],
    visited: Array.from(visited),
    graph: JSON.parse(JSON.stringify(graph))
  });

  const visitOrder = [];

  while (queue.length > 0) {
    const current = queue.shift();
    visitOrder.push(current);
    logs.push({
      action: "dequeue",
      node: current,
      queue: [...queue],
      visited: Array.from(visited),
      graph: JSON.parse(JSON.stringify(graph))
    });

    const neighbors = graph[current] || [];
    neighbors.forEach(neighbor => {
      logs.push({
        action: "explore",
        from_node: current,
        to_node: neighbor,
        queue: [...queue],
        visited: Array.from(visited),
        graph: JSON.parse(JSON.stringify(graph))
      });

      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
        logs.push({
          action: "enqueue",
          node: neighbor,
          queue: [...queue],
          visited: Array.from(visited),
          graph: JSON.parse(JSON.stringify(graph))
        });
      } else {
        logs.push({
          action: "skip",
          node: neighbor,
          reason: "already visited",
          queue: [...queue],
          visited: Array.from(visited),
          graph: JSON.parse(JSON.stringify(graph))
        });
      }
    });
  }

  logs.push({
    action: "bfs_complete",
    visit_order: [...visitOrder],
    visited: Array.from(visited),
    graph: JSON.parse(JSON.stringify(graph))
  });

  return { visitOrder, logs };
}

// Driver Code (for testing purposes)
if (typeof window === "undefined") {
  const graph = {
    'A': ['B', 'C'],
    'B': ['D', 'E'],
    'C': ['F'],
    'D': [],
    'E': ['F'],
    'F': []
  };

  const { visitOrder, logs } = bfs(graph, 'A');
  console.log("BFS visit order:", visitOrder);
  console.log("Logs:", logs);
}
