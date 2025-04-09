import json

def log_info(info):
    """
    Log the information in JSON format.
    In a real application, this could write to a file,
    send messages to a visualization module, or update a GUI component.
    """
    # For this example, we simply print the JSON string.
    print(json.dumps(info))

def insertion_sort(arr):
    # Log the initial state of the array
    log_info({"action": "start_sort", "array": arr.copy()})
    
    # Start from index 1, since the element at index 0 is trivially sorted.
    for i in range(1, len(arr)):
        key = arr[i]
        log_info({"action": "select_key", "index": i, "key": key, "array": arr.copy()})
        j = i - 1
        
        # Compare key with each element on its left
        while j >= 0 and key < arr[j]:
            log_info({
                "action": "compare",
                "key": key,
                "key_index": i,
                "compare_index": j,
                "compare_value": arr[j]
            })
            # Shift the element one position to the right
            arr[j + 1] = arr[j]
            log_info({
                "action": "shift",
                "from_index": j,
                "to_index": j + 1,
                "shifted_value": arr[j],
                "array_state": arr.copy()
            })
            j -= 1
        
        # Insert the key at its correct position
        arr[j + 1] = key
        log_info({
            "action": "insert",
            "insert_index": j + 1,
            "inserted_key": key,
            "array_state": arr.copy()
        })
    
    # Log the final sorted array
    log_info({"action": "sorted", "sorted_array": arr.copy()})

if __name__ == "__main__":
    # Input array
    arr = [64, 34, 25, 12, 22, 11, 90]
    
    # Perform insertion sort
    insertion_sort(arr)
    
    # Output the sorted array
    print("Sorted array is:", arr)
