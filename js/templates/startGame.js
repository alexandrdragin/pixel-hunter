import questsData from './questsData.js';
import draw from '../draw.js';

import stats from './stats';

import gameScreen from '../gameScreen.js';

// проверка наличия уровней игры
// если есть экраны игры отрисовываем их по одному
// если нет статистику

const startGame = () => {

  if (questsData['question' + questsData.base.currentLevel]) {
    const node = gameScreen(questsData['question' + questsData.base.currentLevel]);
    draw(node);
    questsData.base.currentLevel++;

  } else {
    draw(stats);
  }

};

export default startGame;
