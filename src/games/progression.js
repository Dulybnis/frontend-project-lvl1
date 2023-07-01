import brainGames from '../index.js';
import randomNumber from '../random.js';

const maxStart = 10;
const maxProgresive = 10;
const rules = 'What number is missing in the progression?';

const progressionFunc = () => {
  const start = randomNumber(0, maxStart);
  const progress = randomNumber(1, maxProgresive);
  const progression = [start];
  for (let i = 1; i < 10; i += 1) {
    progression[i] = progression[i - 1] + progress;
  }
  const hiddenIndex = randomNumber(1, 8);
  const correctAnswer = progression[hiddenIndex];
  progression[hiddenIndex] = '..';
  return {
    progression,
    correctAnswer: correctAnswer.toString(),
  };
};

const makeRound = () => {
  const {
    progression, correctAnswer,
  } = progressionFunc();
  const question = (`${progression.join(' ')}`);
  return [question, correctAnswer];
};

export default () => brainGames(rules, makeRound);
