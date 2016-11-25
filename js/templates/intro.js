import getElementFromTemplate from '../getElementFromTemplate';

import greeting from './greeting';
import draw from '../draw.js';

const introMap = {
  h1: '*',
  p: 'Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.'
};

const intro = getElementFromTemplate(`<div id="intro" class="intro">
      <h1 class="intro__asterisk">${introMap.h1}</h1>
      <p class="intro__motto"><sup>*</sup>${introMap.p}</p>
    </div>
`);

const introAsterisk = intro.querySelector('.intro__asterisk');

const handler = (e) => draw(greeting);
introAsterisk.addEventListener('click', handler);

export default intro;
