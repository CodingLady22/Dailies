/* 
Hells Kitchen
Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.

Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.

Rules:

Obviously the words should be Caps, Every word should end with '!!!!', Any letter 'a' or 'A' should become '@', Any other vowel should become '*'.

Examples:
(gordon('What feck damn cake'), 'WH@T!!!! F*CK!!!! D@MN!!!! C@K*!!!!');
(gordon('are you stu pid'), '@R*!!!! Y**!!!! ST*!!!! P*D!!!!'); 
(gordon('i am a chef'), '*!!!! @M!!!! @!!!! CH*F!!!!');  
*/

function gordon(a){

    let upper = a.toUpperCase().replace(/A/g, '@').replace(/[EIOU]/g, '*')

    let split = upper.split(' ').join('!!!! ')

    return split + '!!!!'
}

console.log(gordon('What feck damn cake'));