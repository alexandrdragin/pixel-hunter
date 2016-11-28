import smallHeader from './smallHeader.js';

const headerMap = {
  gameTimer: 'NN',
  heart: {
    empty: 'img/heart__empty.svg',
    full: 'img/heart__full.svg'
  }
};

const header = `<header class="header">
    ${smallHeader}
    <h1 class="game__timer">${headerMap.gameTimer}</h1>
    <div class="game__lives">
      <img src="${headerMap.heart.empty}" class="game__heart" alt="Life" width="32" height="32">
      <img src="${headerMap.heart.full}" class="game__heart" alt="Life" width="32" height="32">
      <img src="${headerMap.heart.full}" class="game__heart" alt="Life" width="32" height="32">
    </div>
  </header>`;

export default header;
