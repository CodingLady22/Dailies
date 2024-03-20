/* 
Consecutive items

You are given a list of unique integers arr, and two integers a and b. Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise).

It is guaranteed that a and b are both present in arr.

Examples

("Test 1", function() {
    assert.deepEqual(consecutive([1, 3, 5, 7], 3, 7), false);
});
("Test 2", function() {
    assert.deepEqual(consecutive([1, 3, 5, 7], 3, 1), true);
});
("Test 3", function() {
    assert.deepEqual(consecutive([1, 6, 9, -3, 4, -78, 0], -3, 4), true);
})
*/

function consecutive(arr, a, b) {

for(let i = 0; i < arr.length; i++) {
    if((arr[i] === a && arr[i+1] === b) || ((arr[i] === b && arr[i+1] === a))) {
        return true
    }
}
return false

}

console.log(consecutive([1, 3, 5, 7], 3, 1));