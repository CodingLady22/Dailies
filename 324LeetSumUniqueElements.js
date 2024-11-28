/* 
1748. Sum of Unique Elements
You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

Return the sum of all the unique elements of nums.

Example 1:

Input: nums = [1,2,3,2]
Output: 4
Explanation: The unique elements are [1,3], and the sum is 4.
Example 2:

Input: nums = [1,1,1,1,1]
Output: 0
Explanation: There are no unique elements, and the sum is 0.
Example 3:

Input: nums = [1,2,3,4,5]
Output: 15
Explanation: The unique elements are [1,2,3,4,5], and the sum is 15.
*/

var sumOfUnique = function(nums) {
    /* 
    p - array of nums
    r - number
    e - [1,2,3,2] // 3 + 1 = 4
    p - create the sum var to hold the sum of unique elements
        loop throught nums, check for unique elements using the indexOf and lastIndexOf methods.
        if nums.length === 0, then sum will be 0. Else add only unique elements 
    */

    let sum = 0

    //  getting unique elements
    let uniqueElements = nums.filter((el, idx, a) => a.indexOf(el) === a.lastIndexOf(el))

    // adding up unique elements
    sum = uniqueElements.reduce((a, s) => a + s, 0)

    return sum
};