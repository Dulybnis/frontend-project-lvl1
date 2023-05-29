import readlineSync from 'readline-sync';

const randomNumber = (max) => Math.floor(Math.random() * max) + 1;
const calaulation = (number1, number2, operation) => {
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
  return result;
};
const isEven = (number) => (number % 2 === 0);
const greatestDevisor = (number1, number2) => {
  let min = (number1 < number2) ? number1 : number2;
  let result;
  while (min > 0) {
    if ((number1 % min === 0) && (number2 % min === 0)) {
      result = min;
      break;
    }
    min -= 1;
  }
  return result;
};

const brainCalc = (expression, maxFirstNumber, maxSecondNumber) => {
  let correctAnswerCounter = 0;

  let result = false;
  while (correctAnswerCounter < 3) {
    const operation = expression[randomNumber(expression.expressionNumber)];
    const firstNumber = randomNumber(maxFirstNumber);
    const secondNumber = randomNumber(maxSecondNumber);
    console.log(`Question: ${firstNumber} ${operation} ${secondNumber}`);
    const answer = Number(readlineSync.question('Your answer: '));
    const correctAnswer = calaulation(firstNumber, secondNumber, operation);
    if (answer === correctAnswer) {
      console.log('Correct!');
      correctAnswerCounter += 1;
      if (correctAnswerCounter === 3) {
        result = true;
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      result = false;
      break;
    }
  }
  return result;
};

const brainEven = (maxEven) => {
  let correctAnswerCounter = 0;

  let result = false;
  while (correctAnswerCounter < 3) {
    const numberForQuestion = randomNumber(maxEven);
    const even = isEven(numberForQuestion);
    console.log('Question: ', numberForQuestion);
    const correctAnswer = even ? 'yes' : 'no';
    const answer = readlineSync.question('Your answer: ');
    if ((even && answer === 'yes') || (!even && answer === 'no')) {
      console.log('Correct!');
      correctAnswerCounter += 1;
      if (correctAnswerCounter === 3) {
        result = true;
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      result = false;
      break;
    }
  }
  return result;
};

const brainGcd = (maxFirstNumber, maxSecondNumber) => {
  let correctAnswerCounter = 0;

  let result = false;
  while (correctAnswerCounter < 3) {
    const firstNumber = randomNumber(maxFirstNumber);
    const secondNumber = randomNumber(maxSecondNumber);
    console.log(`Question: ${firstNumber} ${secondNumber}`);
    const answer = Number(readlineSync.question('Your answer: '));
    const correctAnswer = greatestDevisor(firstNumber, secondNumber);
    if (answer === correctAnswer) {
      console.log('Correct!');
      correctAnswerCounter += 1;
      if (correctAnswerCounter === 3) {
        result = true;
      }
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      result = false;
      break;
    }
  }
  return result;
};

export { brainCalc, brainEven, brainGcd };
