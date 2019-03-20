import runGame from '..';
import generateNum from '../utils';

const gameDescription = 'What number is missing in the progression?';
const maxRandomNumber = 10;
const progressionLength = 10;

const range = (first, n, step) => Array.from(new Array(n), (value, index) => first + step * index);

const generateGameData = () => {
  const firstElement = generateNum(0, maxRandomNumber);
  const progressionStep = generateNum(1, maxRandomNumber);
  const progression = range(firstElement, progressionLength, progressionStep);
  const hiddenElementPosition = generateNum(0, progressionLength - 1);
  const rightAnswer = String(progression.splice(hiddenElementPosition, 1, '..'));
  const question = progression.join(' ');

  return { question, rightAnswer };
};

export default () => runGame(gameDescription, generateGameData);
