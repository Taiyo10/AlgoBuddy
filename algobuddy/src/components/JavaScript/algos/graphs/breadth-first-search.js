import { logInfo } from '../logger.js';

export function bfs(graph, start) {
  const visited = new Set();
  const queue = [];

  // Log the start of BFS.
  logInfo({
    action: "bfs_start",
    start_node: start,
    queue: [start],
    visited: Array.from(visited)
  });

  // Enqueue the start node and mark it as visited.
  queue.push(start);
  visited.add(start);

  // Log the enqueue event for the starting node.
  logInfo({
    action: "enqueue",
    node: start,
    queue: [...queue],
    visited: Array.from(visited)
  });

  const visitOrder = [];

  while (queue.length > 0) {
    // Dequeue the next node.
    const current = queue.shift();
    visitOrder.push(current);
    logInfo({
      action: "dequeue",
      node: current,
      queue: [...queue],
      visited: Array.from(visited)
    });

    // Explore each neighbor of the current node.
    const neighbors = graph[current] || [];
    neighbors.forEach(neighbor => {
      logInfo({
        action: "explore",
        from_node: current,
        to_node: neighbor,
        queue: [...queue],
        visited: Array.from(visited)
      });
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push(neighbor);
        // Log when a neighbor is enqueued.
        logInfo({
          action: "enqueue",
          node: neighbor,
          queue: [...queue],
          visited: Array.from(visited)
        });
      } else {
        // Log when a neighbor is skipped because it's already visited.
        logInfo({
          action: "skip",
          node: neighbor,
          reason: "already visited",
          queue: [...queue],
          visited: Array.from(visited)
        });
      }
    });
  }

  // Log the final visit order.
  logInfo({
    action: "bfs_complete",
    visit_order: visitOrder,
    visited: Array.from(visited)
  });

  return visitOrder;
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

  const visitOrder = bfs(graph, 'A');
  console.log("BFS visit order:", visitOrder);
}
