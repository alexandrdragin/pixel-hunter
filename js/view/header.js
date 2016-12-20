
import AbstractView from './abstract-view';

export default class Header extends AbstractView {
  constructor(data) {
    super();
    this.data = data;
  }

  lives(data) {
    const MAX_LIVES = 3;
    const emptyHeartIcon = 'img/heart__empty.svg';
    const fullHeartIcon = 'img/heart__full.svg';

    let hearts = '';
    for (let i = 0; i < MAX_LIVES; i++) {
      hearts += `<img src="${this.data.lives > i ? fullHeartIcon : emptyHeartIcon}" class="game__heart" alt="Life" width="32" height="32">`;
    }
    return hearts;
  }

  backHeader() {
    return `
      <div class="header__back">
        <span class="back">
          <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
          <img src="img/logo_small.png" width="101" height="44">
        </span>
      </div>
    `;
  }

  gameHeader() {
    return `
      <h1 class="game__timer">${this.data.timer}</h1>
      <div class="game__lives">
        ${this.lives(this.data.lives)}
      </div>
    `;
  }

  smallHeader() {
    return `
      <header class="header">
        ${this.backHeader()}
      </header>
    `;
  }

  getMarkup() {
    return `
      <header class="header">
        ${this.backHeader()}
        ${this.gameHeader()}
      </header>
    `;
  }
}
