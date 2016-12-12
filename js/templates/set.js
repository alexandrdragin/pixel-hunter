import questsData from './questsData';

export const setTime = (game, time) => {

  if (time > 30) {
    throw new RangeError('wtf');
  }

  return Object.assign({}, game, {
    time: time
  });
};

export const getLevel = (game, level) => {
  return Object.assign({}, game, {
    level: level
  });
};

export const setFinalResult = (result) => {

  if (result === null) {
    throw new RangeError('wtf');
  }

  return result;
};

export const setLives = (game, lives) => {

  if (lives < 1) {
    throw new RangeError('end');
  }

  return Object.assign({}, game, {
    lives: lives
  });
};

export const setCurrentLevel = (game, level) => {
  return Object.assign({}, game, {
    level: level
  });
};

export const getPoints = (rightAnswers, fast, lives, slow) => {
  return rightAnswers * 100 + fast * 50 + lives * 50
  - slow * 50;
};

export const addAnswer = (gameData, answer) => {
  gameData.base.currentLevel++;

  return answer;
};

export const checkAnswerSpeed = (time) => {
  if (time < 10) {
    return questsData.player.slow++;
  }
  if (time > 20) {
    return questsData.player.fast++;
  } else {
    return 'regular time';
  }
};
