import brainGames from '../index.js';
import randomNumber from '../random.js';

const parameters = {
  maxFirstNumber: 200,
  maxSecondNumber: 100,
};

const rules = 'Find the greatest common divisor of given numbers.';

const getGcd = (num1, num2) => {
  if (num1 === 0) {
    return num2;
  }
  return getGcd(num2 % num1, num1);
};

const gcd = () => {
  const number1 = randomNumber(1, parameters.maxFirstNumber);
  const number2 = randomNumber(1, parameters.maxSecondNumber);
  const result = getGcd(number1, number2);

  return {
    number1,
    number2,
    correctAnswer: result.toString(),
  };
};

const makeRound = () => {
  const {
    number1, number2, correctAnswer,
  } = gcd();
  const question = (`${number1} ${number2}`);
  return [question, correctAnswer];
};

export default () => brainGames(rules, makeRound);
