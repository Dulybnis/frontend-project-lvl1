import brainGames from '../index.js';

const parameters = {
  beginText: 'What is the result of the expression?',
  1: '+',
  2: '-',
  3: '*',
  expressionNumber: 3,
  maxFirstNumber: 20,
  maxSecondNumber: 10,
};

export default () => brainGames('calc', parameters);
