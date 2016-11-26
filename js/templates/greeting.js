import getElementFromTemplate from '../getElementFromTemplate';

import rules from './rules';
import draw from '../draw';

const greetingMap = {
  greeting__asterisk: '*',
  h3: 'Лучшие художники-фотореалисты бросают&nbsp;тебе&nbsp;вызов!',
  p: 'Правила игры просты.<br> Нужно отличить рисунок&nbsp;от фотографии и сделать выбор.<br> Задача кажется тривиальной, но не думай, что все так просто.<br> Фотореализм обманчив и коварен.<br> Помни, главное — смотреть очень внимательно.'
};

const greeting = getElementFromTemplate(`<div class="greeting  central--blur">
    <div class="greeting__logo"><img src="img/logo_big.png" width="201" height="89" alt="Pixel Hunter"></div>
    <h1 class="greeting__asterisk">${greetingMap.greeting__asterisk}</h1>
    <div class="greeting__challenge">
      <h3>${greetingMap.h3}</h3>
      <p>${greetingMap.p}</p>
    </div>
    <div class="greeting__continue"><span><img src="img/arrow_right.svg" width="64" height="64" alt="Next"></span></div>
  </div>`);

const greetingContinue = greeting.querySelector('.greeting__continue');

const handler = (e) => draw(rules);
greetingContinue.addEventListener('click', handler);

export default greeting;
