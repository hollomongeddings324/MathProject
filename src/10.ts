import * as tf from '@tensorflow/tfjs';

async function main() {
  const x = tf.randomUniform([10, 5], -1, 1);
  console.log(x);
}

main();
