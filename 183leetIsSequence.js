/* 
Is Sequence
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

 

Example 1:

Input: s = "abc", t = "ahbgdc"
Output: true
Example 2:

Input: s = "axc", t = "ahbgdc"
Output: false
*/

let isSubsequence = function(s, t) {

    let w1 = 0
    let w2 = 0

    while( w1 < s.length && w2 < t.length) {
        if(s[w1] === t[w2]){
            w1++
            w2++
        } else {
            w2++
        }
    }
    return w1 === s.length

};

// console.log(isSubsequence("axc", "ahbgdc"));
console.log(isSubsequence("bb", "thacbgh"));
// console.log(isSubsequence("abc", "ahbgdc"));
// console.log(isSubsequence("acb", "ahbgdc"));