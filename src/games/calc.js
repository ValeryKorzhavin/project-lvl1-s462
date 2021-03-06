import runGame from '..';
import generateNum from '../utils';

const gameDescription = 'What is the result of the expression?';
const maxRandomNumber = 100;

const operations = [
  { sign: '+', evaluate: (a, b) => a + b },
  { sign: '-', evaluate: (a, b) => a - b },
  { sign: '*', evaluate: (a, b) => a * b },
];

const generateGameData = () => {
  const firstOperand = generateNum(0, maxRandomNumber);
  const secondOperand = generateNum(0, maxRandomNumber);
  const operationNumber = generateNum(0, operations.length - 1);
  const { sign, evaluate } = operations[operationNumber];
  const rightAnswer = String(evaluate(firstOperand, secondOperand));
  const question = `${firstOperand} ${sign} ${secondOperand}`;

  return { question, rightAnswer };
};

export default () => runGame(gameDescription, generateGameData);
