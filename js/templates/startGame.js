import questsData from './questsData.js';
import draw from '../draw.js';

import stats from './stats';

import gameScreen from './gameScreen.js';

// проверка наличия уровней игры
// если есть экраны игры отрисовываем их по одному
// если нет статистику

export default () => {

  if (questsData['question' + questsData.base.currentLevel]) {

    // вот здесь у меня в отладничике видно что в ноду разметка целиком
    // а для отрисовки нужна функция

    /*
     const node = gameScreen(
          questsData['question' + questsData.base.currentLevel].type,
          questsData['question' + questsData.base.currentLevel]
      );
    */

    // исправил на это > получил
    // 'appendChild' on 'Node': parameter 1 is not of type 'Node'.(…)

    const node = () => {
      gameScreen(
          questsData['question' + questsData.base.currentLevel].type,
          questsData['question' + questsData.base.currentLevel]
      );
    };

    draw(node);
    questsData.base.currentLevel++;

  } else {
    draw(stats);
  }

};
