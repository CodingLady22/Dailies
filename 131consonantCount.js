/* 
Count consonants
Write a function consonantCount, consonant_count or ConsonantCount that takes a string of English-language text and returns the number of consonants in the string.

Consonants are all letters used to write English excluding the vowels a, e, i, o, u.
*/

function consonantCount(str) {

  let strs = str.toLowerCase()

  let conso = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]
  
  let arr = strs.split('')
  
  return arr.filter(word => conso.includes(word)).length
  
}