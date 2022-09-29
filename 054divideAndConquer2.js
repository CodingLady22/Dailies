/* Divide and Conquer
Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

Return as a number.
*/
function divCon(x){
//   P - 1, array
//   R - add nums, add string integers, subtract both
//   E - assert.strictEqual(divCon([9, 3, '7', '3']), 2);
//   P - use typeOf to differentiate between types
  
  let nums = x.filter(el => typeof(el)=== 'number')
  let strs = x.filter(el => typeof(el)=== 'string')
  
  
   let num = nums.reduce((sum, c) => sum + c, 0)
  let str = strs.reduce((sum,c) => +sum + +c, 0)
  
  return num - str

}