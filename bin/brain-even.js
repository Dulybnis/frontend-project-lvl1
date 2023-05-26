#!/usr/bin/env node
import readlineSync from 'readline-sync';

let correctAnswerCounter = 0;
const randomNumber = () => Math.floor(Math.random() * 100) + 1;
const isEven = (number) => (number % 2 === 0);

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');
while (correctAnswerCounter < 3) {
  const numberForQuestion = randomNumber();
  const even = isEven(numberForQuestion);
  console.log('Question: ', numberForQuestion);
  const correctAnswer = even ? 'yes' : 'no';
  const answer = readlineSync.question('Your answer: ');
  if ((even && answer === 'yes') || (!even && answer === 'no')) {
    console.log('Correct!');
    correctAnswerCounter += 1;
    if (correctAnswerCounter === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
}
