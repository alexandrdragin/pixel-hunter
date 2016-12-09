import questsData from './questsData';

export const setTime = (game, time) => {
  return Object.assign({}, game, {
    time: time
  });
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

export const getPoints = (points) => {
  return points.rightAnswers * 100 + points.fast * 50 + points.lives * 50
  - points.slow * 50;
};

export const addAnswer = (answer) => {
  questsData.player.push({answer: answer});
};
