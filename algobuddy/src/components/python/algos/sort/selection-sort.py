import json

def log_info(info):
    """
    Log the information in JSON format with sorted keys.
    In a real application, this could write to a file,
    send messages to a visualization module, or update a GUI component.
    """
    print(json.dumps(info, sort_keys=True))

def selection_sort(arr):
    """
    Perform selection sort on an array while logging each step.
    
    Args:
        arr (list): A list of numbers.
    
    Returns:
        list: The sorted list.
    """
    # Log the start of the sort process
    log_info({"action": "start_sort", "array": arr.copy()})
    n = len(arr)
    
    for i in range(n):
        # Log the start of the current iteration
        log_info({"action": "iteration_start", "iteration": i, "subarray": arr[i:]})
        min_index = i
        # Log the initial assumption for the minimum value
        log_info({"action": "select_initial_min", "index": i, "value": arr[i]})
        
        for j in range(i+1, n):
            # Log each comparison between current minimum and the candidate element
            log_info({
                "action": "compare",
                "index1": min_index,
                "value1": arr[min_index],
                "index2": j,
                "value2": arr[j]
            })
            if arr[j] < arr[min_index]:
                min_index = j
                # Log when a new minimum is found
                log_info({
                    "action": "new_min_found",
                    "min_index": min_index,
                    "min_value": arr[min_index]
                })
        
        # Log the swap event before performing it
        log_info({
            "action": "swap",
            "index1": i,
            "value1": arr[i],
            "index2": min_index,
            "value2": arr[min_index],
            "array_before_swap": arr.copy()
        })
        arr[i], arr[min_index] = arr[min_index], arr[i]
        # Log the array state after the swap is complete
        log_info({
            "action": "swap_complete",
            "index1": i,
            "value1": arr[i],
            "index2": min_index,
            "value2": arr[min_index],
            "array_after_swap": arr.copy()
        })
    
    # Log the final sorted array
    log_info({"action": "sorted", "sorted_array": arr.copy()})
    return arr

if __name__ == "__main__":
    # Input array
    arr = [64, 34, 25, 12, 22, 11, 90]
    
    # Perform selection sort
    selection_sort(arr)
    
    # Output the sorted array
    print("Sorted array is:", arr)
