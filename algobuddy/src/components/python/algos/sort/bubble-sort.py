import json

def log_info(info):
    """
    Log the information in JSON format with sorted keys.
    In a real application, this could write to a file,
    send messages to a visualization module, or update a GUI component.
    """
    print(json.dumps(info, sort_keys=True))

def bubble_sort(arr):
    """
    Perform bubble sort on an array while logging each step.

    Args:
        arr (list): A list of numbers.
    
    Returns:
        list: The sorted list.
    """
    n = len(arr)
    # Log the start of the bubble sort
    log_info({"action": "bubble_sort_start", "array": arr.copy()})
    
    for i in range(n):
        # Log the start of a new pass
        log_info({"action": "pass_start", "pass": i, "array": arr.copy()})
        swapped = False
        
        for j in range(0, n - i - 1):
            # Log each comparison event
            log_info({
                "action": "compare",
                "pass": i,
                "index1": j,
                "index2": j + 1,
                "value1": arr[j],
                "value2": arr[j + 1]
            })
            
            if arr[j] > arr[j + 1]:
                # Log before swap with the current array state
                log_info({
                    "action": "swap",
                    "pass": i,
                    "index1": j,
                    "index2": j + 1,
                    "value1": arr[j],
                    "value2": arr[j + 1],
                    "array_before_swap": arr.copy()
                })
                arr[j], arr[j + 1] = arr[j + 1], arr[j]
                swapped = True
                # Log after swap
                log_info({
                    "action": "swap_complete",
                    "pass": i,
                    "index1": j,
                    "index2": j + 1,
                    "array_after_swap": arr.copy()
                })
            else:
                # Log when no swap is needed
                log_info({
                    "action": "no_swap",
                    "pass": i,
                    "index1": j,
                    "index2": j + 1,
                    "value1": arr[j],
                    "value2": arr[j + 1]
                })
        
        # Log the end of this pass with the current state of the array
        log_info({"action": "pass_end", "pass": i, "array": arr.copy()})
        
        # Early termination if no swap occurred in the inner loop
        if not swapped:
            log_info({"action": "early_termination", "pass": i, "array": arr.copy()})
            break
    
    # Log the final sorted array
    log_info({"action": "bubble_sort_end", "sorted_array": arr.copy()})
    return arr

if __name__ == "__main__":
    # Input array
    arr = [64, 34, 25, 12, 22, 11, 90]
    
    # Perform bubble sort
    bubble_sort(arr)
    
    # Output the sorted array
    print("Sorted array is:", arr)
