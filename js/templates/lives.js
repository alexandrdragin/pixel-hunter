const MAX_LIVES = 3;
const emptyHeartIcon = 'img/heart__empty.svg';
const fullHeartIcon = 'img/heart__full.svg';

const lives = (questsData) => {
  let hearts = '';
  for (let i = 0; i < MAX_LIVES; i++) {
    hearts += `<img src="${ questsData.base.lives > i ? fullHeartIcon : emptyHeartIcon}" class="game__heart" alt="Life" width="32" height="32">`;
  }
  return hearts;
};

export default lives;
