import abstractView from '../abstract-view';

import greeting from './greeting';
import draw from '../draw.js';

export default () => {

  class Intro extends abstractView {
    constructor(data) {
      super();
      this.data = data;
    }

    getMarkup() {
      return `
        <div id="intro" class="intro">
          <h1 class="intro__asterisk">*</h1>
          <p class="intro__motto"><sup>*</sup>Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
          </div>
          `;
    }

    bindHandlers() {
      this.element.querySelector('.intro__asterisk').addEventListener('click', this.onClick);
    }

    clearHandlers() {
      this.element.querySelector('.intro__asterisk').removeEventListener('click', this.onClick);
    }

    onClick() {
      draw(greeting());
    }
 }

  return new Intro().element;
};
