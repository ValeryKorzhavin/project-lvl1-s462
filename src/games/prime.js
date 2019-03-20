import runGame from '..';
import generateNum from '../utils';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const maxRandomNumber = 100;

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateGameData = () => {
  const question = generateNum(0, maxRandomNumber);
  const rightAnswer = isPrime(question) ? 'yes' : 'no';

  return { question, rightAnswer };
};

export default () => runGame(gameDescription, generateGameData);
