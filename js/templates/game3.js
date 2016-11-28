import getElementFromTemplate from '../getElementFromTemplate';

import stats from './stats';
import draw from '../draw.js';

import header from './header.js';
import statsBlock from './statsBlock.js';

const game3Map = {
  gameTask: 'Найдите рисунок среди изображений',
  gameOption1: 'http://placehold.it/304x455',
  gameOption2: 'http://placehold.it/304x455',
  gameOption3: 'http://placehold.it/304x455'
};

const gameTask = `<p class="game__task">${game3Map.gameTask}</p>`;

const quest = (`
  <form class="game__content  game__content--triple">
    <div class="game__option">
      <img src="${game3Map.gameOption1}" alt="Option 1" width="304" height="455">
    </div>
    <div class="game__option  game__option--selected">
      <img src="${game3Map.gameOption2}" alt="Option 2" width="304" height="455">
    </div>
    <div class="game__option">
      <img src="${game3Map.gameOption3}" alt="Option 3" width="304" height="455">
    </div>
  </form>
`);

const game3 = getElementFromTemplate(`
  ${header}
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


export default game3;
