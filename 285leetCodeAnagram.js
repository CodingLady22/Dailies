/* 
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
 

Constraints:

1 <= s.length, t.length <= 5 * 104
s and t consist of lowercase English letters.
 

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?
*/

const isAnagram = function(s, t) {
    // first check if they have the same length. If yes, check if the words are the same. sort both words and comepare the strings.

    s.length !== t.length ? false : true

    let sWords = s.split('').sort().join('')
    let tWords = t.split('').sort().join('')

    return tWords === sWords
    
};
console.log(isAnagram("cat", "rat"));
// console.log(isAnagram("anagram", "nagaram"));