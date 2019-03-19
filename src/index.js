import readlineSync from 'readline-sync';

const runGame = (gameDescription, generateGameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameDescription);

  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello ${userName}!\n`);

  const roundsCount = 3;
  for (let i = 0; i < roundsCount; i += 1) {
    const { question, rightAnswer } = generateGameData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === rightAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
