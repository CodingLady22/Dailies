/* 
The alphabet product

I have four positive integers, A, B, C and D, where A < B < C < D. The input is a list of the integers A, B, C, D, AxB, BxC, CxD, DxA in some order. Your task is to return the value of D.

Test - ( alphabet([2,3,4,1,12,6,2,4]), 4 );
Test - ( alphabet([2,6,7,3,14,35,15,5]), 7 );
Test - ( alphabet([20,10,6,5,4,3,2,12]), 5 );
Test - ( alphabet([2,6,18,3,6,7,42,14]), 7 );
Test - ( alphabet([7,96,8,240,12,140,20,56]), 20 );
Test - ( alphabet([20,30,6,7,4,42,28,5]), 7 );
*/


function alphabet(ns) {
  
//   P - find the max number then check what 2 numbers in the array give the product of the max number

    
let sorted = ns.sort((a, b) => a - b)

return sorted[7] / sorted[sorted[0] * sorted[1] == sorted[2] ? 3 : 2]
  
    
  
}

console.log(alphabet([2,3,4,1,12,6,2,4]))