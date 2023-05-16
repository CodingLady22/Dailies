/* 

Task

You're given an array arr. Apply the following algorithm to it:

find intervals of consecutive prime numbers and consecutive non-prime numbers;
replace each such interval with the sum of numbers in it;
if the resulting array is different from the initial one, return to step 1, otherwise return the result.
Input

A non-empty integer array such that:

-10000 ≤ arr[i] ≤ 10000
1 ≤ arr.length ≤ 1000
Output

An integer array.

Examples

For arr = [1, 2, 3, 5, 6, 4, 2, 3] the result should be [21, 5]:

[1, 2, 3, 5, 6, 4, 2, 3] --> [(1), (2 + 3 + 5), (6 + 4), (2 + 3)] --> [1, 10, 10, 5]
[1, 10, 10, 5] --> [(1 + 10 + 10), (5)] --> [21, 5]
For arr = [-3, 4, 5, 2, 0, -10] the result should be [1, 7, -10]:

[-3, 4, 5, 2, 0, -10] --> [(-3 + 4), (5 + 2), (0 + -10)] --> [1, 7, -10]
*/

function simplifiedArray(arr) { 
    let res = [] 
    let cur = null 
    let modified = false 
    for (let i = 0; i < arr.length; i++) { 
        let isPrimeBool = isPrime(arr[i]) 
        if (cur !== isPrimeBool) { 
            res.push(arr[i]) 
            cur = isPrimeBool 
        } else { 
            res[res.length-1] += arr[i] 
            modified = true } 
        } 
        
    return modified ? simplifiedArray(res) : res 
}  

function isPrime(num) { 
    for (let i = 2; i <= num ** 0.5; i++) { 
        if (num % i == 0) return false 
    } 
    
    return num > 1 
}