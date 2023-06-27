import brainGames from '../index.js';
import randomNumber from '../random.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => (number % 2 === 0);
const maxEven = 20;
const makeRound = () => {
  const roundNumber = randomNumber(maxEven);
  const correctAnswer = isEven(roundNumber) ? 'yes' : 'no';
  return [roundNumber.toString(), correctAnswer];
};

export default () => brainGames(rules, makeRound);
