import readlineSync from 'readline-sync';
import whatName from './cli.js';

const randomNumber = (max) => Math.floor(Math.random() * max) + 1;

const calaulation = (parameters) => {
  const operation = parameters[randomNumber(parameters.expressionNumber)];
  const number1 = randomNumber(parameters.maxFirstNumber);
  const number2 = randomNumber(parameters.maxSecondNumber);
  let result;
  switch (operation) {
    case '+':
      result = (number1 + number2);
      break;
    case '-':
      result = (number1 - number2);
      break;
    case '*':
    default:
      result = (number1 * number2);
      break;
  }
  return {
    operation,
    number1,
    number2,
    result,
  };
};
const gcd = (parameters) => {
  const number1 = randomNumber(parameters.maxFirstNumber);
  const number2 = randomNumber(parameters.maxSecondNumber);
  let min = (number1 < number2) ? number1 : number2;
  let result;
  while (min > 0) {
    if ((number1 % min === 0) && (number2 % min === 0)) {
      result = min;
      break;
    }
    min -= 1;
  }
  return {
    number1,
    number2,
    result,
  };
};
const progressionFunc = (maxStart, maxProgresive) => {
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
const isEven = (number) => (number % 2 === 0);
const isPrime = (number) => {
  if (number < 2) { return false; }
  for (let i = 3; i < number; i += 1) {
    if (number % i === 0) { return false; }
  }
  return true;
};

export default (game, parameters) => {
  const name = whatName();
  console.log(parameters.beginText);

  let correctAnswerCounter = 0;
  while (correctAnswerCounter < 3) {
    let correctAnswer;
    let progressionIteration;
    switch (game) {
      case 'even':
        progressionIteration = randomNumber(parameters.maxEven);
        console.log(`Question: ${progressionIteration}`);
        correctAnswer = isEven(progressionIteration) ? 'yes' : 'no';
        break;
      case 'calc':
        progressionIteration = calaulation(parameters);
        correctAnswer = progressionIteration.result;
        console.log(`Question: ${progressionIteration.number1} ${progressionIteration.operation} ${progressionIteration.number2}`);
        break;
      case 'gcd':
        progressionIteration = gcd(parameters);
        correctAnswer = progressionIteration.result;
        console.log(`Question: ${progressionIteration.number1} ${progressionIteration.number2}`);
        break;
      case 'prime':
        progressionIteration = randomNumber(parameters.maxPrime);
        console.log('Question: ', progressionIteration);
        correctAnswer = isPrime(progressionIteration) ? 'yes' : 'no';
        break;
      case 'progression':
      default:
        progressionIteration = progressionFunc(parameters.maxStart, parameters.maxProgresive);
        console.log(`Question: ${progressionIteration.arr.join(' ')}`);
        correctAnswer = progressionIteration.correctAnswer;
        break;
    }
    const answerNan = readlineSync.question('Your answer: ');
    const answer = Number(answerNan) ? Number(answerNan) : answerNan;
    if (answer === correctAnswer) {
      console.log('Correct!');
      correctAnswerCounter += 1;
      if (correctAnswerCounter === 3) {
        console.log(`Congratulation, ${name}!`);
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      break;
    }
  }
};
