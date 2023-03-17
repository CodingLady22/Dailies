/* 
Longest Common Prefix
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/

let longestCommonPrefix = function(strs) {

    let shortest = strs[0],
    count = ''
    
    for(let i = 1; i < strs.length; i++) {
        if( strs[i].length < shortest.length ){
            shortest = strs[i]
        }
    }
    
    for(let i = 0; i < shortest.length; i++) {
        for(let j = 0; j < strs.length; j++) {
            if(shortest[i] !== strs[j][i]) {
                return count
            }
        }
        count += shortest[i]
    }

    return count
};

// console.log(longestCommonPrefix(["dog","racecar","car"]));
console.log(longestCommonPrefix(["flower","flow","flight"]));