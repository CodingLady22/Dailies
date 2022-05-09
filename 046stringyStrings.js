/* Stringy strings

write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.*/

function stringy(size) {
  
    let str = '';
  
  for (let i = 1; i <= size; i++) {
  // loop by starting with 1 until you get to size number
    str = str + i%2  
  // if 1 is less than or equal to size, string = str + 1 % 2, which is 1  
  // if 2 is less than or equal to size, string = str + 1 % 2, which is 0  
  }
  return str;
}