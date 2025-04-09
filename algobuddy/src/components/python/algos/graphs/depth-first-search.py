import json

def log_info(info):
    """
    Log the information in JSON format with sorted keys.
    In a real application, this could write to a file,
    send messages to a visualization module, or update a GUI component.
    """
    print(json.dumps(info, sort_keys=True))

def dfs(graph, node, visited=None):
    """
    Perform a depth-first search (DFS) on a graph while logging each step.
    
    Args:
        graph (dict): A dictionary representing the adjacency list of the graph.
        node (str): The starting node for DFS.
        visited (set): A set of visited nodes.
    
    Returns:
        set: The set of visited nodes.
    """
    if visited is None:
        visited = set()
        # Log the starting of DFS
        log_info({
            "action": "dfs_start",
            "start_node": node,
            "visited": list(visited)
        })

    visited.add(node)
    # Log that we are visiting the node
    log_info({
        "action": "dfs_visit",
        "node": node,
        "visited": list(visited)
    })

    # Explore each neighbor of the current node
    for neighbor in graph.get(node, []):
        log_info({
            "action": "dfs_explore",
            "from_node": node,
            "to_node": neighbor,
            "visited": list(visited)
        })
        if neighbor not in visited:
            dfs(graph, neighbor, visited)
        else:
            log_info({
                "action": "dfs_skip",
                "node": neighbor,
                "reason": "already visited",
                "visited": list(visited)
            })
    
    # Log that the DFS call for this node is complete
    log_info({
        "action": "dfs_finish",
        "node": node,
        "visited": list(visited)
    })
    return visited

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
    
    # Perform DFS starting at node 'A'
    visited_nodes = dfs(graph, 'A')
    
    # Output the visited nodes.
    print("Visited nodes in DFS order:", list(visited_nodes))
