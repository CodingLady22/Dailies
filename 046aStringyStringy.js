/* 61 
Stringy strings
write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.*/

function stringy(size) {
let str ='10'
  return str.repeat(size).slice(0, size)
  
 /*
  This works because slice 0 will cut out any extra repeats and the required number.
  eg, '10'.repeat(size) without slice and size being 5 will give '1010101010' 
  WHILE 
   eg, '10'.repeat(size).slice(0, size) with slice and size being 5 will give '10101' 
   */
}