import runGame from '..';

const operationsCount = 3;
const operations = [
  { sign: '+', evaluate: (a, b) => a + b },
  { sign: '-', evaluate: (a, b) => a - b },
  { sign: '*', evaluate: (a, b) => a * b },
];

const generateGameData = () => {
  const maxRandomNumber = 100;
  const firstOperand = Math.floor(Math.random() * maxRandomNumber);
  const secondOperand = Math.floor(Math.random() * maxRandomNumber);
  const operationNumber = Math.floor(Math.random() * operationsCount);
  const operation = operations[operationNumber];
  const rightAnswer = String(operation.evaluate(firstOperand, secondOperand));
  const question = `${firstOperand} ${operation.sign} ${secondOperand}`;

  return { question, rightAnswer };
};

const runCalcGame = () => {
  const gameDescription = 'What is the result of the expression?';
  runGame(gameDescription, generateGameData);
};

export default runCalcGame;
