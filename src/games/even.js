import runGame from '..';

const isEven = number => number % 2 === 0 ? true : false; 

const generateGameData = () => {
  const maxRandomNumber = 100;
  const randomNumber = Math.floor(Math.random() * maxRandomNumber);
  const rightAnswer = isEven(randomNumber) ? 'yes' : 'no';
  const question = randomNumber;
  return { question, rightAnswer };
};

const runEvenGame = () => {
  const gameDescription = 'Answer "yes" if a number is even, otherwise answer "no".';
  runGame(gameDescription, generateGameData);
};

export default runEvenGame;
