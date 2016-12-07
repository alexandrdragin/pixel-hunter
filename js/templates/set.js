export const setTime = (game, time) => {
  return Object.assign({}, game, {
    time: time
  });
};

export const setLives = (game, lives) => {

  if (lives === 0) {
    setPoints(questsData);
    draw(stats());
  }

  return Object.assign({}, game, {
    lives: lives
  });
};

export const setPoints = (questsData) => {
  return questsData.player.rightAnswers * 100 + questsData.player.fast * 50 + questsData.base.lives * 50
  - questsData.player.slow * 50;
};

export const setFinalResult = (finalResult) => {
  return finalResult;
};
