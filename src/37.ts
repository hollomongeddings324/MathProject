function calculateSquareSum(numbers: number[]): number {
  let sum = numbers.reduce((acc, num) => acc + num * num, 0);
  return sum;
}

let myNumbers = [1, 2, 3, 4, 5];
console.log(calculateSquareSum(myNumbers));
