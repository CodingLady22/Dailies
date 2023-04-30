/* 
Largest Elements
Write a program that outputs the top n elements from a list.

Example:

largest(2, [7,6,5,4,3,2,1])
// => [6,7]
*/

function largest(n, array) {
  // Find the n highest elements in a list

return array.sort((a, b) => a - b).slice(array.length - n)
    
}

console.log(largest(2, [7,6,5,4,3,2,1]));