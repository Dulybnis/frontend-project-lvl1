import brainGames from '../index.js';

const parameters = {
  beginText: 'What number is missing in the progression?',
  maxStart: 10,
  maxProgresive: 10,
};

export default () => brainGames('progression', parameters);
