/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
function maxFromBothDiagonals(matrix) {
  //   console.log(matrix);
  let rows = matrix.length;
  //   console.log(rows);
  let max1 = -Infinity;
  let max2 = -Infinity;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < rows; j++) {
      if (i == j) {
        if (matrix[i][j] > max1) {
          max1 = matrix[i][j];
        }
      }
      if (j == rows - i - 1) {
        // console.log("Comparing ..", matrix[i][j]);
        if (matrix[i][j] > max2) {
          max2 = matrix[i][j];
        }
      }
    }
  }
  console.log(max1);
  console.log(max2);
}

maxFromBothDiagonals([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);

maxFromBothDiagonals([[1, 2, 3, 4],[5, 6, 7, 8],[9, 10, 11, 12],[13, 14, 15, 16]]);
