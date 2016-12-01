import getElementFromTemplate from '../getElementFromTemplate';

import stats from './stats';
import draw from '../draw.js';

import questsData from './questsData.js';

import {fullHeader} from './header.js';
import statsBlock from './statsBlock.js';

export default () => {

  const gameTask = `<p class="game__task">${questsData.questionThree.questTask}</p>`;

  const quest = (`
    <form class="game__content  game__content--triple">
      <div class="game__option">
        <img src="${questsData.questionThree.questOption1}" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option  game__option--selected">
        <img src="${questsData.questionThree.questOption2}" alt="Option 2" width="304" height="455">
      </div>
      <div class="game__option">
        <img src="${questsData.questionThree.questOption3}" alt="Option 3" width="304" height="455">
      </div>
    </form>
  `);

  const game3 = getElementFromTemplate(`
    ${fullHeader}
    <div class="game">
      ${gameTask}
      ${quest}
      ${statsBlock}
    </div>
  `);

  const answers = game3.querySelectorAll('.game__option');

  const handler = (e) => {
    e.preventDefault();
    draw(stats);
  };

  for (const answer of answers) {
    answer.onclick = handler;
  }

  return game3;
};
