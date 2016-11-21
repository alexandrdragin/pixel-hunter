import intro from '../templates/intro';

import greeting from '../templates/greeting';
import rules from '../templates/rules';
import game1 from '../templates/game1';
import game2 from '../templates/game2';
import game3 from '../templates/game3';
import stats from '../templates/stats';

(() => {

  // Rules
  let rulesSubmit = rules.querySelector('.rules__button');

  rules.querySelector('.rules__input').oninput = (evt) => {
    if (evt.target.value) {
      rulesSubmit.removeAttribute('disabled');
    } else {
      rulesSubmit.setAttribute('disabled', '');
    }
  };

  // Slides changer

  let mainElement = document.getElementById('main');

  let switcher = document.createElement('div');
  switcher.innerHTML = '' +
    '<span class="prev"><img src="img/arrow_left.svg" alt="Left" width="50" height="50"></span>   ' +
    '<span class="next"><img src="img/arrow_right.svg" alt="Right" width="50" height="50"></span>';
  switcher.style.cssText = 'text-align: center';
  mainElement.after(switcher);

  let slides = [
    intro,
    greeting,
    rules,
    game1,
    game2,
    game3,
    stats
  ];
  let current = -1;

  let select = (index) => {
    current = index;
    mainElement.innerHTML = '';
    mainElement.appendChild(slides[index]);
  };

  document.querySelector('.next').onclick = (e) => {
    e.preventDefault();

    select(current + 1);
  };

  document.querySelector('.prev').onclick = (e) => {
    e.preventDefault();

    select(current - 1);
  };

  select(0);
})();
