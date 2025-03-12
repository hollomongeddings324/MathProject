let numbers = [] as number[];
for (let i = 1; i <= 50; i++) {
  const randNum = Math.floor(Math.random() * 100);
  if (!numbers.includes(randNum)) {
    numbers.push(randNum);
  }
}

const largestNumber = Math.max(...numbers);
