/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr: number[][]): number {
  const rowsAndColumnsInArrMatrix = arr.length;
 
  let leftToRightDiagonalSum = 0;
  let rightToLeftDiagonalSum = 0;
  
  for(let i = 0; i < rowsAndColumnsInArrMatrix; i++) {
    leftToRightDiagonalSum += arr[i][i];
  }
  
  for(let i = 0; i < rowsAndColumnsInArrMatrix; i++) {
    rightToLeftDiagonalSum += arr[i][(rowsAndColumnsInArrMatrix - 1) - i];
  }
  
  const absoluteDifference = Math.abs(leftToRightDiagonalSum - rightToLeftDiagonalSum);
  return absoluteDifference;
}
