/* 
How many arguments

args_count(1, 2, 3) -> 3
args_count(1, 2, 3, 10) -> 4
args_count(1, 2) -> 2
args_count() -> 0
args_count ('A', 'B', 'C') -> 3
args_count(["foo", "bar"]) -> 1
*/

// Create a function called args_count that returns the number of arguments provided

const args_count = (...num) => num.length