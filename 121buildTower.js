/*
Build Tower

Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/

function towerBuilder(nFloors) {
  
  let star = ('*').repeat(nFloors * 2-1)
  let tower = [star] 
  let space = '';
  
  while ( star.length > 1 ) {
    tower.unshift( (space += ' ') + (star = star.substring(2)) + space );
  }

  
  return tower
}

console.log(towerBuilder(5));