/* 
Eliminate the intruders! Bit manipulation

Task
You are given a string representing a number in binary. Your task is to delete all the unset bits in this string and return the corresponding number (after keeping only the '1's).

In practice, you should implement this function:

function eliminateUnsetBits(number);
Examples
eliminateUnsetBits("11010101010101") ->  255 (= 11111111)
eliminateUnsetBits("111") ->  7
eliminateUnsetBits("1000000") -> 1
eliminateUnsetBits("000") -> 0
*/

function eliminateUnsetBits(number) {

    let allZeros = [...number].every(el => el === '0')
    
    let noZero = [...number].filter(el => el === '1')

    let allOne = noZero.join('')

    console.log(allOne);

    return allZeros ? 0 : parseInt(allOne, 2)

}

// console.log(eliminateUnsetBits("000"));
// console.log(eliminateUnsetBits("111"));
console.log(eliminateUnsetBits("1000000"));
// console.log(eliminateUnsetBits("11010101010101"));