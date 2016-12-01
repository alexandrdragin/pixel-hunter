import getElementFromTemplate from '../getElementFromTemplate';

import game3 from './game3';
import draw from '../draw';

import questsData from './questsData.js';

import {fullHeader} from './header.js';
import statsBlock from './statsBlock.js';

export default () => {

  const gameTask = `<p class="game__task">${questsData.questionTwo.questTask}</p>`;

  const quest = (`
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src="${questsData.questionTwo.questOption1}" alt="Option 1" width="705" height="455">
        <label class="game__answer  game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--wide  game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form>
  `);

  const game2 = getElementFromTemplate(`
    ${fullHeader}
    <div class="game">
      ${gameTask}
      ${quest}
      ${statsBlock}
    </div>
  `);

  const answers = game2.querySelectorAll('.game__answer');

  const handler = (e) => {
    e.preventDefault();
    draw(game3);
  };

  for (const answer of answers) {
    answer.onclick = handler;
  }

  return game2;
};
