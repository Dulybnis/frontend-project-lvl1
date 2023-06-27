import readlineSync from 'readline-sync';
import makeWelcome from './cli.js';

const runEngine = (rules, makeRound) => {
  const name = makeWelcome();
  const roundCounts = 3;
  console.log(rules);

  for (let i = 0; i < roundCounts; i += 1) {
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
