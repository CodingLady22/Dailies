/* 
Largest pair sum in array

Given a sequence of numbers, find the largest pair sum in the sequence.

For example

[10, 14, 2, 23, 19] -->  42 (= 23 + 19)
[99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
Input sequence contains minimum two elements and every element is an integer.
*/

function largestPairSum (numbers) {
    //TODO: Write your Code here
    
    let highest = numbers.sort((a,b) => b - a).slice(0, 2).reduce((a, s) => a + s, 0)

    return highest

    
  }

console.log(largestPairSum([10, 14, 2, 23, 19]));