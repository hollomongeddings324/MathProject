export function randomInt(max: number): number {
  return Math.floor(Math.random() * max);
}

// Example usage:
const randNum = randomInt(10);
console.log(randNum);
