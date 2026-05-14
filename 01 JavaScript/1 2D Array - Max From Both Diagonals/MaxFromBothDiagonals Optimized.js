/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
function maxFromBothDiagonals(matrix) {
    const n = matrix.length;

    let max1 = -Infinity;
    let max2 = -Infinity;

    for (let i = 0; i < n; i++) {

        // Main diagonal
        max1 = Math.max(max1, matrix[i][i]);

        // Secondary diagonal
        max2 = Math.max(max2, matrix[i][n - i - 1]);
    }
    console.log(max1, max2);
    return [max1, max2];

}
maxFromBothDiagonals([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);

maxFromBothDiagonals([[1, 2, 3, 4],[5, 6, 7, 8],[9, 10, 11, 12],[13, 14, 15, 16]]);