import runGame from '..';
import generateNum from '../utils';

const gameDescription = 'Answer "yes" if a number is even, otherwise answer "no".';
const maxRandomNumber = 100;

const isEven = number => number % 2 === 0;

const generateGameData = () => {
  const question = generateNum(maxRandomNumber);
  const rightAnswer = isEven(question) ? 'yes' : 'no';

  return { question, rightAnswer };
};

const runEvenGame = () => runGame(gameDescription, generateGameData);

export default runEvenGame;
