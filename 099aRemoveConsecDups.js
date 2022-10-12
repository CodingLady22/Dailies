/*
Remove consecutive duplicate words
Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

--> "alpha beta gamma delta alpha beta gamma delta"
*/

function removeConsecutiveDuplicates(arr){
    var split = arr.split(' ')
    var array = []
    for(var i = 0; i < split.length; i++){
        if(split[i+1] !== split[i]){
           array.push(split[i])
        }
    }
    var result = array.join(' ')
    return result
}