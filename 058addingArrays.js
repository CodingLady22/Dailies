/* 
Array plus array
I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
*/


function arrayPlusArray(arr1, arr2) {
  
  let arr3 = arr1.concat(arr2)
  
  return arr3.reduce((sum, c) => sum + c, 0)

}