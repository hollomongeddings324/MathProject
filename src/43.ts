const fs = require('fs').promises;
const readline = require('readline');

const inputPath = 'input.txt';
const outputPath = 'output.txt';

try {
  const rl = readline.createInterface({
    input: fs.createReadStream(inputPath),
    output: process.stdout,
    synchronous: false,
  });

  const buffer = [];
  let line;
  while ((line = readline.readLine()) !== null) {
    buffer.push(line);
  }

  rl.close();
} catch (err) {
  console.error(`An error occurred: ${err.message}`);
}
