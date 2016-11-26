import getElementFromTemplate from '../getElementFromTemplate';

import game1 from './game1';
import draw from '../draw';

const rulesMap = {
  rules__title: 'Правила',
  rules__description: {
    part1: 'Угадай 10 раз для каждого изображения фото',
    part2: 'или рисунок',
    part3: '.<br> Фотографиями или рисунками могут быть оба изображения.<br> На каждую попытку отводится 30 секунд.<br> Ошибиться можно не более 3 раз.<br> <br> Готовы?'
  },
  rules__input: 'Ваше Имя',
  rules__button: 'Go!'
};

const rules = getElementFromTemplate(`<header class="header">
    <div class="header__back">
      <span class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.png" width="101" height="44">
      </span>
    </div>
  </header>
  <div class="rules  central--none">
    <h1 class="rules__title">${rulesMap.rules__title}</h1>
    <p class="rules__description"> ${rulesMap.rules__description.part1}
      <img src="img/photo_icon.png" width="16" height="16"> ${rulesMap.rules__description.part2}
      <img src="img/paint_icon.png" width="16" height="16" alt=""> ${rulesMap.rules__description.part3}
    </p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="${rulesMap.rules__input}">
      <button class="rules__button  continue" type="submit" disabled>${rulesMap.rules__button}</button>
    </form>
  </div>`);

// Rules
let rulesSubmit = rules.querySelector('.rules__button');

rules.querySelector('.rules__input').oninput = (evt) => {
  if (evt.target.value) {
    rulesSubmit.removeAttribute('disabled');
  } else {
    rulesSubmit.setAttribute('disabled', '');
  }
};

rulesSubmit.onclick = (e) => {
  e.preventDefault();
  draw(game1);
};

export default rules;
