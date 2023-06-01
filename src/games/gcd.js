import brainGames from '../index.js';

const parameters = {
  beginText: 'Find the greatest common divisor of given numbers.',
  maxFirstNumber: 200,
  maxSecondNumber: 100,
};

export default () => brainGames('gcd', parameters);
