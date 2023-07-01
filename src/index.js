import readlineSync from 'readline-sync';
import makeWelcome from './cli.js';

const roundsCount = 3;

const runEngine = (rules, makeRound) => {
  const name = makeWelcome();
  console.log(rules);

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, answer] = makeRound();
    console.log(`Question: ${question}`);
    const answerForQuestion = readlineSync.question('Your answer: ');

    if (answer === answerForQuestion) {
      console.log('Correct!');
    } else {
      console.log(`'${answerForQuestion}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};

export default runEngine;
