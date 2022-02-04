/* Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

If they are, change the array value to a string of that vowel.

Return the resulting array.
*/
function isVow(a){
  let x = []
  for (let i = 0; i < a.length; i++) {
    if (a[i] === 97) {
      x.push('a')
    } else if(a[i] === 101) {
      x.push('e')
    }else if (a[i] === 105) {
      x.push('i')
    }else if (a[i] === 111) {
      x.push('o')
    }else if (a[i] === 117) {
      x.push('u')
    }else {
      x.push(a[i])
    }
  }
  return x;

}