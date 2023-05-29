import whatName from '../cli.js';
import { brainEven } from '../index.js';

const maxEven = 20;

export default () => {
  const name = whatName();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  if (brainEven(maxEven)) {
    console.log(`Congratulation, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};
