function fibonacci(n) {
  if (n <= 1) return n;
  const previous = 0;
  const current = 1;
  let next = 0;

  while (next < n) {
    [previous, current] = [current, previous + current];
    next++;
  }

  return current;
}

console.log(fibonacci(10));
