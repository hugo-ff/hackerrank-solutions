/*
 * Complete the 'countingSort' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function countingSort(arr: number[]): number[] {
  const freqcuencyArray = new Array(100).fill(0);

  arr.forEach(value => {
    freqcuencyArray[value]++
  })

  return freqcuencyArray;
}
