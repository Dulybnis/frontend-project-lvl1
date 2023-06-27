import brainGames from '../index.js';
import randomNumber from '../random.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const maxPrime = 100;

const isPrime = (number) => {
  if (number < 2) { return false; }
  for (let i = 3; i < number; i += 1) {
    if (number % i === 0) { return false; }
  }
  return true;
};

const makeRound = () => {
  const roundNumber = randomNumber(maxPrime);
  const correctAnswer = isPrime(roundNumber) ? 'yes' : 'no';
  return [roundNumber.toString(), correctAnswer];
};

export default () => brainGames(rules, makeRound);
