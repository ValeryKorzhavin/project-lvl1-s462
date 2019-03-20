import runGame from '..';
import generateNum, { range } from '../utils';

const gameDescription = 'What number is missing in the progression?';
const maxRandomNumber = 10;
const progressionLength = 10;

const generateGameData = () => {
  const firstElement = generateNum(maxRandomNumber);
  const progressionStep = generateNum(maxRandomNumber);
  const progression = range(firstElement, progressionLength, progressionStep);
  const hiddenElementPosition = generateNum(progressionLength);
  const rightAnswer = String(progression.splice(hiddenElementPosition, 1, '..'));
  const question = progression.join(' ');

  return { question, rightAnswer };
};

export default () => runGame(gameDescription, generateGameData);
