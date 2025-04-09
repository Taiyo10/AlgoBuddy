import json

def log_info(info):
    """
    Log the information in JSON format with sorted keys.
    In a real application, this could write to a file,
    send messages to a visualization module, or update a GUI component.
    """
    print(json.dumps(info, sort_keys=True))

def binary_search(arr, target):
    """
    Perform binary search on a sorted array while logging each step.
    
    Args:
        arr (list): A sorted list of numbers.
        target (int or float): The value to search for.
    
    Returns:
        int: The index of the target if found; otherwise, -1.
    """
    low = 0
    high = len(arr) - 1

    # Log the initial state of the binary search.
    log_info({
        "action": "binary_search_start",
        "array": arr,
        "target": target,
        "low": low,
        "high": high
    })

    while low <= high:
        mid = (low + high) // 2
        # Log the check event.
        log_info({
            "action": "check",
            "low": low,
            "high": high,
            "mid": mid,
            "value_at_mid": arr[mid]
        })
        
        if arr[mid] == target:
            # Log the found event.
            log_info({
                "action": "found",
                "index": mid,
                "value": arr[mid],
                "low": low,
                "high": high
            })
            # Log the end of binary search.
            log_info({
                "action": "binary_search_end",
                "result": mid
            })
            return mid
        elif arr[mid] < target:
            # Log the decision to search the right half.
            log_info({
                "action": "search_right",
                "mid": mid,
                "value_at_mid": arr[mid],
                "target": target,
                "new_low": mid + 1,
                "high": high
            })
            low = mid + 1
        else:
            # Log the decision to search the left half.
            log_info({
                "action": "search_left",
                "mid": mid,
                "value_at_mid": arr[mid],
                "target": target,
                "low": low,
                "new_high": mid - 1
            })
            high = mid - 1

    # Log the event when target is not found.
    log_info({
        "action": "not_found",
        "target": target,
        "final_low": low,
        "final_high": high
    })
    # Log the end of binary search with result -1.
    log_info({
        "action": "binary_search_end",
        "result": -1
    })
    return -1

if __name__ == "__main__":
    # Input array. Sort it before performing binary search.
    array = [1, 3, 5, 7, 9, 11, 13, 0, 2, 4, 6, 8, 10, 12, 14]
    sorted_array = sorted(array)
    target_value = 1
    index_found = binary_search(sorted_array, target_value)
    # The visualizer can parse the printed JSON logs to update the display.
