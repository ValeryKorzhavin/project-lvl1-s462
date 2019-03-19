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
  const firstOperand = generateNum(maxRandomNumber);
  const secondOperand = generateNum(maxRandomNumber);
  const operationNumber = generateNum(operations.length);
  const operation = operations[operationNumber];
  const rightAnswer = String(operation.evaluate(firstOperand, secondOperand));
  const question = `${firstOperand} ${operation.sign} ${secondOperand}`;

  return { question, rightAnswer };
};

const runCalcGame = () => runGame(gameDescription, generateGameData);

export default runCalcGame;
