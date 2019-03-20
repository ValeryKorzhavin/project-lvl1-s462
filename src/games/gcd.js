import runGame from '..';
import generateNum from '../utils';

const gameDescription = 'Find the greatest common divisor of given numbers.';
const maxRandomNumber = 100;

const getGcd = (a, b) => (a % b === 0 ? b : getGcd(b, a % b));

const generateGameData = () => {
  const firstNumber = generateNum(maxRandomNumber);
  const secondNumber = generateNum(maxRandomNumber);
  const gcd = getGcd(firstNumber, secondNumber);
  const question = `${firstNumber} ${secondNumber}`;
  const rightAnswer = String(gcd);

  return { question, rightAnswer };
};

export default () => runGame(gameDescription, generateGameData);
