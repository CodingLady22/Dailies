/* 
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

Example 1:

Input: s = "egg", t = "add"
Output: true
Example 2:

Input: s = "foo", t = "bar"
Output: false
Example 3:

Input: s = "paper", t = "title"
Output: true
*/

var isIsomorphic = function(s, t) {
    // P - if lengths are not the same, return false. if s and t are the same, return true. 
    // P - make 2 empty obj, loop through one parameter (b/c they have same length) then assign 1 var to each parameter. if the objs are empty or are falsy, add the values of the opposite parameter. Return true at the end.

    if(s.length !== t.length) {
        return false
    }

    if(s === t ) {
        return true
    }

    let mapS = {}, mapT = {}

    for(let i = 0; i < s.length; i++) {
        const letterS = s[i]
        const letterT = t[i]

        if(!mapT[letterT]) {
            mapT[letterT] = letterS
        }

        if(!mapS[letterS]) {
            mapS[letterS] = letterT
        }

        if(mapS[letterS] !== letterT || mapT[letterT] !== letterS) {
            return false
        }
    }

    return true

};

console.log(isIsomorphic("paper", "title"));