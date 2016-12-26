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

export const setFinalResult = (game) => {
  if (game.base.lives > 0) {
    let result = Object.assign({}, game);
    result.player.result = 'Еееееее!';
    return result;
  } else {
    let result = Object.assign({}, game);
    result.player.result = 'Пфффф(((';
    return result;
  }
};

export const setLives = (game, lives) => {
  let result = Object.assign({}, game);
  result.base.lives = lives;
  return result;
};

export const setCurrentLevel = (game, currentLevel) => {
  let result = Object.assign({}, game);
  result.base.currentLevel = currentLevel;
  return result;
};

export const getPoints = (game) => {
  let result = Object.assign({}, game);
  result.player.total = result.player.rightAnswers * 100 + result.player.fast * 50 + result.base.lives * 50
  - result.player.slow * 50;
  return result;
};

export const checkAnswerSpeed = (data, time, answer) => {
  if (time < 10) {
    return addAnswer(data, answer + 'slow');
  }
  if (time > 20) {
    return addAnswer(data, answer + 'fast');
  } else {
    return addAnswer(data, answer);
  }
};

export const addAnswer = (game, answer) => {
  let copyCat = game.answer.slice(0, game.answer.length);
  copyCat.push(answer);

  let result = Object.assign({}, game);
  result.answer = copyCat;
  return result;
};
