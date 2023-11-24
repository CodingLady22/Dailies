/*
Longest Consecutive Sequence

Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

 

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9
 

Constraints:

0 <= nums.length <= 105
-109 <= nums[i] <= 109 
*/

const longestConsecutive = function(nums) {

    // if(nums.length === 0) {
    //     return 0
    // }

    let uniqueNums = new Set(nums);

    let longest = 0;

    for(let num of uniqueNums) {
        if(!uniqueNums.has(num - 1)) {
            let currNum = num;
            let currLength = 1;

            while(uniqueNums.has(currNum + 1)) {
                currNum++;
                currLength++;
            }

            longest = Math.max(longest, currLength)
        }
    }

    return longest
}

console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]));