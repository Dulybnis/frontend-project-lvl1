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
const calaulation = () => {
  const operation = parameters[randomNumber(parameters.expressionNumber)];
  const number1 = randomNumber(parameters.maxFirstNumber);
  const number2 = randomNumber(parameters.maxSecondNumber);
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
    correctAnswer: result,
  };
};

const makeRound = () => {
  const {
    operation, number1, number2, correctAnswer,
  } = calaulation();
  const question = (`Question: ${number1} ${operation} ${number2}`);
  return [question, correctAnswer.toString()];
};

export default () => brainGames(rules, makeRound);
