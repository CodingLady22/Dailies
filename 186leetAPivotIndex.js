/* 
Pivot Index
Given an array of integers nums, calculate the pivot index of this array.

The pivot index is the index where the sum of all the numbers strictly to the left of the index is equal to the sum of all the numbers strictly to the index's right.

If the index is on the left edge of the array, then the left sum is 0 because there are no elements to the left. This also applies to the right edge of the array.

Return the leftmost pivot index. If no such index exists, return -1.

 

Example 1:

Input: nums = [1,7,3,6,5,6]
Output: 3
Explanation:
The pivot index is 3.
Left sum = nums[0] + nums[1] + nums[2] = 1 + 7 + 3 = 11
Right sum = nums[4] + nums[5] = 5 + 6 = 11
Example 2:

Input: nums = [1,2,3]
Output: -1
Explanation:
There is no index that satisfies the conditions in the problem statement.
Example 3:

Input: nums = [2,1,-1]
Output: 0
Explanation:
The pivot index is 0.
Left sum = 0 (no elements to the left of index 0)
Right sum = nums[1] + nums[2] = 1 + -1 = 0
*/



let pivotIndex = function(nums) {

    let left = 0,
    right = nums.reduce((s,a) => s + a, 0)

    for(i = 0; i < nums.length; i++) {
        if((right - nums[i])/2 === left){
            return i
        }
        left += nums[i]
    }
    
    return -1
}

// right = 28. ie total
// when nums[i] = 1 
// 28 - 1 = 27/2 = 13.5 === 0
// left = 1
// when nums[i] = 7
// 28 - 7 = 21/2 = 11.5 === 1
// left = 8
// when nums[i] = 3
// 28 - 3 = 25/2 = 12.5 === 8
// left = 11
// when nums[i] = 6
// 28 - 6 = 22/2 = 11 === 11
// return i, ie 3, which is the index of 6


console.log(pivotIndex([1,7,3,6,5,6]));