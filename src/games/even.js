import brainGames from '../index.js';

const parameters = {
  beginText: 'Answer "yes" if the number is even, otherwise answer "no".',
  maxEven: 20,
};

export default () => brainGames('even', parameters);
