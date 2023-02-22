/* 
Square(n) Sum
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 
1
2
+
2
2
+
2
2
=
9
1 
2
 +2 
2
 +2 
2
 =9.

    squareSum([1,2]), 5);
    squareSum([0, 3, 4, 5]), 50);
    squareSum([]), 0);
    squareSum([-1,-2]), 5);
    squareSum([-1,0,1]), 2);
*/

function squareSum(numbers){
    let sum = 0;

    for(let i = 0; i < numbers.length; i++) {
        sum += numbers[i] * numbers[i]
    }

    console.log(sum)
    return sum

}