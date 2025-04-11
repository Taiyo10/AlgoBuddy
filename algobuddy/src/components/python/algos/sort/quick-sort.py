import json

def log_info(info):
    """
    Log the information in JSON format with sorted keys.
    In a real application, this could write to a file,
    send messages to a visualization module, or update a GUI component.
    """
    print(json.dumps(info, sort_keys=True))

def quick_sort(arr, low, high):
    """
    Perform quick sort on an array while logging each step.
    
    Args:
        arr (list): A list of numbers.
        low (int): Starting index of the subarray.
        high (int): Ending index of the subarray.
    """
    # Log the quick sort call with the current subarray.
    log_info({
        "action": "quick_sort_call",
        "low": low,
        "high": high,
        "subarray": arr[low:high+1]
    })
    
    if low < high:
        # Partition the array and get the pivot index.
        pi = partition(arr, low, high)
        
        # Log the completion of partitioning.
        log_info({
            "action": "partition_complete",
            "pivot_index": pi,
            "subarray_after_partition": arr[low:high+1]
        })
        
        # Recursively sort the left subarray.
        quick_sort(arr, low, pi - 1)
        # Recursively sort the right subarray.
        quick_sort(arr, pi + 1, high)
    else:
        # If the subarray has one or no element, no action is needed.
        log_info({
            "action": "quick_sort_no_action",
            "low": low,
            "high": high,
            "subarray": arr[low:high+1]
        })

def partition(arr, low, high):
    """
    Partition the array and return the pivot index.
    
    Args:
        arr (list): A list of numbers.
        low (int): Starting index of the subarray.
        high (int): Ending index of the subarray.
    
    Returns:
        int: The pivot index.
    """
    pivot = arr[high]
    # Log the chosen pivot.
    log_info({
        "action": "pivot_chosen",
        "pivot_index": high,
        "pivot_value": pivot,
        "subarray": arr[low:high+1]
    })
    
    i = low - 1
    
    for j in range(low, high):
        # Log the comparison event.
        log_info({
            "action": "compare",
            "current_index": j,
            "current_value": arr[j],
            "pivot_index": high,
            "pivot_value": pivot,
            "subarray": arr[low:high+1]
        })
        
        if arr[j] < pivot:
            i += 1
            # Capture values before the swap.
            swap_from = arr[i]
            swap_to = arr[j]
            # Log the swap event.
            log_info({
                "action": "swap",
                "indices": [i, j],
                "values": [swap_from, swap_to],
                "subarray_before_swap": arr[low:high+1]
            })
            arr[i], arr[j] = arr[j], arr[i]
        else:
            # Log a no-swap event when no swap is performed.
            log_info({
                "action": "no_swap",
                "current_index": j,
                "current_value": arr[j],
                "pivot_value": pivot,
                "reason": "current_value not less than pivot",
                "subarray": arr[low:high+1]
            })
    
    # Final swap to place the pivot in its correct position.
    swap_from = arr[i + 1]
    swap_to = arr[high]
    log_info({
        "action": "swap",
        "indices": [i + 1, high],
        "values": [swap_from, swap_to],
        "subarray_before_swap": arr[low:high+1]
    })
    arr[i + 1], arr[high] = arr[high], arr[i + 1]
    
    return i + 1

if __name__ == "__main__":
    # Input array.
    arr = [64, 34, 25, 12, 22, 11, 90]
    
    # Perform quick sort.
    quick_sort(arr, 0, len(arr) - 1)
    
    # Output the sorted array.
    print("Sorted array is:", arr)
