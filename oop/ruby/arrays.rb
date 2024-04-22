array = [1, 2, 3, 4, 5] # [1, 2, 3, 4, 5]
arr = array + [] # new array and don't have link to array

array[0] = 6 # array -> [6, 2, 3, 4, 5]
print arr # arr -> [1, 2, 3, 4, 5] 

new_arr = [[1, 2], [3, 4]]
new_arr2 = new_arr + [] 

new_arr[0][0] = 0 # new_arr -> [[0, 2], [3, 4]]
print new_arr2 # [[0, 2], [3, 4]], Yes new_arr2 is the new array but new_arr and new_arr2 have the same link to subarrays [0, 2] and [3, 4]

print arr[1, 3] # This not like slice in the js. This mean from index 1 take 3 numbers: [2, 3, 4]
print arr
print arr[1, 3] = [1, 1] # arr -> [1, 1, 1, 5]. Indexes after index 3 will be removed except for the last index.
print arr