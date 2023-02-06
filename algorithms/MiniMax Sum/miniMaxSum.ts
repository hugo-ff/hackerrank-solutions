/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr: number[]): void {
  const sortedArr = arr.sort((a, b) => a - b);
  const firstFourElements: number[] = [...sortedArr].slice(0, 4);
  const lastFourElements: number[] = [...sortedArr].reverse().slice(0, 4);
  
  const sumValues = (arr: number[]): number => {
    const initialValue = 0;
    const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 
      initialValue
    );
    
    return sum;
  }
  
  const firstFourElementsSum: number = sumValues(firstFourElements);
  const lastFourElementsSum: number = sumValues(lastFourElements);
  
  console.log(`${firstFourElementsSum} ${lastFourElementsSum}`);
}

miniMaxSum([1,2,3,4,5]);
miniMaxSum([7,69,2,221,8974]);
