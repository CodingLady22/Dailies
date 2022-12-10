/*
7 kyu No oddities here
Write a small function that returns the values of an array that are not odd.

All values in the array will be integers. Return the good values in the order they are given.

( noOdds( [0,1] ), [0] )
( noOdds( [0,1,2,3] ), [0,2] )
*/

function noOdds( values ){
  
   return values.filter(el => el % 2 === 0)

}