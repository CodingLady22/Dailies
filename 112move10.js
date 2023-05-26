/* 
Move 10
Move every letter in the provided string forward 10 letters through the alphabet.

If it goes past 'z', start again at 'a'.

Input will be a string with length > 0.

(moveTen("testcase"), "docdmkco");
(moveTen("codewars"), "mynogkbc");
(moveTen("exampletesthere"), "ohkwzvodocdrobo")
*/

function moveTen(s){

    let str = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'
  
  let split = s.split('').map(alpha => str.indexOf(alpha) + 10)
  
  return split.map(el => str[el]).join('')

}

console.log(moveTen('testcase'));
