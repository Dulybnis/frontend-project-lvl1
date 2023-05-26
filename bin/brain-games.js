#!/usr/bin/env node
import whatName from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = whatName();
console.log(`Hello , ${name}!`);
