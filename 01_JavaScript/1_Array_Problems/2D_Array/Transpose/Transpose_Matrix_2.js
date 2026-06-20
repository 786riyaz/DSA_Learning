/**
 * Transposes the given matrix and returns a new matrix.
 * @param {number} rows - Number of rows in the matrix.
 * @param {number} cols - Number of columns in the matrix.
 * @param {number[][]} matrix - 2D array of integers.
 * @returns {number[][]} - The transposed matrix.
 **/

const transposeMatrix = (rows, cols, matrix) => {
  let transpose = Array.from({ length: cols }, () => Array(rows));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      transpose[j][i] = matrix[i][j];
    }
  }

  return transpose;
};

// console.log(
//   transposeMatrix(3, 3, [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ]),
// ); // [[1,4,7],[2,5,8],[3,6,9]]

console.log(transposeMatrix(3, 2, [[1, 2],[3, 4], [5, 6]])); // [[1,3,5],[2,4,6]]
