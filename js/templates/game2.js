import getElementFromTemplate from '../getElementFromTemplate';

import game3 from './game3';
import draw from '../draw';

import header from './header.js';
import statsBlock from './statsBlock.js';

const game2Map = {
  gameTask: 'Угадай, фото или рисунок',
  gameOption1: 'http://placehold.it/705x455'
};

const gameTask = `<p class="game__task">${game2Map.gameTask}</p>`;

const quest = (`
  <form class="game__content  game__content--wide">
    <div class="game__option">
      <img src="${game2Map.gameOption1}" alt="Option 1" width="705" height="455">
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
  ${header}
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

export default game2;
