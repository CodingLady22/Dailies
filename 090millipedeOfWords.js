/* 
Millipede of words
The set of words is given. Words are joined if the last letter of one word and the first letter of another word are the same. Return true if all words of the set can be combined into one word. Each word can and must be used only once. Otherwise return false.

Input

Array of 3 to 7 words of random length. No capital letters.

Example true

Set: excavate, endure, desire, screen, theater, excess, night.
Millipede: desirE EndurE ExcavatE ExcesS ScreeN NighT Theater.

Example false

Set: trade, pole, view, grave, ladder, mushroom, president.
Millipede: presidenT Trade.
*/

function solution(words, millipede = "") {

  if (!words.length) return true;
  const results = [];
  for(let i = 0; i < words.length; i ++){
    const word = words[i];
    const slicedWords = words.slice(0, i).concat(words.slice(i+1))
    if (millipede === "") {
      results.push(solution(slicedWords, word))
    }
    if (word.slice(-1) === millipede[0]) {
      results.push(solution(slicedWords, word + millipede))
    }
    else if (word[0] === millipede.slice(-1)) {
      results.push(solution(slicedWords, millipede + word))
    }
    else {
      results.push(false)
    }
  }
  return results.filter(result => result).length > 0;
  
}
