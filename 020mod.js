/* 36 
Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.
*/

function isDivisible(n, x, y) {
  return !(n%x||n%y)
}