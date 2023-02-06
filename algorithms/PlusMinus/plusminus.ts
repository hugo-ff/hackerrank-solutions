/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr: number[]): void {
  const arrSize: number = arr.length;
  const positives: number[] = [];
  const negatives: number[] = [];
  const zeros: number[] = [];
  
  arr.forEach(value => {
    if (value === 0) return zeros.push(value);
    if (value > 0) return positives.push(value);
    if (value < 0) return negatives.push(value);
  })
  
  const positivesRatio = positives.length / arrSize;
  const negativesRatio = negatives.length / arrSize;
  const zerosRatio = zeros.length / arrSize;
  
  console.log(`${positivesRatio.toFixed(6)}\n${negativesRatio.toFixed(6)}\n${zerosRatio.toFixed(6)}`);
}

plusMinus([-4, 3, -9, 0, 4, 1]);