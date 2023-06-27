import brainGames from '../index.js';
import randomNumber from '../random.js';

const parameters = {
  maxFirstNumber: 200,
  maxSecondNumber: 100,
};

const rules = 'Find the greatest common divisor of given numbers.';
const gcd = () => {
  const number1 = randomNumber(parameters.maxFirstNumber);
  const number2 = randomNumber(parameters.maxSecondNumber);
  let min = (number1 < number2) ? number1 : number2;
  let result;
  while (min > 0) {
    if ((number1 % min === 0) && (number2 % min === 0)) {
      result = min;
      break;
    }
    min -= 1;
  }
  return {
    number1,
    number2,
    correctAnswer: result,
  };
};

const makeRound = () => {
  const {
    number1, number2, correctAnswer,
  } = gcd();
  const question = (`Question: ${number1} ${number2}`);
  return [question, correctAnswer.toString()];
};

export default () => brainGames(rules, makeRound);
