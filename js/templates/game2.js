import getElementFromTemplate from '../getElementFromTemplate';

import game3 from './game3';
import draw from '../draw';

const game2Map = {
  game__timer: 'NN',
  heart: {
    empty: 'img/heart__empty.svg',
    full: 'img/heart__full.svg'
  },
  game: {
    game__task: 'Угадай, фото или рисунок',
    game__option1: 'http://placehold.it/705x455'
  }
};

const game2 = getElementFromTemplate(`<header class="header">
    <div class="header__back">
      <span class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.png" width="101" height="44">
      </span>
    </div>
    <h1 class="game__timer">${game2Map.game__timer}</h1>
    <div class="game__lives">
      <img src="${game2Map.heart.empty}" class="game__heart" alt="Life" width="32" height="32">
      <img src="${game2Map.heart.full}" class="game__heart" alt="Life" width="32" height="32">
      <img src="${game2Map.heart.full}" class="game__heart" alt="Life" width="32" height="32">
    </div>
  </header>
  <div class="game">
    <p class="game__task">${game2Map.game.game__task}</p>
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src="${game2Map.game.game__option1}" alt="Option 1" width="705" height="455">
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
    <div class="stats">
      <ul class="stats">
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--correct"></li>
        <li class="stats__result stats__result--wrong"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--slow"></li>
        <li class="stats__result stats__result--unknown"></li>
        <li class="stats__result stats__result--fast"></li>
        <li class="stats__result stats__result--unknown"></li>
      </ul>
    </div>
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
