export const setTime = (game, time) => {

  if (time > 30) {
    throw new RangeError('wtf');
  }

  return Object.assign({}, game, {
    time: time
  });
};

export const getLevel = (game, currentLevel) => {
  return Object.assign({}, game, {
    currentLevel: currentLevel
  });
};

export const setFinalResult = (result) => {

  if (result === null) {
    throw new RangeError('wtf');
  }

  return Object.assign({}, {
    result: result
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

export const getPoints = (rightAnswers, fast, lives, slow) => {
  return rightAnswers * 100 + fast * 50 + lives * 50
  - slow * 50;
};

export const addAnswer = (gameData, answer, level) => {
  return Object.assign({}, gameData, {
    answer: answer,
    level: level
  });
};

export const checkAnswerSpeed = (gameData, time, answer) => {
  if (time < 10) {

    return Object.assign({}, gameData, {
      answer: answer
    });
  }
  if (time > 20) {

    return Object.assign({}, gameData, {
      answer: answer
    });
  } else {
    return 'regular time';
  }
};
