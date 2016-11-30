import getElementFromTemplate from '../getElementFromTemplate.js';

import game2 from './game2.js';
import draw from '../draw.js';

import questsData from './questsData.js';

import {fullHeader} from './header.js';
import statsBlock from './statsBlock.js';

const gameTask = `<p class="game__task">${questsData.questionOne.questTask}</p>`;

const quest = (`
  <form class="game__content">
    <div class="game__option">
      <img src="${questsData.questionOne.questOption1}" alt="Option 1" width="468" height="458">
      <label class="game__answer game__answer--photo">
        <input name="question1" type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer game__answer--paint">
        <input name="question1" type="radio" value="paint">
        <span>Рисунок</span>
      </label>
    </div>
    <div class="game__option">
      <img src="${questsData.questionOne.questOption2}" alt="Option 2" width="468" height="458">
      <label class="game__answer  game__answer--photo">
        <input name="question2" type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer  game__answer--paint">
        <input name="question2" type="radio" value="paint">
        <span>Рисунок</span>
      </label>
    </div>
  </form>
`);

const game1 = getElementFromTemplate(`
  ${fullHeader}
  <div class="game">
    ${gameTask}
    ${quest}
    ${statsBlock}
  </div>
`);

const answers = game1.querySelectorAll('.game__answer');

const handler = (e) => {
  e.preventDefault();
  draw(game2);
};

for (const answer of answers) {
  answer.onclick = handler;
}

export default game1;
