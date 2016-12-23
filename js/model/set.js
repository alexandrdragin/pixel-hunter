import gameData from '../data/questsData';

export const setTime = (game, timer) => {

  if (timer > 30) {
    throw new RangeError('wtf');
  }

  let result = Object.assign({}, game);
  result.base.timer = timer;
  return result;
};

export const hasLevel = (currentLevel) =>
  typeof gameData.questions[`${currentLevel}`] !== 'undefined';

export const getLevel = (game, currentLevel) => {
  if (!hasLevel(currentLevel)) {
    throw new RangeError(`This game has no level ${currentLevel}`);
  }

  return game.questions[`${currentLevel}`];
};

export const setFinalResult = (result) => {

  if (result === null) {
    throw new RangeError('wtf');
  }

  return Object.assign({}, {
    player: {result: result}
  });
};

export const setLives = (game, lives) => {

  if (lives < 1) {
    throw new RangeError('end');
  }

  let result = Object.assign({}, game);
  result.base.lives = lives;
  return result;
};

export const setCurrentLevel = (game, currentLevel) => {

  let result = Object.assign({}, game);
  result.base.currentLevel = currentLevel;
  return result;
};

export const getPoints = (rightAnswers, fast, lives, slow) => {
  return rightAnswers * 100 + fast * 50 + lives * 50
  - slow * 50;
};

export const addAnswer = (data, answer) => {
  let copyCat = data.answer.slice(0, data.answer.length);
  copyCat.push(answer);

  return Object.assign({}, data, {
    answer: copyCat
  });
};

export const checkAnswerSpeed = (data, time, answer) => {
  if (time < 10) {
    return addAnswer(data, answer + 'slow');
  }
  if (time > 20) {
    return addAnswer(data, answer + 'fast');
  } else {
    return 'regular time';
  }
};