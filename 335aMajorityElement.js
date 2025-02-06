/* 
Majority Element

Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 

Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
 

Follow-up: Could you solve the problem in linear time and in O(1) space?
*/

var majorityElement = function(nums) {

    //! Brute force
    let map = {}

    for(let i = 0; i < nums.length; i++) {
        if(map[nums[i]] !== undefined) {
            map[nums[i]] += 1
        } else {
            map[nums[i]] = 1
        }
    }

    const maxKey = Object.entries(map).sort((a, b) => b[1] - a[1])[0][0]

    return Number(maxKey)
};

console.log(majorityElement([3,2,3])); // 3
console.log(majorityElement([2,2,1,1,1,2,2] )); //2
