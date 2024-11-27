/* 
Group Anagrams

Given an array of strings strs, group the 
anagrams
 together. You can return the answer in any order.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]

Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Explanation:

There is no string in strs that can be rearranged to form "bat".
The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
Example 2:

Input: strs = [""]

Output: [[""]]

Example 3:

Input: strs = ["a"]

Output: [["a"]]
*/

var groupAnagrams = function(strs) {

    // p - create a new map, loop thru strs
    // sort strs and set each unique sorted str as a key
    // if map doesn't have key, set the key with an empty arr as it's value.
    // if map has key that matches the str, push that str into the arr value of the key

    let map = new Map()

    for(let i = 0; i < strs.length; i++) {
        let value = strs[i]
        let key = value.split('').sort().join('')

        if(!map.has(key)) {
            map.set(key, [])
        }

        map.get(key).push(value)
    }

    return [...map.values()]
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
console.log(groupAnagrams(["a"]));
console.log(groupAnagrams([""]));
