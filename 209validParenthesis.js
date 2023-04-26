/* 
Valid Parentheses
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples

"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints

0 <= length of input <= 100

All inputs will be strings, consisting only of characters ( and ).
Empty strings are considered balanced (and therefore valid), and will be tested.
For languages with mutable strings, the inputs should not be mutated.

Protip: If you are trying to figure out why a string of parentheses is invalid, paste the parentheses into the code editor, and let the code highlighting show you!
*/

function validParentheses(parenStr) {

     let count = 0;
  for (let i = 0; i < parenStr.length; i++) {
    if (parenStr[i] == '(') {
        count++;
    } else {
        count--;
    } 
    // once the function returns a -1, it stops immediately and returns fals because that means that the parenthesis is not balanced. 
    if (count < 0) return false;
  }
    if (count < 0) return false;

  
  return count == 0;

  
}
console.log(validParentheses("())(()"));
// console.log(validParentheses(")("));
// console.log(validParentheses(")(()))"));
