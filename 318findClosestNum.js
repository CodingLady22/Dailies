/* 
Given an integer array nums of size n, return the number with the value closest to 0 in nums. If there are multiple answers, return the number with the largest value.

Example 1:

Input: nums = [-4,-2,1,4,8]
Output: 1
Explanation:
The distance from -4 to 0 is |-4| = 4.
The distance from -2 to 0 is |-2| = 2.
The distance from 1 to 0 is |1| = 1.
The distance from 4 to 0 is |4| = 4.
The distance from 8 to 0 is |8| = 8.
Thus, the closest number to 0 in the array is 1.
Example 2:

Input: nums = [2,-1,1]
Output: 1
Explanation: 1 and -1 are both the closest numbers to 0, so 1 being larger is returned.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {

    // p - compare each number with the others in the array to find the smallest number.

    // let closestNum = nums[0]


    // for (let num of nums) {
    //     if(Math.abs(num) < Math.abs(closestNum) || Math.abs(num) === Math.abs(closestNum) && num > closestNum) {
    //         closestNum = num
    //     }
    // }

    // return closestNum

    let left = 0, right = nums.length - 1, small = nums[0]

    while (left <= right) {
        if(Math.abs(nums[left]) < Math.abs(small) || Math.abs(nums[left]) === Math.abs(small) && nums[left] > small) {
            small = nums[left]

        } 
        
        if (Math.abs(nums[right]) < Math.abs(small) || Math.abs(nums[right]) === Math.abs(small) && nums[right] > small) {
            small = nums[right]
        }

        left++
        right--
    }

    return small

};

console.log(findClosestNumber([2,-1,1]));
console.log(findClosestNumber([-4,-2,1,4,8]));
console.log("First: ", findClosestNumber([-100000,-100000])); // -100000
console.log("Third: ", findClosestNumber([-10,10,10,10]));
