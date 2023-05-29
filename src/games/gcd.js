import whatName from '../cli.js';
import { brainGcd } from '../index.js';

const maxFirstNumber = 200;
const maxSecondNumber = 100;

export default () => {
  const name = whatName();
  console.log('Find the greatest common divisor of given numbers.');

  if (brainGcd(maxFirstNumber, maxSecondNumber)) {
    console.log(`Congratulation, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};
