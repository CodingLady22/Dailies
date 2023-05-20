/* 
Insert dashes
Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

Note that the number will always be non-negative (>= 0).

(insertDash(123456),'123456');
(insertDash(1003567),'1003-567');
*/

function insertDash(num) {
    
    let str = String(num)

    let dashes = ''

    for(let i = 0; i < str.length; i++) {
        if(str[i] % 2 === 1 && str[i + 1] % 2 === 1 ) {
            dashes += str[i] + '-'
        } else {
            dashes += str[i]
        }
    }

    return dashes
}

console.log(insertDash(454793));  //4547-9-3