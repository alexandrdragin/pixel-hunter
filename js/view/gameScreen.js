import AbstractView from './abstract-view';
import Application from '../application';

import questsData from '../data/questsData';
import Header from './header.js';

import statsBlock from '../templates/statsBlock.js';

import {fillQuestionTypeEach, fillQuestionTypedrawOrPhoto, fillQuestionTypefindOne} from '../templates/fillQuestion.js';

// в зависимости от типа вопроса погдрузка нужного шаблона
// заполнение его данными
// выгрузка полностью собранного экрана игры

export default (typeOfQuestion, question) => {

  class GameScreen extends AbstractView {
    constructor(data) {
      super();
      this.data = data;

      this.header = new Header(questsData);
      this.questBlock = [];

      this.answer = null;

      switch (typeOfQuestion) {
        case 'each':
          this.questBlock = fillQuestionTypeEach(question);
          break;
        case 'drawOrPhoto':
          this.questBlock = fillQuestionTypedrawOrPhoto(question);
          break;
        case 'findOne':
          this.questBlock = fillQuestionTypefindOne(question);
          break;
        default:
          throw new Error('sorry, wierd question');
      }

    }

    getMarkup() {
      return `
      ${this.header.getMarkup()}
      <div class="game">
        ${this.questBlock}
        ${statsBlock}
      </div>
      `;
    }

    bindHandlers() {
      let answers = this.element.querySelectorAll('.game__answer');

      switch (answers.length) {
        case 0:
          answers = this.element.querySelectorAll('.game__option');
          for (const answer of answers) {
            answer.addEventListener('click', this.onClickPrev);
          }
          break;
        case 2:
          for (const answer of answers) {
            answer.addEventListener('click', this.onClickPrev);
          }
          break;
        case 4:
          for (const item of answers) {
            item.onclick = (event) => {
              event.preventDefault();
              event.currentTarget.querySelector('input[type=radio]').checked = true;
              const checkedAnswers = this.element.querySelectorAll('input[type=radio]:checked');
              if (checkedAnswers.length === 2) {
                this.onClick();
              }
            };
          }
          break;
        default:
          throw new Error('wtf');
      }
    }

    // вопрос
    clearHandlers() {
      this.answer.removeEventListener('click', this.onClick);
      this.answer.removeEventListener('click', this.onClickPrev);
    }


    onClick(evt) {
      Application.showGame();
    }

    onClickPrev(evt) {
      evt.preventDefault();
      Application.showGame();
    }
  }

  return new GameScreen().element;
};
