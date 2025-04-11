import json

def log_info(info):
    """
    Log the information in JSON format with sorted keys.
    In a real application, this could write to a file,
    send messages to a visualization module, or update a GUI component.
    """
    print(json.dumps(info, sort_keys=True))

def search(arr, N, x):
    # Log the start of the search process.
    log_info({
        "action": "start_search",
        "target": x,
        "array": arr.copy(),
        "length": N
    })
    
    for i in range(0, N):
        # Log the check at the current index.
        log_info({
            "action": "check",
            "index": i,
            "value": arr[i]
        })
        if arr[i] == x:
            # Log when the target is found.
            log_info({
                "action": "found",
                "index": i,
                "value": arr[i]
            })
            log_info({
                "action": "end_search",
                "result": i
            })
            return i
    
    # Log if the target was not found.
    log_info({
        "action": "not_found",
        "target": x
    })
    log_info({
        "action": "end_search",
        "result": -1
    })
    return -1

# Driver Code
if __name__ == "__main__":
    arr = [1, 3, 5, 7, 9, 11, 13, 0, 2, 4, 6, 8, 10, 12, 14]
    sorted_array = sorted(arr)
    x = 10
    N = len(sorted_array)

    # Function call
    result = search(sorted_array, N, x)
    if result == -1:
        print("Element is not present in array")
    else:
        print("Element is present at index", result)
