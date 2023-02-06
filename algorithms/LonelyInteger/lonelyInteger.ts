
/*
 * Complete the 'lonelyinteger' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

function lonelyinteger(a: number[]): number {
  const sortedArr = a.sort((a, b)=> a - b);

  if (a.length === 1) return a[0];
  
  const uniqueElement = sortedArr.find((value, idx, arr) => arr[idx - 1] !== value && value !== arr[idx + 1]) as number;
   
  return uniqueElement;
}