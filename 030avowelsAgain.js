/* Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.
*/

function isVow(a){
  for (let i = 0; i < a.length; i++) {
    if (a[i] === 97) {
      (a[i] = 'a')
    } else if(a[i] === 101) {
      (a[i] = 'e')
    }else if (a[i] === 105) {
      (a[i] = 'i')
    }else if (a[i] === 111) {
      (a[i] = 'o')
    }else if (a[i] === 117) {
      (a[i] = 'u')
    }
  }
  return a

}