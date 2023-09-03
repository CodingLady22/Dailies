/* 
Remove duplicates from list

Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

The order of the sequence has to stay the same.

    distinct([1]), [1]);
    distinct([1,2]), [1,2]);
    distinct([1,1,2]), [1,2])

*/

function distinct(a) {

     let singles = [...new Set(a)];
  
  return singles
  
  /* OR
  return a.filter((item, i, arr) => arr.indexOf(item) === i)
  */
}

// console.log(distinct([1, 1, 2])); // [1,2]
console.log(distinct([ 1, 1, 2, 3, 4, 5 ])); // [ 1, 2, 3, 4, 5 ]