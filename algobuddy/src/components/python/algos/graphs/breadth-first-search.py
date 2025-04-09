import json
from collections import deque

def log_info(info):
    """
    Log the information in JSON format with sorted keys.
    In a real application, this could write to a file,
    send messages to a visualization module, or update a GUI component.
    """
    print(json.dumps(info, sort_keys=True))

def bfs(graph, start):
    """
    Perform breadth-first search (BFS) on a graph while logging each step.
    
    Args:
        graph (dict): A dictionary representing the adjacency list of the graph.
        start (str): The starting node for BFS.
    
    Returns:
        list: The list of nodes in the order they were visited.
    """
    visited = set()
    queue = deque()
    
    # Log the start of BFS
    log_info({
        "action": "bfs_start",
        "start_node": start,
        "queue": [start],
        "visited": list(visited)
    })
    
    # Enqueue the start node and mark it as visited
    queue.append(start)
    visited.add(start)
    
    # Log the enqueue event for the starting node
    log_info({
        "action": "enqueue",
        "node": start,
        "queue": list(queue),
        "visited": list(visited)
    })
    
    visit_order = []
    
    while queue:
        # Dequeue the next node
        current = queue.popleft()
        visit_order.append(current)
        log_info({
            "action": "dequeue",
            "node": current,
            "queue": list(queue),
            "visited": list(visited)
        })
        
        # Explore each neighbor of the current node
        for neighbor in graph.get(current, []):
            log_info({
                "action": "explore",
                "from_node": current,
                "to_node": neighbor,
                "queue": list(queue),
                "visited": list(visited)
            })
            if neighbor not in visited:
                visited.add(neighbor)
                queue.append(neighbor)
                # Log when a neighbor is enqueued
                log_info({
                    "action": "enqueue",
                    "node": neighbor,
                    "queue": list(queue),
                    "visited": list(visited)
                })
            else:
                # Log when a neighbor is skipped because it's already visited
                log_info({
                    "action": "skip",
                    "node": neighbor,
                    "reason": "already visited",
                    "queue": list(queue),
                    "visited": list(visited)
                })
    
    # Log the final visit order
    log_info({
        "action": "bfs_complete",
        "visit_order": visit_order,
        "visited": list(visited)
    })
    
    return visit_order

if __name__ == "__main__":
    # Define a sample graph as an adjacency list.
    graph = {
        'A': ['B', 'C'],
        'B': ['D', 'E'],
        'C': ['F'],
        'D': [],
        'E': ['F'],
        'F': []
    }
    
    # Perform BFS starting at node 'A'
    visit_order = bfs(graph, 'A')
    
    # Output the order in which nodes were visited.
    print("BFS visit order:", visit_order)
