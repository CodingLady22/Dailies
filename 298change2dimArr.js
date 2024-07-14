/* 
Change two-dimensional array

Function receive a two-dimensional square array of random integers. On the main diagonal, all the negative integers must be changed to 0, while the others must be changed to 1 (Note: 0 is considered non-negative, here).

(You can mutate the input if you want, but it is a better practice to not mutate the input)

Example:

Input array

[
  [-1,  4, -5, -9,  3 ],
  [ 6, -4, -7,  4, -5 ],
  [ 3,  5,  0, -9, -1 ],
  [ 1,  5, -7, -8, -9 ],
  [-3,  2,  1, -5,  6 ]
]
Output array

[
  [ 0,  4, -5, -9,  3 ],
  [ 6,  0, -7,  4, -5 ],
  [ 3,  5,  1, -9, -1 ],
  [ 1,  5, -7,  0, -9 ],
  [-3,  2,  1, -5,  1 ]
]

Other examples 
 assert.deepEqual(
          matrix([[-1, 4, -5, -9, 3], [6, -4, -7, 4, -5], [3, 5, 4, -9, -1], [1, 5, -7, -8, -9], [-3, 2, 1, -5, 6]]),
          [[0, 4, -5, -9, 3], [6, 0, -7, 4, -5], [3, 5, 1, -9, -1], [1, 5, -7, 0, -9], [-3, 2, 1, -5, 1]]
        );
        assert.deepEqual(
          matrix([[-1, 4, -5, -9, 3],[6, 8, -7, 4, -5],[3, 5, 1, -9, -1],[1, 5, -7, 15, -9],[-3, 2, 1, -5, -6]]),
          [[0, 4, -5, -9, 3],[6, 1, -7, 4, -5],[3, 5, 1, -9, -1],[1, 5, -7, 1, -9],[-3, 2, 1, -5, 0]]
        );
        assert.deepEqual(
          matrix([[-1, 4, -5, -9, 3, 8],[6, 8, -7, 4, -5, -1],[3, 5, 1, -9, -1, 6],[1, 5, -7, 15, -9, 3],[-3, 2, 1, -5, -6, 0],[8, 2, 0, -2, 4, -5]]),
          [[0, 4, -5, -9, 3, 8],[6, 1, -7, 4, -5, -1],[3, 5, 1, -9, -1, 6],[1, 5, -7, 1, -9, 3],[-3, 2, 1, -5, 0, 0],[8, 2, 0, -2, 4, 0]]
        );
        assert.deepEqual(
          matrix([[1, 1, -5, 5],[2, -4, 11, 2],[3, 1, -1, 4],[2, -6, 8, 10]]),
          [[1, 1, -5, 5],[2, 0, 11, 2],[3, 1, 0, 4],[2, -6, 8, 1]]
        );
*/

function matrix(array) {
  
  let arrCopy = array.map(copy => copy.slice());
    for (let i = 0; i < array.length; i++) {
        if (array[i][i] < 0) {
            arrCopy[i][i] = 0;
        } else {
            arrCopy[i][i] = 1;
        }
    }
    return arrCopy;
    
}