import brainGames from '../index.js';

const parameters = {
  beginText: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  maxPrime: 200,
};

export default () => brainGames('prime', parameters);
