import readlineSync from 'readline-sync';

const runGame = (gameDescription, generateGameData) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameDescription);

  const userName = readlineSync.question('\nMay I have your name? ');
  console.log(`Hello ${userName}!\n`);

  const roundsCount = 3;
  
  for (let i = 0; i < roundsCount; i++) {
    const gameData = generateGameData();

    console.log(`Question: ${gameData.question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== gameData.rightAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${gameData.rightAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    } else {
      console.log('Correct!');
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default runGame;
