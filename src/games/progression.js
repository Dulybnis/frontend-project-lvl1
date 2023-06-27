import brainGames from '../index.js';
import randomNumber from '../random.js';

const maxStart = 10;
const maxProgresive = 10;
const rules = 'What number is missing in the progression?';

const progressionFunc = () => {
  const start = randomNumber(maxStart);
  const progress = randomNumber(maxProgresive);
  const arr = [start];
  for (let i = 1; i < 10; i += 1) {
    arr[i] = arr[i - 1] + progress;
  }
  const hiddenIndex = randomNumber(8);
  const correctAnswer = arr[hiddenIndex];
  arr[hiddenIndex] = '..';
  return {
    arr,
    correctAnswer,
  };
};

const makeRound = () => {
  const {
    arr, correctAnswer,
  } = progressionFunc();
  const question = (`Question: ${arr.join(' ')}`);
  return [question, correctAnswer.toString()];
};

export default () => brainGames(rules, makeRound);
