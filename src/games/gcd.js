import runGame from '..';

const getGcd = (a, b) => (a % b === 0 ? b : getGcd(b, a % b));

const generateGameData = () => {
  const maxRandomNumber = 100;
  const firstNumber = Math.floor(Math.random() * maxRandomNumber);
  const secondNumber = Math.floor(Math.random() * maxRandomNumber);
  const gcd = getGcd(firstNumber, secondNumber);
  const question = `${firstNumber} ${secondNumber}`;
  const rightAnswer = String(gcd);

  return { question, rightAnswer };
};

const runGcdGame = () => {
  const gameDescription = 'Find the greatest common divisor of given numbers.';
  runGame(gameDescription, generateGameData);
};

export default runGcdGame;
