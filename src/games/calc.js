import brainGames from '../index.js';
import randomNumber from '../random.js';

const parameters = {
  1: '+',
  2: '-',
  3: '*',
  expressionNumber: 3,
  maxFirstNumber: 20,
  maxSecondNumber: 10,
};

const rules = 'What is the result of the expression?';

const calculation = () => {
  const operation = parameters[randomNumber(1, parameters.expressionNumber)];
  const number1 = randomNumber(0, parameters.maxFirstNumber);
  const number2 = randomNumber(0, parameters.maxSecondNumber);
  let result;
  switch (operation) {
    case '+':
      result = (number1 + number2);
      break;
    case '-':
      result = (number1 - number2);
      break;
    case '*':
    default:
      result = (number1 * number2);
      break;
  }
  return {
    operation,
    number1,
    number2,
    correctAnswer: result.toString(),
  };
};

const makeRound = () => {
  const {
    operation, number1, number2, correctAnswer,
  } = calculation();
  const question = (`${number1} ${operation} ${number2}`);
  return [question, correctAnswer];
};

export default () => brainGames(rules, makeRound);
