/* 55 Correct the mistakes of the character recognition software
Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

S is misinterpreted as 5
O is misinterpreted as 0
I is misinterpreted as 1
The test cases contain numbers only by mistake.
*/

function correct(string)
{

let array = [];
  
for(let i = 0; i < string.length; i++){

if(string[i] === '5'){
array.push('S');
} else if(string[i] === '0'){
array.push('O');
} else if (string[i] === '1'){
array.push('I');
} else {
array.push(string[i]);
}
  
}

  
  return array.join("");

}