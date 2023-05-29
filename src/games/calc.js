import whatName from '../cli.js';
import { brainCalc } from '../index.js';

const expression = {
  1: '+',
  2: '-',
  3: '*',
  expressionNumber: 3,
};
const maxFirstNumber = 20;
const maxSecondNumber = 10;

export default () => {
  const name = whatName();
  console.log('What is the result of the expression?');

  if (brainCalc(expression, maxFirstNumber, maxSecondNumber)) {
    console.log(`Congratulation, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};
