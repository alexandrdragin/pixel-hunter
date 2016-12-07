import getElementFromTemplate from '../getElementFromTemplate';
import draw from '../draw.js';

import questsData from './questsData.js';

import {fullHeader} from './header.js';
import statsBlock from './statsBlock.js';

import {fillQuestionTypeEach, fillQuestionTypedrawOrPhoto, fillQuestionTypefindOne} from './fillQuestion.js';

import startGame from './startGame';


import timer from './timer';

// в зависимости от типа вопроса погдрузка нужного шаблона
// заполнение его данными
// выгрузка полностью собранного экрана игры

export default (typeOfQuestion, question) => {

  let questBlock = [];

// блок проверяющий тип вопроса из questsData.question[].type

  switch (typeOfQuestion) {
    case 'each':
      questBlock = fillQuestionTypeEach(question);
      break;
    case 'drawOrPhoto':
      questBlock = fillQuestionTypedrawOrPhoto(question);
      break;
    case 'findOne':
      questBlock = fillQuestionTypefindOne(question);
      break;
    default:
      throw new Error('sorry, wierd question');
  }

  const gameScreen = getElementFromTemplate(`
    ${fullHeader}
    <div class="game">
      ${questBlock}
      ${statsBlock}
    </div>
  `);

  timer(30, function (s) {
    questsData.base.time = s;
    // renderHeader()?
  }, function (s) {
    // throw new Error('timeout > nextlevel');
    draw(startGame());
    questsData.base.life--;
    questsData.player.wrongAnswers++;
  });

// bindhandlers
  let answers = gameScreen.querySelectorAll('.game__option');

  if (answers === 'undefined') {
    answers = gameScreen.querySelectorAll('.game__answer');
  }

  const handler = (e) => {
    e.preventDefault();
    draw(startGame());
  };

  for (const answer of answers) {
    answer.onclick = handler;
  }

  return gameScreen;
};
