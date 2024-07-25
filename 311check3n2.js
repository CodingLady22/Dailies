/* 
Check three and two

Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran), check if the array contains three and two of the same values.

Examples
["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
["a", "a", "a", "a", "a"] ==> false // 5x "a"
*/

function checkThreeAndTwo(array) {
//   R - boolean
//   P - count the number of values
  
  let mapped = {}
  
  for (let i = 0; i < array.length; i++) {
    let newProp = array[i]
    if(!mapped.hasOwnProperty(newProp)) {
        mapped[newProp] = 1
    } else {
        mapped[newProp] += 1
    }
  }

let newArr = Object.values(mapped)

return newArr.includes(3) && newArr.includes(2)
}

// console.log(checkThreeAndTwo(["a", "a", "a", "b", "b"]));
console.log(checkThreeAndTwo(["a", "b", "c", "b", "c"]));