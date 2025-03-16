function generateRandomTsCode() {
  const min = 1;
  const max = 100;
  const code = Math.floor(Math.random() * (max - min + 1)) + min;
  return code;
}
