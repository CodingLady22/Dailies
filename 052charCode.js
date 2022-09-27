/*
Char Code Calculation
Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

total1 = 656667
              ^
total2 = 656661
              ^
Then return the difference between the sum of the digits in total1 and total2:

  (6 + 5 + 6 + 6 + 6 + 7)
- (6 + 5 + 6 + 6 + 6 + 1)
-------------------------
                       6
*/
function calc(x){
  let count = '';
  for(let i = 0; i < x.length; i++) {
    count += x.charCodeAt(i)
  }
  
  let count2 = count.replace(/7/g, 1)
  
  let arrValue = count.split('');
  let arrValue2 = count2.split('')
  
  let sum1 = arrValue.reduce((sum, c) => Number(sum) + Number(c))
  let sum2 = arrValue2.reduce((sum, c) => Number(sum) + Number(c))
  
  return sum1- sum2

}