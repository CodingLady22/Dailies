/* 
//* Which are in?
Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.

Example 1:

a1 = ["arp", "live", "strong"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns ["arp", "live", "strong"]

Example 2:

a1 = ["tarp", "mice", "bull"]

a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

returns []

Notes:

Arrays are written in "general" notation. See "Your Test Cases" for examples in your language.
In Shell bash a1 and a2 are strings. The return is a string where words are separated by commas.
Beware: In some languages r must be without duplicates.
*/

function inArray(array1,array2){
//   P - compare both arrays, check if stings of 2nd array includes of strings in first array, sort the included strings.

    let arr3 = []
    for(let i = 0; i < array2.length; i++) {
        for(let j = 0; j < array1.length; j++) {
            if(array2[i].includes(array1[j]) && !arr3.includes(array1[j])) {
                arr3.push(array1[j])
            }
        }
    }

    return arr3.sort()

}
console.log(inArray(["arp", "live", "strong"],["lively", "alive", "harp", "sharp", "armstrong"]));