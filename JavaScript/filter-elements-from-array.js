// Goal: Given an integer array and a filtering function, return a new array with fewer or equal number of elements. Solve without Array.filter method

// Initialize ans to an empty array, for loop to iterate over each element in the array, if fn(arr[i], i) is true, the element is added to the ans array with push method, the new array is then returned with elements that meet the criteria

var filter = function(arr, fn) {
    var ans = [];

    for (var i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            ans.push(arr[i]);
        }
    }
    return ans;
}