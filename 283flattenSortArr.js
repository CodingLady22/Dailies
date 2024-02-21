/* Flatten and sort an array

Challenge:

Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

flattenAndSort([]), []);
flattenAndSort([[], []]), []);
flattenAndSort([[], [1]]), [1]);
flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]), [1, 2, 3, 4, 5, 6, 100]);


*/

function flattenAndSort(array) {
    // Good luck, brave code warrior!
    return array.flat().sort((a, b) => a - b)
    
  }

  console.log(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]));