import questsData from './data/questsData.js';

import stats from './templates/stats';
import gameScreen from './view/gameScreen.js';

export default () => {

  if (questsData.questions[questsData.base.currentLevel]) {

    const node = gameScreen(
        questsData.questions[questsData.base.currentLevel].type,
        questsData.questions[questsData.base.currentLevel]
      );

    questsData.base.currentLevel++;
    return node;

  } else {
    return stats();
  }
};
