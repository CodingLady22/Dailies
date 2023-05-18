/* 

Grouping in strings
In this kata you have to find whether same elements of the string are grouped together.

Example


Input	Output
112233	true
11223311	false

Explanation

In first example same elements are grouped together: (11)(22)(33), hence it should return true 
In the second example there are two different groups of 1's: (11)2233(11), hence it should return false
*/

const isConsecutive = (str) => {
//Let's do it...
    // P - check if numbers are equal or ascending.

    for(let i = 0; i < str.length; i++) {
         if (str.lastIndexOf(i) - str.indexOf(i) !== [...str].filter(el => el === str[i]).length - 1) {
      return false;
    } else {
      return true;
    }
    };

}
// console.log(isConsecutive("11223311"));
// console.log(isConsecutive("112233"));
console.log(isConsecutive("1222334556667"));