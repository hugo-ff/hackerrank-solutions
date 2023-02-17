/*
 * Complete the 'simpleArraySum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY ar as parameter.
 */

function simpleArraySum(ar: number[]): number {
  const sum = ar.reduce((accum, curr) => {
    return accum + curr;
  }, 0);
  return sum;
}