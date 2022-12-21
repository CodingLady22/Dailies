/* 
Transpose two strings in an array
You will be given an array that contains two strings. Your job is to create a function that will take those two strings and transpose them, so that the strings go from top to bottom instead of left to right.

e.g. transposeTwoStrings(['Hello','World']);

should return

H W  
e o  
l r  
l l  
o d
A few things to note:

There should be one space in between the two characters
You don't have to modify the case (i.e. no need to change to upper or lower)
If one string is longer than the other, there should be a space where the character would be
*/

function transposeTwoStrings (arr) {
  
  let result = ''; 
  let counter = 0; 
  while(arr[0][counter] || arr[1][counter]) { 
    result += arr[0][counter] || ' '; 
    result += ' '; // if you want a space in between 
    result += arr[1][counter] || ' '; 
    result += '\n' 
    counter++ 
  } 
  return result.slice(0, -1)
  
}