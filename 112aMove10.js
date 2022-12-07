/* 
Move 10
Move every letter in the provided string forward 10 letters through the alphabet.

If it goes past 'z', start again at 'a'.

Input will be a string with length > 0.

(moveTen("testcase"), "docdmkco");
(moveTen("codewars"), "mynogkbc");
(moveTen("exampletesthere"), "ohkwzvodocdrobo")
*/

function moveTen(s) {
    return a = "abcdefghijklmnopqrstuvwxyz", s.replace(/([a-z])/g, v => a[(a.indexOf(v) + 10) % 26]);
}