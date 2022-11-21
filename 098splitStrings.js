/*
Split Strings
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
* 'abcdefg' => ['ab', 'cd', 'ef', 'g_']
*/

function solution(str){

    let stored = []
    let arr = str.split('')

    for(let i = 0; i < arr.length; i+=2) {    
        if (arr[i + 1]) {
            stored.push(arr[i] + arr[i+1])
        } else {
            stored.push(arr[i]+'_')
        }
    }
    return stored
}

console.log(solution('abcdefg'));