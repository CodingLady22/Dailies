/*
String array duplicates
In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

For example:

dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

dup(["kelless","keenness"]) = ["keles","kenes"].

Strings will be lowercase only, no spaces. See test cases for more examples.

Good luck!
*/

function dup(s) {
  
  let single = s.join(' ')
  
  let filtered = single.split('').filter((el, i, a) => el !== a[i + 1]).join('')
  
  return filtered.split(' ')
  
};